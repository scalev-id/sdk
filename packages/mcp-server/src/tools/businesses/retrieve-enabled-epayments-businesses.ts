// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'businesses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/businesses/enabled-epayments',
  operationId: 'ScalevApiWeb.BusinessGlobalController.get_enabled_epayments',
};

export const tool: Tool = {
  name: 'retrieve_enabled_epayments_businesses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the list of enabled e-payment methods for a specified business.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      title: 'EnabledEpayments',\n      properties: {\n        payment_methods: {\n          type: 'array',\n          description: 'List of enabled payment methods',\n          items: {\n            type: 'string',\n            description: 'Order e-payment method',\n            enum: [              'va',\n              'qris',\n              'card',\n              'invoice',\n              'alfamart',\n              'ovo',\n              'dana',\n              'shopeepay',\n              'linkaja',\n              'gopay'\n            ]\n          }\n        },\n        vas: {\n          type: 'array',\n          description: 'List of enabled bank virtual accounts',\n          items: {\n            type: 'string',\n            description: 'Xendit VA bank code',\n            enum: [              'BCA',\n              'BNI',\n              'BRI',\n              'MANDIRI',\n              'PERMATA',\n              'BSI',\n              'BJB',\n              'CIMB',\n              'SAHABAT_SAMPOERNA',\n              'ARTAJASA'\n            ]\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.businesses.retrieveEnabledEpayments()),
  );
};

export default { metadata, tool, handler };
