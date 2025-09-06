// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores.bpos',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/stores/{store_id}/bpos',
  operationId: 'ScalevApiWeb.StoreController.add_bpos',
};

export const tool: Tool = {
  name: 'add_stores_bpos',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAssociates one or more bundle price options with a specific store.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BlankSuccessResponse',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      bpo_ids: {
        type: 'array',
        description: 'List of Bundle Price Option IDs to associate with the store',
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
    required: ['store_id', 'bpo_ids'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { store_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.stores.bpos.add(store_id, body)));
};

export default { metadata, tool, handler };
