const urlJoin = require('url-join');
const path = require('path');
const MailService = require('moleculer-mail');

const SingleMailNotificationsService = {
  name: 'notifications.single-mail',
  mixins: [MailService],
  settings: {
    defaultLocale: 'en',
    defaultFrontUrl: null,
    // See moleculer-mail doc https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-mail
    templateFolder: path.join(__dirname, '../../templates'),
    from: null,
    transport: null,
    data: {}
  },
  events: {
    async 'activitypub.inbox.received'(ctx) {
      const { activity, recipients } = ctx.params;

      for (let recipientUri of recipients) {
        const account = await ctx.call('auth.account.findByWebId', { webId: recipientUri });
        const locale = account.preferredLocale || this.settings.defaultLocale;
        const frontUrl = account.preferredFrontUrl || this.settings.defaultFrontUrl;

        const notification = await ctx.call('activity-mapping.map', { activity, locale });

        if (notification && (await this.filterNotification(notification))) {
          if (notification.actionLink) notification.actionLink = urlJoin(frontUrl, notification.actionLink);

          await this.queueMail(ctx, notification.key, {
            to: account.email,
            locale,
            data: {
              ...notification,
              descriptionWithBr: notification.description
                ? notification.description.replace(/\r\n|\r|\n/g, '<br />')
                : undefined
            }
          });
        }
      }
    }
  },
  methods: {
    // Optional method called for each notification
    // Return true if you want the notification to be sent by email
    async filterNotification(notification) {
      return true;
    },
    async queueMail(ctx, key, payload) {
      payload.template = 'single-mail';
      if (this.createJob) {
        return this.createJob('sendMail', key, payload);
      } else {
        await this.actions.send(payload, { parentCtx: ctx });
      }
    }
  },
  queues: {
    sendMail: {
      name: '*',
      async process(job) {
        job.progress(0);
        const result = await this.actions.send(job.data);
        job.progress(100);
        return result;
      }
    }
  }
};

module.exports = SingleMailNotificationsService;
