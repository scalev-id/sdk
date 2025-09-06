// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores',
  operationId: 'ScalevApiWeb.StoreController.index',
};

export const tool: Tool = {
  name: 'list_stores',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of stores with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'ListStore',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Store ID'\n              },\n              business_id: {\n                type: 'integer',\n                description: 'Business ID'\n              },\n              cod_purchase_triggers: {\n                type: 'array',\n                description: 'COD purchase triggers',\n                items: {\n                  type: 'string',\n                  enum: [                    'public_upload',\n                    'internal_upload',\n                    'confirmed',\n                    'shipped',\n                    'completed'\n                  ]\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'Creation timestamp',\n                format: 'date-time'\n              },\n              created_by: {\n                type: 'object',\n                title: 'UserSimple',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'User ID'\n                  },\n                  aff_code: {\n                    type: 'string',\n                    description: 'Affiliate code of the user'\n                  },\n                  avatar: {\n                    type: 'string',\n                    description: 'URL to user avatar'\n                  },\n                  email: {\n                    type: 'string',\n                    description: 'User email'\n                  },\n                  fullname: {\n                    type: 'string',\n                    description: 'User full name'\n                  },\n                  phone: {\n                    type: 'string',\n                    description: 'User phone number'\n                  }\n                }\n              },\n              custom_domain: {\n                type: 'object',\n                title: 'SimpleCustomDomain',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Custom Domain ID'\n                  },\n                  full_url: {\n                    type: 'string',\n                    description: 'Full URL'\n                  },\n                  is_verified: {\n                    type: 'boolean',\n                    description: 'Is Verified'\n                  }\n                }\n              },\n              is_dropshipping_allowed: {\n                type: 'boolean',\n                description: 'Is dropshipping allowed in this store?'\n              },\n              is_manual_shipping_cost: {\n                type: 'boolean',\n                description: 'Is manual shipping cost enabled?'\n              },\n              is_moota_enabled: {\n                type: 'boolean',\n                description: 'Is Moota integration enabled for this store?'\n              },\n              is_show_scalev_branding: {\n                type: 'boolean',\n                description: 'Is Scalev branding shown?'\n              },\n              is_transferproof_required: {\n                type: 'boolean',\n                description: 'Is transfer proof required for orders in this store?'\n              },\n              is_unique_code: {\n                type: 'boolean',\n                description: 'Is unique code required for orders?'\n              },\n              last_updated_at: {\n                type: 'string',\n                description: 'Last update timestamp',\n                format: 'date-time'\n              },\n              last_updated_by: {\n                type: 'object',\n                title: 'UserSimple',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'User ID'\n                  },\n                  aff_code: {\n                    type: 'string',\n                    description: 'Affiliate code of the user'\n                  },\n                  avatar: {\n                    type: 'string',\n                    description: 'URL to user avatar'\n                  },\n                  email: {\n                    type: 'string',\n                    description: 'User email'\n                  },\n                  fullname: {\n                    type: 'string',\n                    description: 'User full name'\n                  },\n                  phone: {\n                    type: 'string',\n                    description: 'User phone number'\n                  }\n                }\n              },\n              logo: {\n                type: 'string',\n                description: 'URL of the store logo'\n              },\n              max_unique_code_amount: {\n                type: 'integer',\n                description: 'Maximum amount for unique code orders'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the store'\n              },\n              non_cod_purchase_triggers: {\n                type: 'array',\n                description: 'Non-COD purchase triggers',\n                items: {\n                  type: 'string',\n                  enum: [                    'public_upload',\n                    'internal_upload',\n                    'confirmed',\n                    'shipped',\n                    'completed'\n                  ]\n                }\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Unique identifier for the store'\n              },\n              uuid: {\n                type: 'string',\n                description: 'UUID of the store'\n              },\n              warehouse_id: {\n                type: 'integer',\n                description: 'Warehouse ID'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Filter stores by custom domain (case-insensitive, exact match)',
      },
      has_domain: {
        type: 'boolean',
        description: 'Filter stores that have a custom domain (true/false)',
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
        description: 'Search term to filter stores by name (case-insensitive, partial match)',
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
  const response = await client.stores.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
