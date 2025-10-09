// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products.follow_up_chats',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/products/{product_id}/follow-up-chats/generate',
  operationId: 'ScalevApiWeb.ProductController.generate_fuc',
};

export const tool: Tool = {
  name: 'generate_products_follow_up_chats',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a new follow up chat for a product.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/follow_up_chat_generate_response',\n  $defs: {\n    follow_up_chat_generate_response: {\n      type: 'object',\n      title: 'BlankSuccessResponse',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      product_id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['product_id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { product_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.products.followUpChats.generate(product_id)),
  );
};

export default { metadata, tool, handler };
