// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores.bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/bundles',
  operationId: 'ScalevApiWeb.StoreController.index_bundle',
};

export const tool: Tool = {
  name: 'list_stores_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of bundles available in a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/bundle_list_response'\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    bundle_list_response: {\n      type: 'object',\n      title: 'BundleList',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Bundle ID'\n        },\n        available_qty: {\n          type: 'integer',\n          description: 'Available Quantity'\n        },\n        bundle_price_options: {\n          type: 'array',\n          description: 'List of Bundle Price Options',\n          items: {\n            type: 'object',\n            title: 'BundlePriceOptionSimple',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Bundle Price Option ID'\n              },\n              is_owned_by_store: {\n                type: 'boolean',\n                description: 'Is owned by store'\n              },\n              name: {\n                type: 'string',\n                description: 'Name'\n              },\n              price: {\n                type: 'number',\n                description: 'Price (including tax)'\n              },\n              price_bt: {\n                type: 'number',\n                description: 'Price before tax'\n              },\n              slug: {\n                type: 'string',\n                description: 'Slug'\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Bundle Price Option Unique ID'\n              }\n            }\n          }\n        },\n        bundlelines: {\n          type: 'array',\n          description: 'List of Bundle Lines with Product details',\n          items: {\n            type: 'object',\n            title: 'BundleLineForPageWithProduct',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Bundle Line ID'\n              },\n              quantity: {\n                type: 'integer',\n                description: 'Quantity of the variant in the bundle line'\n              },\n              variant: {\n                type: 'object',\n                title: 'VariantForPageWithProduct',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Variant ID'\n                  },\n                  description: {\n                    type: 'string',\n                    description: 'Variant Description'\n                  },\n                  images: {\n                    type: 'array',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  item_type: {\n                    type: 'string',\n                    title: 'ItemType',\n                    description: 'Type of the product item',\n                    enum: [                      'physical',\n                      'digital',\n                      'course'\n                    ]\n                  },\n                  metadata: {\n                    type: 'object',\n                    additionalProperties: true\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Variant Fullname'\n                  },\n                  option1_value: {\n                    type: 'string',\n                    description: 'Option 1 Value'\n                  },\n                  option2_value: {\n                    type: 'string',\n                    description: 'Option 2 Value'\n                  },\n                  option3_value: {\n                    type: 'string',\n                    description: 'Option 3 Value'\n                  },\n                  price: {\n                    type: 'number',\n                    description: 'Price'\n                  },\n                  product: {\n                    type: 'object',\n                    title: 'ProductNameType',\n                    properties: {\n                      id: {\n                        type: 'integer',\n                        description: 'Product ID'\n                      },\n                      item_type: {\n                        type: 'string',\n                        title: 'ItemType',\n                        description: 'Type of the product item',\n                        enum: [                          'physical',\n                          'digital',\n                          'course'\n                        ]\n                      },\n                      name: {\n                        type: 'string',\n                        description: 'Product Name'\n                      }\n                    }\n                  },\n                  product_id: {\n                    type: 'integer',\n                    description: 'Product ID'\n                  },\n                  product_name: {\n                    type: 'string',\n                    description: 'Product Name'\n                  },\n                  rich_description: {\n                    type: 'string',\n                    description: 'Variant Rich Description'\n                  },\n                  sku: {\n                    type: 'string',\n                    description: 'SKU'\n                  },\n                  unique_id: {\n                    type: 'string',\n                    description: 'Variant Unique ID'\n                  },\n                  weight: {\n                    type: 'integer',\n                    description: 'Weight'\n                  }\n                }\n              }\n            }\n          }\n        },\n        custom_id: {\n          type: 'string',\n          description: 'Custom Identifier'\n        },\n        display: {\n          type: 'string',\n          description: 'Display Name'\n        },\n        images: {\n          type: 'array',\n          description: 'List of Image URLs',\n          items: {\n            type: 'string'\n          }\n        },\n        is_bundle_sharing: {\n          type: 'boolean',\n          description: 'Is Bundle Sharing Enabled'\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        public_name: {\n          type: 'string',\n          description: 'Public Name'\n        },\n        weight_bump: {\n          type: 'integer',\n          description: 'Weight Bump'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      is_bundle_sharing: {
        type: 'boolean',
        description: 'Filter bundles that are shared across businesses (true/false)',
      },
      label: {
        type: 'string',
        description: 'Filter bundles by a specific label',
      },
      last_id: {
        type: 'integer',
        description: 'Last bundle ID for cursor-based pagination',
      },
      order_id: {
        type: 'integer',
        description: 'Primary key of the order to validate if the bundles are applicable for that order',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search term to filter bundles by name or description (case-insensitive, partial match)',
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
  const response = await client.stores.bundles.list(store_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
