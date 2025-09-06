// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/order/{id}/update-tags',
  operationId: 'ScalevApiWeb.OrderController.update_tags',
};

export const tool: Tool = {
  name: 'update_tags_order',
  description: 'Update tags for an order.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Order tags to update',
        },
      },
    },
    required: ['id', 'tags'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.updateTags(id, body));
};

export default { metadata, tool, handler };
