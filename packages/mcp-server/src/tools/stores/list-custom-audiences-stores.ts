// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/custom-audiences',
  operationId: 'ScalevApiWeb.StoreController.index_custom_audiences',
};

export const tool: Tool = {
  name: 'list_custom_audiences_stores',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of custom audiences associated with a specific store.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          custom_audience: {\n            type: 'object',\n            title: 'CustomAudience',\n            properties: {\n              custom_audience_id: {\n                type: 'string',\n                description: 'The ID of the custom audience'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the custom audience'\n              },\n              errors: {\n                type: 'array',\n                description: 'List of errors associated with the custom audience',\n                items: {\n                  type: 'object',\n                  additionalProperties: true\n                }\n              }\n            },\n            required: [              'custom_audience_id',\n              'name'\n            ]\n          },\n          order_status: {\n            type: 'string',\n            description: 'Order status',\n            enum: [              'draft',\n              'pending',\n              'confirmed',\n              'in_process',\n              'ready',\n              'shipped',\n              'completed',\n              'canceled',\n              'rts',\n              'closed'\n            ]\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['store_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { store_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.stores.listCustomAudiences(store_id)));
};

export default { metadata, tool, handler };
