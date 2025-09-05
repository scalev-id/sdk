// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/products/{id}',
  operationId: 'ScalevApiWeb.ProductController.show',
};

export const tool: Tool = {
  name: 'retrieve_products',
  description: 'Retrieves the details of a single product, including its variants and other associated data.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.products.retrieve(id));
};

export default { metadata, tool, handler };
