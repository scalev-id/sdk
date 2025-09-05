// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/order/{id}/check-settlement',
  operationId: 'ScalevApiWeb.OrderViewController.check_order_settlement',
};

export const tool: Tool = {
  name: 'check_settlement_order',
  description: 'Check the settlement status of an order.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.checkSettlement(id));
};

export default { metadata, tool, handler };
