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
  httpPath: '/v2/order/generate-awb',
  operationId: 'ScalevApiWeb.OrderController.generate_awb',
};

export const tool: Tool = {
  name: 'generate_awb_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate Air Waybill for multiple orders.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_generate_awb_response',\n  $defs: {\n    order_generate_awb_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        data: {\n          type: 'object',\n          title: 'GenerateOrCancelAWB',\n          properties: {\n            failures: {\n              type: 'object',\n              properties: {\n                ORDER_ID: {\n                  type: 'string',\n                  description: 'Error message for the order with this ID'\n                }\n              }\n            },\n            successes: {\n              type: 'object',\n              properties: {\n                ORDER_ID: {\n                  type: 'string',\n                  description: 'Message or shipment receipt or tracking ID for the order with this ID'\n                }\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ids: {
        type: 'array',
        description: 'Order primary keys to generate AWB',
        items: {
          type: 'integer',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ids'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.generateAwb(body)));
};

export default { metadata, tool, handler };
