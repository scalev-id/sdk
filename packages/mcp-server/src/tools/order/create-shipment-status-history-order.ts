// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/order/{id}/shipment-status-history',
  operationId: 'ScalevApiWeb.OrderController.create_ssh',
};

export const tool: Tool = {
  name: 'create_shipment_status_history_order',
  description: 'Create a new shipment status history entry for an order.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      description: {
        type: 'string',
        description: 'Description of the shipment status change',
      },
      status: {
        type: 'string',
        description: 'Order status',
        enum: [
          'draft',
          'pending',
          'confirmed',
          'in_process',
          'ready',
          'shipped',
          'completed',
          'canceled',
          'rts',
          'closed',
        ],
      },
      timestamp: {
        type: 'string',
        description: 'Timestamp of the shipment status change (ISO 8601 format)',
        format: 'date-time',
      },
    },
    required: ['id', 'description', 'status', 'timestamp'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.createShipmentStatusHistory(id, body));
};

export default { metadata, tool, handler };
