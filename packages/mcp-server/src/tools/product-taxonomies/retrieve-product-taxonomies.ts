// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'product_taxonomies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/product-taxonomies/{id}',
  operationId: 'ScalevApiWeb.ProductController.show_taxonomy',
};

export const tool: Tool = {
  name: 'retrieve_product_taxonomies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nShows a single product taxonomy by ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_taxonomy_retrieve_response',\n  $defs: {\n    product_taxonomy_retrieve_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        data: {\n          type: 'object',\n          title: 'ProductTaxonomy',\n          properties: {\n            id: {\n              type: 'integer',\n              description: 'Taxonomy ID'\n            },\n            full_path: {\n              type: 'string',\n              description: 'Full Path'\n            },\n            level_1: {\n              type: 'string',\n              description: 'Level 1'\n            },\n            level_2: {\n              type: 'string',\n              description: 'Level 2'\n            },\n            level_3: {\n              type: 'string',\n              description: 'Level 3'\n            },\n            level_4: {\n              type: 'string',\n              description: 'Level 4'\n            },\n            level_5: {\n              type: 'string',\n              description: 'Level 5'\n            },\n            level_6: {\n              type: 'string',\n              description: 'Level 6'\n            },\n            level_7: {\n              type: 'string',\n              description: 'Level 7'\n            }\n          }\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.productTaxonomies.retrieve(id)));
};

export default { metadata, tool, handler };
