import urlJoin from 'url-join';

export const defaultToArray = value => (!value ? undefined : Array.isArray(value) ? value : [value]);

// Transform the URI to the one used to find the ACL
// To be compatible with all servers, we should do a HEAD request to the resource URI
export const getAclUri = resourceUri => {
  const parsedUrl = new URL(resourceUri);
  return urlJoin(parsedUrl.origin, '_acl', parsedUrl.pathname);
};

export const getAclContext = baseUri => ({
  '@base': baseUri,
  acl: 'http://www.w3.org/ns/auth/acl#',
  foaf: 'http://xmlns.com/foaf/0.1/',
  'acl:agent': { '@type': '@id' },
  'acl:agentGroup': { '@type': '@id' },
  'acl:agentClass': { '@type': '@id' },
  'acl:mode': { '@type': '@id' },
  'acl:accessTo': { '@type': '@id' }
});
