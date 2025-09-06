// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v2/order/{id}/shipment',
  operationId: 'ScalevApiWeb.OrderController.update_shipment_raw',
};

export const tool: Tool = {
  name: 'update_shipment_order',
  description: 'Update shipment-related data for an order.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      awb_ca_status: {
        type: 'string',
        description: 'Order AWB courier aggregator status',
        enum: ['unavailable', 'pending', 'waiting', 'failed', 'created', 'canceled'],
      },
      courier_additional_info: {
        type: 'string',
        description: 'Additional courier information',
      },
      is_shipment_completed: {
        type: 'boolean',
        description: 'Is the shipment completed',
      },
      shipment_provider_code: {
        type: 'string',
        description: 'Shipment provider code',
        enum: ['mengantar', 'lincah', 'ninja'],
      },
      shipment_receipt: {
        type: 'string',
        description: 'Shipment receipt / tracking ID',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.updateShipment(id, body));
};

export default { metadata, tool, handler };
