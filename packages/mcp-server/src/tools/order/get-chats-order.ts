// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/order/{id}/chats',
  operationId: 'ScalevApiWeb.OrderViewController.get_chat_text',
};

export const tool: Tool = {
  name: 'get_chats_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve chat text messages associated with an order.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      title: 'OrderChat',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Order primary key'\n        },\n        chat_message: {\n          type: 'string',\n          description: 'Chat message associated with the order'\n        },\n        follow_up_chat_type: {\n          type: 'string',\n          description: 'Type of follow-up chat for the order'\n        },\n        follow_up_chats: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'FollowUpChatDetail',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Follow-up chat ID'\n              },\n              change_status: {\n                type: 'boolean',\n                description: 'Triggered after order status change to this status'\n              },\n              hours_after: {\n                type: 'integer',\n                description: 'Hours after which the follow-up chat is sent'\n              },\n              image: {\n                type: 'string',\n                description: 'Image URL for the follow-up chat'\n              },\n              is_default: {\n                type: 'boolean',\n                description: 'Is this a default follow-up chat'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the follow-up chat'\n              },\n              provider: {\n                type: 'string',\n                description: 'Provider of the follow-up chat'\n              },\n              text: {\n                type: 'string',\n                description: 'Text of the follow-up chat'\n              },\n              text_url: {\n                type: 'string',\n                description: 'URL encoded text of the follow-up chat'\n              },\n              trigger: {\n                type: 'string',\n                description: 'Trigger for the follow-up chat'\n              },\n              wa_integration_id: {\n                type: 'integer',\n                description: 'WhatsApp integration ID for the follow-up chat'\n              }\n            }\n          }\n        },\n        is_probably_spam: {\n          type: 'boolean',\n          description: 'Is probably spam'\n        },\n        mark_as_spam_by: {\n          type: 'string',\n          description: 'Who marked as spam'\n        },\n        order_id: {\n          type: 'string',\n          description: 'Order ID in string format'\n        },\n        payment_status: {\n          type: 'string',\n          description: 'Order payment status',\n          enum: [            'unpaid',\n            'paid',\n            'conflict',\n            'settled'\n          ]\n        },\n        secret_slug: {\n          type: 'string',\n          description: 'Secret slug of the order'\n        },\n        status: {\n          type: 'string',\n          description: 'Order status',\n          enum: [            'draft',\n            'pending',\n            'confirmed',\n            'in_process',\n            'ready',\n            'shipped',\n            'completed',\n            'canceled',\n            'rts',\n            'closed'\n          ]\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.getChats(id)));
};

export default { metadata, tool, handler };
