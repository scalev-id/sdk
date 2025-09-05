// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/order/{id}/chat/{chat_id}',
  operationId: 'ScalevApiWeb.OrderViewController.get_one_chat_text',
};

export const tool: Tool = {
  name: 'get_chat_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a specific chat text message.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      title: 'FollowUpChatDetail',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Follow-up chat ID'\n        },\n        change_status: {\n          type: 'boolean',\n          description: 'Triggered after order status change to this status'\n        },\n        hours_after: {\n          type: 'integer',\n          description: 'Hours after which the follow-up chat is sent'\n        },\n        image: {\n          type: 'string',\n          description: 'Image URL for the follow-up chat'\n        },\n        is_default: {\n          type: 'boolean',\n          description: 'Is this a default follow-up chat'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the follow-up chat'\n        },\n        provider: {\n          type: 'string',\n          description: 'Provider of the follow-up chat'\n        },\n        text: {\n          type: 'string',\n          description: 'Text of the follow-up chat'\n        },\n        text_url: {\n          type: 'string',\n          description: 'URL encoded text of the follow-up chat'\n        },\n        trigger: {\n          type: 'string',\n          description: 'Trigger for the follow-up chat'\n        },\n        wa_integration_id: {\n          type: 'integer',\n          description: 'WhatsApp integration ID for the follow-up chat'\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      chat_id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'chat_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { chat_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.getChat(chat_id, body)));
};

export default { metadata, tool, handler };
