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
  httpPath: '/v2/order/{id}/emails',
  operationId: 'ScalevApiWeb.OrderViewController.index_order_emails',
};

export const tool: Tool = {
  name: 'list_emails_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet list of emails sent for an order.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_list_emails_response',\n  $defs: {\n    order_list_emails_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'OrderEmail',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Order email ID'\n              },\n              from: {\n                type: 'string',\n                description: 'Sender email address'\n              },\n              inserted_at: {\n                type: 'string',\n                description: 'Email creation timestamp',\n                format: 'date-time'\n              },\n              message_id: {\n                type: 'string',\n                description: 'Message ID of the email'\n              },\n              order_id: {\n                type: 'integer',\n                description: 'Associated order primary key'\n              },\n              status: {\n                type: 'string',\n                description: 'Email status'\n              },\n              status_history: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    status: {\n                      type: 'string',\n                      description: 'Email status'\n                    },\n                    timestamp: {\n                      type: 'string',\n                      description: 'Timestamp of the status change',\n                      format: 'date-time'\n                    }\n                  }\n                }\n              },\n              subject: {\n                type: 'string',\n                description: 'Email subject'\n              },\n              to: {\n                type: 'string',\n                description: 'Recipient email address'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the email'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Last update timestamp of the email',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.listEmails(id)));
};

export default { metadata, tool, handler };
