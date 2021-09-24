export function assembleTypesenseServerConfig() {
  let TYPESENSE_SERVER_CONFIG = {
    apiKey: process.env.TYPESENSE_SEARCH_ONLY_API_KEY, // Be sure to use an API key that only allows searches, in production
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
    numRetries: 8,
    connectionTimeoutSeconds: 1,
  };

  if (process.env[`TYPESENSE_HOST_2`]) {
    TYPESENSE_SERVER_CONFIG.nodes.push({
      host: process.env[`TYPESENSE_HOST_2`],
      port: process.env.TYPESENSE_PORT,
      protocol: process.env.TYPESENSE_PROTOCOL,
    });
  }

  if (process.env[`TYPESENSE_HOST_3`]) {
    TYPESENSE_SERVER_CONFIG.nodes.push({
      host: process.env[`TYPESENSE_HOST_3`],
      port: process.env.TYPESENSE_PORT,
      protocol: process.env.TYPESENSE_PROTOCOL,
    });
  }

  if (process.env[`TYPESENSE_HOST_NEAREST`]) {
    TYPESENSE_SERVER_CONFIG['nearestNode'] = {
      host: process.env[`TYPESENSE_HOST_NEAREST`],
      port: process.env.TYPESENSE_PORT,
      protocol: process.env.TYPESENSE_PROTOCOL,
    };
  }

  return TYPESENSE_SERVER_CONFIG;
}
