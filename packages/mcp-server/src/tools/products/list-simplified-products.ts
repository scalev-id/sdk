// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/products/simplified',
  operationId: 'ScalevApiWeb.ProductController.index_simplified',
};

export const tool: Tool = {
  name: 'list_simplified_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a simplified paginated list of products with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'SimplifiedProductList',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Product primary key'\n              },\n              display: {\n                type: 'string',\n                description: 'Display name of the product'\n              },\n              images: {\n                type: 'array',\n                description: 'List of image URLs associated with the product',\n                items: {\n                  type: 'string'\n                }\n              },\n              is_owned_by_store: {\n                type: 'boolean',\n                description: 'If the request is made including `for_store_id` param, it shows `is_owned_by_store` field in the response, indicating if the product is included in the store.'\n              },\n              item_type: {\n                type: 'string',\n                title: 'ItemType',\n                description: 'Type of the product item',\n                enum: [                  'physical',\n                  'digital',\n                  'course'\n                ]\n              },\n              item_type_name: {\n                type: 'string',\n                description: 'Human-readable name of the product item type'\n              },\n              labels: {\n                type: 'array',\n                description: 'List of labels associated with the product',\n                items: {\n                  type: 'object',\n                  title: 'ItemLabel',\n                  properties: {\n                    name: {\n                      type: 'string',\n                      description: 'Label name'\n                    }\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Product name'\n              },\n              uuid: {\n                type: 'string',\n                description: 'Product UUID'\n              },\n              variants: {\n                type: 'array',\n                description: 'List of variants associated with the product',\n                items: {\n                  type: 'object',\n                  title: 'VariantList',\n                  properties: {\n                    id: {\n                      type: 'integer',\n                      description: 'Variant primary key'\n                    },\n                    digital_product_files: {\n                      type: 'array',\n                      description: 'List of digital product files associated with the variant',\n                      items: {\n                        type: 'object',\n                        title: 'DigitalProductFile',\n                        properties: {\n                          id: {\n                            type: 'integer',\n                            description: 'Digital product file primary key'\n                          },\n                          content_type: {\n                            type: 'string',\n                            description: 'MIME type of the digital product file'\n                          },\n                          name: {\n                            type: 'string',\n                            description: 'File name of the digital product file'\n                          },\n                          size_in_bytes: {\n                            type: 'integer',\n                            description: 'Size of the digital product file in bytes'\n                          },\n                          url: {\n                            type: 'string',\n                            description: 'URL to access the digital product file'\n                          }\n                        }\n                      }\n                    },\n                    images: {\n                      type: 'array',\n                      description: 'List of image URLs associated with the variant',\n                      items: {\n                        type: 'string'\n                      }\n                    },\n                    is_checked: {\n                      type: 'boolean',\n                      description: 'Mark variant as sellable'\n                    },\n                    is_editable: {\n                      type: 'boolean',\n                      description: 'Indicates if the variant is editable'\n                    },\n                    item_type: {\n                      type: 'string',\n                      description: 'Type of the product item',\n                      enum: [                        'physical',\n                        'digital',\n                        'course'\n                      ]\n                    },\n                    metadata: {\n                      type: 'object',\n                      description: 'Additional metadata associated with the variant',\n                      additionalProperties: true\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Full name of the variant'\n                    },\n                    product_name: {\n                      type: 'string',\n                      description: 'Name of the associated product'\n                    },\n                    self_file_urls: {\n                      type: 'array',\n                      description: 'List of self file URLs associated with the variant',\n                      items: {\n                        type: 'string'\n                      }\n                    },\n                    unique_id: {\n                      type: 'string',\n                      description: 'Variant unique identifier'\n                    },\n                    uuid: {\n                      type: 'string',\n                      description: 'Variant UUID'\n                    },\n                    weight: {\n                      type: 'integer',\n                      description: 'Weight of the variant in grams'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      for_store_id: {
        type: 'integer',
        description:
          'If provided, includes `is_owned_by_store` field in the bundle price options to indicate if the option is already included in the specified store.',
      },
      is_checked: {
        type: 'boolean',
        description: 'Show variants in products where is_checked is true or false',
      },
      is_inventory: {
        type: 'boolean',
        description: 'Filter products by inventory tracking status (true or false)',
      },
      is_owned: {
        type: 'boolean',
        description:
          "Filter products by ownership. 'true' returns products owned by the business, 'false' returns shared products",
      },
      is_product_sharing: {
        type: 'boolean',
        description: 'Filter products by product sharing status (true or false)',
      },
      item_type: {
        type: 'string',
        description: 'Filter products by item type (physical, digital, course)',
        enum: ['physical', 'digital', 'course'],
      },
      label: {
        type: 'string',
        description: 'Filter products associated with a specific label name',
      },
      last_id: {
        type: 'integer',
        description: 'Last order ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      qty_type: {
        type: 'string',
        description:
          "Type of quantity to filter by. Options are 'available_qty' (only products with variants that have available quantity > 0)",
        enum: ['available_qty'],
      },
      search: {
        type: 'string',
        description: 'Search term to filter products by name (case-insensitive, partial match)',
      },
      store_id: {
        type: 'integer',
        description: 'Filter products associated with a specific store ID',
      },
      warehouse_id: {
        type: 'integer',
        description: 'Filter products associated with a specific warehouse ID',
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
  const response = await client.products.listSimplified(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
