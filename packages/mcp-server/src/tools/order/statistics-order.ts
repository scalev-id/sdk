// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/order/statistics',
  operationId: 'ScalevApiWeb.OrderViewController.index_statistics',
};

export const tool: Tool = {
  name: 'statistics_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves descriptive statistics about orders, such as total orders, total revenue, and other aggregated data. Can be filtered using the same parameters as the orders list endpoint.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      title: 'OrderStatistics',\n      properties: {\n        breakdown_date: {\n          type: 'string'\n        },\n        custom_breakdown_key: {\n          type: 'string'\n        },\n        datetime_type: {\n          type: 'string'\n        },\n        is_breakdown_status: {\n          type: 'boolean'\n        },\n        params: {\n          type: 'object',\n          additionalProperties: true\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              count: {\n                type: 'integer'\n              },\n              custom_breakdown_id: {\n                type: 'integer'\n              },\n              custom_breakdown_name: {\n                type: 'string'\n              },\n              day: {\n                type: 'string'\n              },\n              gross_revenue: {\n                type: 'number'\n              },\n              month: {\n                type: 'string'\n              },\n              status: {\n                type: 'string',\n                description: 'Order status',\n                enum: [                  'draft',\n                  'pending',\n                  'confirmed',\n                  'in_process',\n                  'ready',\n                  'shipped',\n                  'completed',\n                  'canceled',\n                  'rts',\n                  'closed'\n                ]\n              },\n              week: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        tz: {\n          type: 'string'\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      breakdown_date: {
        type: 'string',
        description: "Date breakdown for statistics (defaults to 'off')",
        enum: ['off', 'day', 'week', 'month'],
      },
      business_id: {
        type: 'string',
        description: 'Filter by business ID',
      },
      custom_breakdown_key: {
        type: 'string',
        description: "Custom breakdown key for statistics (defaults to 'off')",
        enum: ['off', 'handler_id', 'advertiser_id', 'page_id', 'city', 'province'],
      },
      datetime_type: {
        type: 'string',
        description: "Type of datetime for statistics (defaults to 'created_at')",
        enum: [
          'draft_time',
          'pending_time',
          'confirmed_time',
          'in_process_time',
          'ready_time',
          'canceled_time',
          'shipped_time',
          'shipped_rts_time',
          'completed_time',
          'rts_time',
          'closed_time',
        ],
      },
      is_breakdown_status: {
        type: 'string',
        description: "Include breakdown by order status (defaults to 'false')",
        enum: ['true', 'false'],
      },
      minimum_days: {
        type: 'integer',
        description: 'Minimum number of days for statistics (defaults to 0)',
      },
      payment_status: {
        type: 'string',
        description: 'Filter by payment status',
      },
      shipped_time_since: {
        type: 'string',
        description: 'Filter by shipped time since (ISO 8601 format)',
      },
      shipped_time_until: {
        type: 'string',
        description: 'Filter by shipped time until (ISO 8601 format)',
      },
      status: {
        type: 'string',
        description: 'Filter by order status',
      },
      store_id: {
        type: 'string',
        description: 'Filter by store ID',
      },
      tz: {
        type: 'string',
        description: "Timezone for datetime adjustment (defaults to 'Asia/Jakarta')",
      },
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.statistics(body)));
};

export default { metadata, tool, handler };
