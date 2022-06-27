const { MoleculerError } = require('moleculer').Errors;
const { MIME_TYPES } = require('@semapps/mime-types');
const { isMirror } = require('../../../utils');

module.exports = {
  visibility: 'public',
  params: {
    resource: 'object',
    webId: {
      type: 'string',
      optional: true
    },
    contentType: {
      type: 'string'
    },
    disassembly: {
      type: 'array',
      optional: true
    }
  },
  async handler(ctx) {
    let { resource, contentType } = ctx.params;
    const webId = ctx.params.webId || ctx.meta.webId || 'anon';

    const resourceUri = resource.id || resource['@id'];

    const mirror = isMirror(resourceUri, this.settings.baseUrl);
    if (mirror && !ctx.meta.forceMirror)
      throw new MoleculerError('Mirrored resources cannot be created with LDP PUT', 403, 'FORBIDDEN');

    const { disassembly, jsonContext, controlledActions } = {
      ...(await ctx.call('ldp.registry.getByUri', { resourceUri })),
      ...ctx.params
    };

    const resourceExist = await ctx.call('ldp.resource.exist', { resourceUri, webId });
    if (resourceExist) {
      throw new MoleculerError(`A resource already exist with URI ${resourceUri}`, 400, 'BAD_REQUEST');
    }

    // Adds the default context, if it is missing
    if (jsonContext && contentType === MIME_TYPES.JSON && !resource['@context']) {
      resource = {
        '@context': jsonContext,
        ...resource
      };
    }

    if (disassembly && contentType === MIME_TYPES.JSON) {
      await this.createDisassembly(ctx, disassembly, resource);
    }

    if (contentType !== MIME_TYPES.JSON && !resource.body)
      throw new MoleculerError('The resource must contain a body member (a string)', 400, 'BAD_REQUEST');

    await ctx.call('triplestore.insert', {
      resource: contentType === MIME_TYPES.JSON ? resource : resource.body,
      contentType,
      webId,
      graphName: mirror ? '<' + this.settings.mirrorGraphName + '>' : undefined
    });

    const newData = await ctx.call(
      (controlledActions && controlledActions.get) || 'ldp.resource.get',
      {
        resourceUri,
        accept: MIME_TYPES.JSON,
        forceSemantic: true,
        webId
      },
      { meta: { $cache: false } }
    );

    const returnValues = {
      resourceUri,
      newData,
      webId
    };

    ctx.emit('ldp.resource.created', returnValues, { meta: { webId: null, dataset: null, isMirror: mirror } });

    return returnValues;
  }
};
