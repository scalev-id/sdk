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
  httpPath: '/v2/stores/simplified',
  operationId: 'ScalevApiWeb.StoreController.index_simplified',
};

export const tool: Tool = {
  name: 'list_simplified_stores',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of stores with simplified fields and optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'ListSimplifiedStore',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Store ID'\n              },\n              business_id: {\n                type: 'integer',\n                description: 'Business ID'\n              },\n              custom_domain: {\n                type: 'object',\n                title: 'SimpleCustomDomain',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Custom Domain ID'\n                  },\n                  full_url: {\n                    type: 'string',\n                    description: 'Full URL'\n                  },\n                  is_verified: {\n                    type: 'boolean',\n                    description: 'Is Verified'\n                  }\n                }\n              },\n              logo: {\n                type: 'string',\n                description: 'URL of the store logo'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the store'\n              },\n              payment_methods: {\n                type: 'array',\n                description: 'Payment methods available in the store',\n                items: {\n                  type: 'string',\n                  description: 'Order payment method',\n                  enum: [                    'va',\n                    'qris',\n                    'card',\n                    'invoice',\n                    'alfamart',\n                    'ovo',\n                    'dana',\n                    'shopeepay',\n                    'linkaja',\n                    'gopay',\n                    'no_payment',\n                    'bank_transfer',\n                    'marketplace',\n                    'cod'\n                  ]\n                }\n              },\n              sub_payment_methods: {\n                type: 'array',\n                description: 'Xendit VA bank codes',\n                items: {\n                  type: 'string',\n                  description: 'Xendit VA bank code',\n                  enum: [                    'BCA',\n                    'BNI',\n                    'BRI',\n                    'MANDIRI',\n                    'PERMATA',\n                    'BSI',\n                    'BJB',\n                    'CIMB',\n                    'SAHABAT_SAMPOERNA',\n                    'ARTAJASA'\n                  ]\n                }\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Unique identifier for the store'\n              },\n              uuid: {\n                type: 'string',\n                description: 'UUID of the store'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
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
  const response = await client.stores.listSimplified(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
