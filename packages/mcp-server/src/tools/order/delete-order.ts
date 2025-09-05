// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/order/delete',
  operationId: 'ScalevApiWeb.OrderController.delete',
};

export const tool: Tool = {
  name: 'delete_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete multiple orders by IDs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'array',\n      items: {\n        type: 'integer',\n        description: 'Deleted order ID'\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ids: {
        type: 'array',
        items: {
          type: 'integer',
          description: 'Order primary keys to delete',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.delete(body)));
};

export default { metadata, tool, handler };
