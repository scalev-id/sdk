// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores.payment_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/payment-methods',
  operationId: 'ScalevApiWeb.StoreController.index_payment_method',
};

export const tool: Tool = {
  name: 'list_stores_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of payment methods associated with a specific store.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'array',\n      items: {\n        type: 'string',\n        description: 'Order payment method',\n        enum: [          'gopay',\n          'va',\n          'qris',\n          'card',\n          'invoice',\n          'alfamart',\n          'ovo',\n          'dana',\n          'shopeepay',\n          'linkaja',\n          'no_payment',\n          'bank_transfer',\n          'marketplace',\n          'cod'\n        ]\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      order_id: {
        type: 'integer',
        description:
          'Primary key of the order to validate if the payment methods are applicable for that order',
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.stores.paymentMethods.list(store_id, body)),
  );
};

export default { metadata, tool, handler };
