// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'variants.digital_product_files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/variants/{variant_id}/digital-product-files',
  operationId: 'ScalevApiWeb.ProductController.index_digital_product_files',
};

export const tool: Tool = {
  name: 'list_variants_digital_product_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of digital product files for a variant.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'DigitalProductFile',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Digital product file primary key'\n              },\n              content_type: {\n                type: 'string',\n                description: 'MIME type of the digital product file'\n              },\n              name: {\n                type: 'string',\n                description: 'File name of the digital product file'\n              },\n              size_in_bytes: {\n                type: 'integer',\n                description: 'Size of the digital product file in bytes'\n              },\n              url: {\n                type: 'string',\n                description: 'URL to access the digital product file'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      variant_id: {
        type: 'integer',
      },
      last_id: {
        type: 'integer',
        description: 'Last ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['variant_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { variant_id, jq_filter, ...body } = args as any;
  const response = await client.variants.digitalProductFiles.list(variant_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
