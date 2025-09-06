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
  httpPath: '/v2/order/upload',
  operationId: 'ScalevApiWeb.OrderController.upload_orders',
};

export const tool: Tool = {
  name: 'upload_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload orders from CSV file. (1) Archive mode. Choose this mode if you want to import old data from another platform you've been using. You can directly create products that you made on your previous platform. Orders that are created will immediately have 'Completed' status. Download template for Archive mode here: https://app.scalev.id/example/template_archive.csv. (2) Regular mode. Choose this mode if you want to enter current data that you wish to input in bulk, not one by one via order input. It will take inventory into account if your products have inventory enabled. Successfully created orders will have 'Created', 'Pending', or 'Confirmed' status, depending on the completeness of the data. Download template for Regular mode here: https://app.scalev.id/example/template_regular.csv.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      title: 'UploadOrders',\n      properties: {\n        failed: {\n          type: 'object',\n          properties: {\n            ID_OF_ORDER: {\n              type: 'string',\n              description: 'Error for the order with this ID'\n            }\n          }\n        },\n        success: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'SuccessUploadOrders',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Order primary key'\n              },\n              external_id: {\n                type: 'string',\n                description: 'External ID of the order'\n              },\n              order_id: {\n                type: 'string',\n                description: 'Order ID in string format'\n              },\n              payment_status: {\n                type: 'string',\n                description: 'Order payment status',\n                enum: [                  'unpaid',\n                  'paid',\n                  'conflict',\n                  'settled'\n                ]\n              },\n              status: {\n                type: 'string',\n                description: 'Order status',\n                enum: [                  'draft',\n                  'pending',\n                  'confirmed',\n                  'in_process',\n                  'ready',\n                  'shipped',\n                  'completed',\n                  'canceled',\n                  'rts',\n                  'closed'\n                ]\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      create_type: {
        type: 'string',
        description: "Choose 'archive' for Archive mode, 'regular' for Regular mode",
        enum: ['archive', 'regular'],
      },
      file: {
        type: 'string',
      },
      tz: {
        type: 'string',
        description: "Timezone in IANA format, e.g., 'Asia/Jakarta'",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['create_type', 'file', 'tz'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.upload(body)));
};

export default { metadata, tool, handler };
