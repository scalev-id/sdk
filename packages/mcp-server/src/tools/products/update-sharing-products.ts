// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v2/products/{product_id}/sharing',
  operationId: 'ScalevApiWeb.ProductController.update_sharing',
};

export const tool: Tool = {
  name: 'update_sharing_products',
  description: 'Updates the product sharing settings for a given product.',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'integer',
      },
      is_product_sharing: {
        type: 'boolean',
        description: 'Is Product Sharing',
      },
    },
    required: ['product_id', 'is_product_sharing'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { product_id, ...body } = args as any;
  return asTextContentResult(await client.products.updateSharing(product_id, body));
};

export default { metadata, tool, handler };
