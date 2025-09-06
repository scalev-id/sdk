// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/stores',
  operationId: 'ScalevApiWeb.StoreController.create',
};

export const tool: Tool = {
  name: 'create_stores',
  description: 'Creates a new store with the provided details.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Store name',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.stores.create(body));
};

export default { metadata, tool, handler };
