// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores.payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v2/stores/{store_id}/payment-methods',
  operationId: 'ScalevApiWeb.StoreController.remove_payment_method',
};

export const tool: Tool = {
  name: 'remove_stores_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDissociates a specific payment method from a store.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BlankSuccessResponse',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          store_id: {
            type: 'integer',
          },
          body: {
            type: 'string',
            enum: [
              'BCA',
              'BNI',
              'BRI',
              'MANDIRI',
              'PERMATA',
              'BSI',
              'BJB',
              'CIMB',
              'SAHABAT_SAMPOERNA',
              'ARTAJASA',
              'gopay',
              'va',
              'qris',
              'card',
              'invoice',
              'alfamart',
              'ovo',
              'dana',
              'shopeepay',
              'linkaja',
              'no_payment',
              'bank_transfer',
              'marketplace',
              'cod',
            ],
          },
        },
        required: ['store_id'],
      },
      {
        type: 'object',
        properties: {
          store_id: {
            type: 'integer',
          },
          payment_account_id: {
            type: 'integer',
            description: 'Payment account ID to remove from the store',
          },
        },
        required: ['store_id', 'payment_account_id'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { store_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.stores.paymentMethods.remove(store_id, body)),
  );
};

export default { metadata, tool, handler };
