// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores.store_advertisers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/stores/{store_id}/store-advertisers/{bu_id}',
  operationId: 'ScalevApiWeb.StoreController.remove_store_advertiser',
};

export const tool: Tool = {
  name: 'remove_stores_store_advertisers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDissociates a specific business user as a store advertiser from a store.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/store_advertiser_remove_response',\n  $defs: {\n    store_advertiser_remove_response: {\n      type: 'object',\n      title: 'BlankSuccessResponse',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      bu_id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['store_id', 'bu_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { bu_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.stores.storeAdvertisers.remove(bu_id, body)),
  );
};

export default { metadata, tool, handler };
