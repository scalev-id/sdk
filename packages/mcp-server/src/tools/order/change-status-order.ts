// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/order/change-status',
  operationId: 'ScalevApiWeb.OrderController.change_status',
};

export const tool: Tool = {
  name: 'change_status_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nChange the status of multiple orders.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'OrderChangeStatus',\n        properties: {\n          id: {\n            type: 'integer',\n            description: 'Order primary key'\n          },\n          order_id: {\n            type: 'string',\n            description: 'Order ID in string format'\n          },\n          payment_status: {\n            type: 'string',\n            description: 'Order payment status',\n            enum: [              'unpaid',\n              'paid',\n              'conflict',\n              'settled'\n            ]\n          },\n          status: {\n            type: 'string',\n            description: 'Order status',\n            enum: [              'draft',\n              'pending',\n              'confirmed',\n              'in_process',\n              'ready',\n              'shipped',\n              'completed',\n              'canceled',\n              'rts',\n              'closed'\n            ]\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      by: {
        type: 'string',
        description: 'Entity or user performing the status change',
      },
      financial_entity_id: {
        type: 'integer',
        description: 'Financial entity ID',
      },
      ids: {
        type: 'array',
        items: {
          type: 'integer',
          description: 'Order primary key IDs',
        },
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
      payment_status: {
        type: 'string',
        description: 'Order payment status',
        enum: ['unpaid', 'paid', 'conflict', 'settled'],
      },
      rtsproof_url: {
        type: 'string',
        description: 'Return to sender proof image URL',
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
      transfer_time: {
        type: 'string',
        description: 'Transfer timestamp (ISO 8601 format)',
        format: 'date-time',
      },
      transferproof_url: {
        type: 'string',
        description: 'Transfer proof image URL',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.changeStatus(body)));
};

export default { metadata, tool, handler };
