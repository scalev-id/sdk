// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/order/{id}/duplicate',
  operationId: 'ScalevApiWeb.OrderController.duplicate_and_cancel',
};

export const tool: Tool = {
  name: 'duplicate_order',
  description: 'Create a duplicate of an order and cancel the original.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      financial_entity_id: {
        type: 'integer',
        description: 'Financial entity ID',
      },
      metadata: {
        type: 'object',
        description: 'Metadata to be copied to the new order',
        additionalProperties: true,
      },
      payment_account_holder: {
        type: 'string',
        description: 'Payment account holder name',
      },
      payment_account_number: {
        type: 'string',
        description: 'Payment account number',
      },
      payment_method: {
        type: 'string',
        description: 'Order payment method',
        enum: [
          'va',
          'qris',
          'card',
          'invoice',
          'alfamart',
          'ovo',
          'dana',
          'shopeepay',
          'linkaja',
          'gopay',
          'no_payment',
          'bank_transfer',
          'marketplace',
          'cod',
        ],
      },
      sub_payment_method: {
        type: 'string',
        description: 'Xendit VA bank code',
        enum: [
          'BCA',
          'BNI',
          'BRI',
          'MANDIRI',
          'PERMATA',
          'BSI',
          'BJB',
          'CIMB',
          'SAHABAT_SAMPOERNA',
          'ARTAJASA',
        ],
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.duplicate(id, body));
};

export default { metadata, tool, handler };
