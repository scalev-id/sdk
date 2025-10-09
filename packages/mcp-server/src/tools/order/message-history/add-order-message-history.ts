// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order.message_history',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/order/{id}/message-history',
  operationId: 'ScalevApiWeb.OrderController.add_message_history',
};

export const tool: Tool = {
  name: 'add_order_message_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a new message to order message history.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/message_history_add_response',\n  $defs: {\n    message_history_add_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        data: {\n          type: 'object',\n          title: 'OrderMessageHistory',\n          properties: {\n            id: {\n              type: 'integer',\n              description: 'Order primary key'\n            },\n            message_history: {\n              type: 'array',\n              description: 'Message history associated with the order',\n              items: {\n                type: 'object',\n                title: 'MessageHistoryItem',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'ID of the Follow Up Chat'\n                  },\n                  is_from_bot: {\n                    type: 'boolean',\n                    description: 'Is the message from bot'\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'Message content'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Name of the sender'\n                  },\n                  provider: {\n                    type: 'string',\n                    description: 'Message provider'\n                  },\n                  recipient_name: {\n                    type: 'string',\n                    description: 'Recipient name'\n                  },\n                  recipient_phone: {\n                    type: 'string',\n                    description: 'Recipient phone number'\n                  },\n                  sender_name: {\n                    type: 'string',\n                    description: 'Sender name'\n                  },\n                  sender_phone: {\n                    type: 'string',\n                    description: 'Sender phone number'\n                  },\n                  timestamp: {\n                    type: 'string',\n                    description: 'Timestamp of the message',\n                    format: 'date-time'\n                  }\n                }\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      follow_up_chat_id: {
        type: 'integer',
        description: 'Follow-up chat ID',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'follow_up_chat_id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.messageHistory.add(id, body)));
};

export default { metadata, tool, handler };
