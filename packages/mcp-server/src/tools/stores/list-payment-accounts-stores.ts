// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/payment-accounts',
  operationId: 'ScalevApiWeb.StoreController.index_payment_account',
};

export const tool: Tool = {
  name: 'list_payment_accounts_stores',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of payment accounts associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'PaymentAccountList',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Payment Account ID'\n              },\n              account_holder: {\n                type: 'string',\n                description: 'Account Holder Name'\n              },\n              account_number: {\n                type: 'string',\n                description: 'Account Number'\n              },\n              financial_entity: {\n                type: 'object',\n                title: 'FinancialEntity',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Financial Entity ID'\n                  },\n                  code: {\n                    type: 'string',\n                    description: 'Code of the financial entity'\n                  },\n                  duitku_code: {\n                    type: 'string',\n                    description: 'Duitku code for the financial entity'\n                  },\n                  entity_type: {\n                    type: 'string',\n                    description: 'Type of the financial entity'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Name of the financial entity'\n                  },\n                  platform: {\n                    type: 'string',\n                    description: 'Platform associated with the financial entity'\n                  },\n                  xendit_code: {\n                    type: 'string',\n                    description: 'Xendit code for the financial entity'\n                  }\n                }\n              },\n              is_owned_by_store: {\n                type: 'boolean',\n                description: 'Is Owned By Store'\n              },\n              method: {\n                type: 'string',\n                description: 'Payment Method'\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Unique Identifier'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      last_id: {
        type: 'integer',
        description: 'Last payment account ID for cursor-based pagination',
      },
      method: {
        type: 'string',
        description: 'Filter by payment method',
      },
      order_id: {
        type: 'integer',
        description:
          'Primary key of the order to validate if the payment accounts are applicable for that order',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search by payment account name or number',
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
    await maybeFilter(jq_filter, await client.stores.listPaymentAccounts(store_id, body)),
  );
};

export default { metadata, tool, handler };
