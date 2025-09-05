// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/products/{product_id}/relations',
  operationId: 'ScalevApiWeb.ProductController.show_relations',
};

export const tool: Tool = {
  name: 'show_relations_products',
  description: 'Shows the relations of a product, including variants, stores, bundles, and pages.',
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'integer',
      },
    },
    required: ['product_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { product_id, ...body } = args as any;
  return asTextContentResult(await client.products.showRelations(product_id));
};

export default { metadata, tool, handler };
