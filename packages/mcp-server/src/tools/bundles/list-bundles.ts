// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/bundles',
  operationId: 'ScalevApiWeb.BundleController.index',
};

export const tool: Tool = {
  name: 'list_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of bundles with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'BundleList',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Bundle ID'\n              },\n              business: {\n                type: 'object',\n                title: 'BusinessSimple',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Business ID'\n                  },\n                  account_holder: {\n                    type: 'string',\n                    description: 'Name of the account holder'\n                  },\n                  email: {\n                    type: 'string',\n                    description: 'Email address of the business'\n                  },\n                  is_banned: {\n                    type: 'boolean',\n                    description: 'Is the business banned?'\n                  },\n                  logo: {\n                    type: 'string',\n                    description: 'URL to the business logo'\n                  },\n                  unique_id: {\n                    type: 'string',\n                    description: 'Unique identifier for the business'\n                  },\n                  username: {\n                    type: 'string',\n                    description: 'Username of the business'\n                  }\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'Creation timestamp',\n                format: 'date-time'\n              },\n              created_by: {\n                type: 'object',\n                title: 'UserSimple',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'User ID'\n                  },\n                  aff_code: {\n                    type: 'string',\n                    description: 'Affiliate code of the user'\n                  },\n                  avatar: {\n                    type: 'string',\n                    description: 'URL to user avatar'\n                  },\n                  email: {\n                    type: 'string',\n                    description: 'User email'\n                  },\n                  fullname: {\n                    type: 'string',\n                    description: 'User full name'\n                  },\n                  phone: {\n                    type: 'string',\n                    description: 'User phone number'\n                  }\n                }\n              },\n              custom_id: {\n                type: 'string',\n                description: 'Custom Identifier'\n              },\n              description: {\n                type: 'string',\n                description: 'Description'\n              },\n              display: {\n                type: 'string',\n                description: 'Display Name'\n              },\n              images: {\n                type: 'array',\n                description: 'List of Image URLs',\n                items: {\n                  type: 'string'\n                }\n              },\n              is_bundle_sharing: {\n                type: 'boolean',\n                description: 'Is Bundle Sharing Enabled'\n              },\n              last_updated_at: {\n                type: 'string',\n                description: 'Last update timestamp',\n                format: 'date-time'\n              },\n              last_updated_by: {\n                type: 'object',\n                title: 'UserSimple',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'User ID'\n                  },\n                  aff_code: {\n                    type: 'string',\n                    description: 'Affiliate code of the user'\n                  },\n                  avatar: {\n                    type: 'string',\n                    description: 'URL to user avatar'\n                  },\n                  email: {\n                    type: 'string',\n                    description: 'User email'\n                  },\n                  fullname: {\n                    type: 'string',\n                    description: 'User full name'\n                  },\n                  phone: {\n                    type: 'string',\n                    description: 'User phone number'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Name'\n              },\n              public_name: {\n                type: 'string',\n                description: 'Public Name'\n              },\n              variants_count: {\n                type: 'integer',\n                description: 'Number of variants in the bundle'\n              },\n              weight_bump: {\n                type: 'integer',\n                description: 'Weight Bump'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      is_bundle_sharing: {
        type: 'boolean',
        description: 'Filter bundles by their sharing status',
      },
      label: {
        type: 'string',
        description: 'Filter bundles that are associated with the specified label',
      },
      last_id: {
        type: 'integer',
        description: 'Last order ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search term to filter bundles by name (case-insensitive, partial match)',
      },
      store_id: {
        type: 'integer',
        description: 'Filter bundles that have price options available in the specified store ID',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.bundles.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
