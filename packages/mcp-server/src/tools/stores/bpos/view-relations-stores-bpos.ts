// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores.bpos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/bpos/{id}/relations',
  operationId: 'ScalevApiWeb.StoreController.show_bpo_relations',
};

export const tool: Tool = {
  name: 'view_relations_stores_bpos',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves detailed relation of a specific Bundle Price Option associated with a store.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bpo_view_relations_response',\n  $defs: {\n    bpo_view_relations_response: {\n      type: 'object',\n      title: 'BundlePriceOptionForStoreRelation',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Bundle Price Option ID'\n        },\n        bundle_id: {\n          type: 'integer',\n          description: 'Bundle ID'\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        pages: {\n          type: 'object',\n          properties: {\n            all: {\n              type: 'array',\n              items: {\n                type: 'object',\n                title: 'PageRelation',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Page ID'\n                  },\n                  business: {\n                    type: 'object',\n                    title: 'BusinessSimple',\n                    properties: {\n                      id: {\n                        type: 'integer',\n                        description: 'Business ID'\n                      },\n                      account_holder: {\n                        type: 'string',\n                        description: 'Name of the account holder'\n                      },\n                      email: {\n                        type: 'string',\n                        description: 'Email address of the business'\n                      },\n                      is_banned: {\n                        type: 'boolean',\n                        description: 'Is the business banned?'\n                      },\n                      logo: {\n                        type: 'string',\n                        description: 'URL to the business logo'\n                      },\n                      unique_id: {\n                        type: 'string',\n                        description: 'Unique identifier for the business'\n                      },\n                      username: {\n                        type: 'string',\n                        description: 'Username of the business'\n                      }\n                    }\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Name of the page'\n                  },\n                  slug: {\n                    type: 'string',\n                    description: 'Slug for the page URL'\n                  },\n                  unique_id: {\n                    type: 'string',\n                    description: 'Unique identifier for the page'\n                  }\n                }\n              }\n            },\n            will_unpublish: {\n              type: 'array',\n              items: {\n                type: 'object',\n                title: 'PageRelation',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Page ID'\n                  },\n                  business: {\n                    type: 'object',\n                    title: 'BusinessSimple',\n                    properties: {\n                      id: {\n                        type: 'integer',\n                        description: 'Business ID'\n                      },\n                      account_holder: {\n                        type: 'string',\n                        description: 'Name of the account holder'\n                      },\n                      email: {\n                        type: 'string',\n                        description: 'Email address of the business'\n                      },\n                      is_banned: {\n                        type: 'boolean',\n                        description: 'Is the business banned?'\n                      },\n                      logo: {\n                        type: 'string',\n                        description: 'URL to the business logo'\n                      },\n                      unique_id: {\n                        type: 'string',\n                        description: 'Unique identifier for the business'\n                      },\n                      username: {\n                        type: 'string',\n                        description: 'Username of the business'\n                      }\n                    }\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Name of the page'\n                  },\n                  slug: {\n                    type: 'string',\n                    description: 'Slug for the page URL'\n                  },\n                  unique_id: {\n                    type: 'string',\n                    description: 'Unique identifier for the page'\n                  }\n                }\n              }\n            }\n          }\n        },\n        slug: {\n          type: 'string',\n          description: 'Slug'\n        },\n        unique_id: {\n          type: 'string',\n          description: 'Bundle Price Option Unique ID'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['store_id', 'id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.stores.bpos.viewRelations(id, body)));
};

export default { metadata, tool, handler };
