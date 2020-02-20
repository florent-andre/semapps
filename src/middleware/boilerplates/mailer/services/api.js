const ApiGateway = require('moleculer-web');

const ApiService = {
  mixins: [ApiGateway],
  settings: {
    server: false,
    routes: [
      {
        bodyParsers: {
          json: true,
          urlencoded: { extended: true }
        },
        aliases: {
          'POST /': 'form.process',
          'GET /': 'form.display',
          'POST /users/:username/inbox': 'activitypub.inbox.post',
          // TODO remove as we don't need to make these URLs public
          'GET /users/:id': 'activitypub.actor.get',
          'GET /users/:username/inbox': 'activitypub.inbox.list',
          'GET /users/:username/outbox': 'activitypub.outbox.list',
          'GET /users/:username/followers': 'activitypub.follow.listFollowers',
          'GET /users/:username/following': 'activitypub.follow.listFollowing'
        }
      }
    ]
  }
};

module.exports = ApiService;
