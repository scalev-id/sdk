// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/bundles/{id}',
  operationId: 'ScalevApiWeb.BundleController.update',
};

export const tool: Tool = {
  name: 'update_bundles',
  description: 'Updates an existing bundle with the provided data.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
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
      name: {
        type: 'string',
        description: 'Name',
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
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.bundles.update(id, body));
};

export default { metadata, tool, handler };
