// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/bundles',
  operationId: 'ScalevApiWeb.BundleController.create',
};

export const tool: Tool = {
  name: 'create_bundles',
  description: 'Creates a new bundle with the provided data.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name',
      },
      bundle_price_options: {
        type: 'array',
        description: 'List of Bundle Price Options',
        items: {
          type: 'object',
          title: 'BundlePriceOptionRequest',
          properties: {
            name: {
              type: 'string',
              description: 'Name',
            },
            price: {
              type: 'number',
              description: 'Price (including tax)',
            },
            slug: {
              type: 'string',
              description: 'Slug',
            },
          },
          required: ['name', 'price'],
        },
      },
      bundlelines: {
        type: 'array',
        description: 'List of Bundle Lines',
        items: {
          type: 'object',
          title: 'BundleLineCreateRequest',
          properties: {
            quantity: {
              type: 'integer',
              description: 'Quantity of the variant in the bundle line',
            },
            variant_id: {
              type: 'integer',
              description: 'Variant ID',
            },
          },
          required: ['quantity', 'variant_id'],
        },
      },
      custom_id: {
        type: 'string',
        description: 'Custom Identifier',
      },
      description: {
        type: 'string',
        description: 'Description',
      },
      images: {
        type: 'array',
        description: 'List of Image URLs',
        items: {
          type: 'string',
        },
      },
      meta_thumbnail: {
        type: 'string',
        description: 'Meta Thumbnail URL',
      },
      public_name: {
        type: 'string',
        description: 'Public Name',
      },
      rich_description: {
        type: 'string',
        description: 'Rich Description',
      },
      weight_bump: {
        type: 'integer',
        description: 'Weight Bump',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.bundles.create(body));
};

export default { metadata, tool, handler };
