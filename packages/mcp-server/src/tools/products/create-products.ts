// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/products',
  operationId: 'ScalevApiWeb.ProductController.create',
};

export const tool: Tool = {
  name: 'create_products',
  description: 'Creates a new product with the provided data.',
  inputSchema: {
    type: 'object',
    properties: {
      item_type: {
        type: 'string',
        title: 'ItemType',
        description: 'Type of the product item',
        enum: ['physical', 'digital', 'course'],
      },
      name: {
        type: 'string',
        description: 'Product Name',
      },
      description: {
        type: 'string',
        description: 'Description',
      },
      is_inventory: {
        type: 'boolean',
        description: 'Is Inventory',
      },
      is_multiple: {
        type: 'boolean',
        description: 'Is Multiple',
      },
      is_product_sharing: {
        type: 'boolean',
        description: 'Is Product Sharing',
      },
      meta_thumbnail: {
        type: 'string',
        description: 'Meta Thumbnail',
      },
      option1_name: {
        type: 'string',
        description: 'Option 1 Name',
      },
      option2_name: {
        type: 'string',
        description: 'Option 2 Name',
      },
      option3_name: {
        type: 'string',
        description: 'Option 3 Name',
      },
      public_name: {
        type: 'string',
        description: 'Product Public Name',
      },
      rich_description: {
        type: 'string',
        description: 'Rich Description',
      },
      slug: {
        type: 'string',
        description: 'Product Slug',
      },
      taxonomy_id: {
        type: 'integer',
        description: 'Taxonomy ID',
      },
      variants: {
        type: 'array',
        description: 'List of variants associated with the product',
        items: {
          type: 'object',
          title: 'RequestVariant',
          properties: {
            price: {
              type: 'number',
              description: 'Price',
            },
            weight: {
              type: 'integer',
              description: 'Weight in grams',
            },
            cogs: {
              type: 'number',
              description: 'Cost of Goods Sold',
            },
            description: {
              type: 'string',
              description: 'Variant Description',
            },
            images: {
              type: 'array',
              description: 'List of image URLs',
              items: {
                type: 'string',
              },
            },
            is_checked: {
              type: 'boolean',
              description: 'Mark variant as sellable',
            },
            metadata: {
              type: 'object',
              description: 'Additional metadata',
              additionalProperties: true,
            },
            option1_value: {
              type: 'string',
              description: 'Option 1 Value',
            },
            option2_value: {
              type: 'string',
              description: 'Option 2 Value',
            },
            option3_value: {
              type: 'string',
              description: 'Option 3 Value',
            },
            reseller_price: {
              type: 'number',
              description: 'Reseller Price',
            },
            rich_description: {
              type: 'string',
              description: 'Variant Rich Description',
            },
            self_file_urls: {
              type: 'array',
              description: 'List of self file URLs',
              items: {
                type: 'string',
              },
            },
            sku: {
              type: 'string',
              description: 'SKU',
            },
          },
          required: ['price', 'weight'],
        },
      },
    },
    required: ['item_type', 'name'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.products.create(body));
};

export default { metadata, tool, handler };
