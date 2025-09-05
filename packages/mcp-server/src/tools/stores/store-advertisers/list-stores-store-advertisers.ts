// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores.store_advertisers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/store-advertisers',
  operationId: 'ScalevApiWeb.StoreController.index_store_advertiser',
};

export const tool: Tool = {
  name: 'list_stores_store_advertisers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of store advertisers associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'BusinessUser',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'The business user ID'\n              },\n              business_phone: {\n                type: 'string',\n                description: 'The business phone number'\n              },\n              role: {\n                type: 'object',\n                title: 'SimpleRole',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'The role ID'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the role'\n                  }\n                },\n                required: [                  'id',\n                  'name'\n                ]\n              },\n              user: {\n                type: 'object',\n                title: 'UserSimple',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'User ID'\n                  },\n                  aff_code: {\n                    type: 'string',\n                    description: 'Affiliate code of the user'\n                  },\n                  avatar: {\n                    type: 'string',\n                    description: 'URL to user avatar'\n                  },\n                  email: {\n                    type: 'string',\n                    description: 'User email'\n                  },\n                  fullname: {\n                    type: 'string',\n                    description: 'User full name'\n                  },\n                  phone: {\n                    type: 'string',\n                    description: 'User phone number'\n                  }\n                }\n              }\n            },\n            required: [              'id',\n              'business_phone',\n              'role',\n              'user'\n            ]\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      last_id: {
        type: 'integer',
        description: 'Last store advertiser ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['store_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { store_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.stores.storeAdvertisers.list(store_id, body)),
  );
};

export default { metadata, tool, handler };
