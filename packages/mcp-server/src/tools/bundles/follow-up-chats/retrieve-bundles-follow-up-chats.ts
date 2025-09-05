// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles.follow_up_chats',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/bundles/{bundle_id}/follow-up-chats/{id}',
  operationId: 'ScalevApiWeb.BundleController.show_fuc',
};

export const tool: Tool = {
  name: 'retrieve_bundles_follow_up_chats',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a follow up chat template by its ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      title: 'ManagingFollowUpChat',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Follow-up chat ID'\n        },\n        bundle_id: {\n          type: 'integer',\n          description: 'Bundle ID associated with the follow-up chat'\n        },\n        change_status: {\n          type: 'boolean',\n          description: 'Triggered after order status change to this status'\n        },\n        hours_after: {\n          type: 'integer',\n          description: 'Hours after which the follow-up chat is sent'\n        },\n        image: {\n          type: 'string',\n          description: 'Image URL for the follow-up chat'\n        },\n        is_default: {\n          type: 'boolean',\n          description: 'Is this a default follow-up chat'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the follow-up chat'\n        },\n        product_id: {\n          type: 'integer',\n          description: 'Product ID associated with the follow-up chat'\n        },\n        provider: {\n          type: 'string',\n          description: 'Provider of the follow-up chat'\n        },\n        store_id: {\n          type: 'integer',\n          description: 'Store ID associated with the follow-up chat'\n        },\n        text_for_bank_transfer: {\n          type: 'string',\n          description: 'Text for bank transfer payments'\n        },\n        text_for_cod: {\n          type: 'string',\n          description: 'Text for cash on delivery payments'\n        },\n        text_for_epayment: {\n          type: 'string',\n          description: 'Text for electronic payments'\n        },\n        trigger: {\n          type: 'string',\n          description: 'Trigger for the follow-up chat'\n        },\n        wa_gateway_assignation_type: {\n          type: 'string',\n          description: 'WhatsApp gateway assignation type'\n        },\n        wa_integration: {\n          type: 'object',\n          title: 'WhatsappIntegration',\n          properties: {\n            id: {\n              type: 'integer',\n              description: 'Whatsapp Integration ID'\n            },\n            name: {\n              type: 'string',\n              description: 'Name'\n            },\n            phone_number: {\n              type: 'string',\n              description: 'Phone Number'\n            },\n            provider: {\n              type: 'string',\n              description: 'Provider'\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bundle_id: {
        type: 'integer',
      },
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
    required: ['bundle_id', 'id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.bundles.followUpChats.retrieve(id, body)),
  );
};

export default { metadata, tool, handler };
