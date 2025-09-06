// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v2/order/{id}/customer',
  operationId: 'ScalevApiWeb.OrderController.update_customer',
};

export const tool: Tool = {
  name: 'update_customer_order',
  description: 'Update the customer associated with an order.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      customer_id: {
        type: 'integer',
        description: 'Customer ID',
      },
    },
    required: ['id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.updateCustomer(id, body));
};

export default { metadata, tool, handler };
