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
  httpPath: '/v2/order/{id}/trigger-purchase',
  operationId: 'ScalevApiWeb.OrderController.trigger_purchase_event',
};

export const tool: Tool = {
  name: 'trigger_purchase_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTrigger purchase event for analytics and tracking.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_trigger_purchase_response',\n  $defs: {\n    order_trigger_purchase_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        data: {\n          type: 'object',\n          title: 'TriggerPurchase',\n          properties: {\n            kwai: {\n              type: 'object',\n              description: 'Kwai purchase trigger response',\n              additionalProperties: true\n            },\n            meta: {\n              type: 'object',\n              description: 'Meta purchase trigger response',\n              additionalProperties: true\n            },\n            tiktok: {\n              type: 'object',\n              description: 'TikTok purchase trigger response',\n              additionalProperties: true\n            }\n          }\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.triggerPurchase(id)));
};

export default { metadata, tool, handler };
