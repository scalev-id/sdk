// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/products/count',
  operationId: 'ScalevApiWeb.ProductController.index_count',
};

export const tool: Tool = {
  name: 'count_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the total count of products.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Total number of products'\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      is_checked: {
        type: 'boolean',
        description: 'Show variants in products where is_checked is true or false',
      },
      is_inventory: {
        type: 'boolean',
        description: 'Filter products by inventory tracking status (true or false)',
      },
      is_owned: {
        type: 'boolean',
        description:
          "Filter products by ownership. 'true' returns products owned by the business, 'false' returns shared products",
      },
      is_product_sharing: {
        type: 'boolean',
        description: 'Filter products by product sharing status (true or false)',
      },
      item_type: {
        type: 'string',
        description: 'Filter products by item type (physical, digital, course)',
        enum: ['physical', 'digital', 'course'],
      },
      label: {
        type: 'string',
        description: 'Filter products associated with a specific label name',
      },
      last_id: {
        type: 'integer',
        description: 'Last order ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      qty_type: {
        type: 'string',
        description:
          "Type of quantity to filter by. Options are 'available_qty' (only products with variants that have available quantity > 0)",
        enum: ['available_qty'],
      },
      search: {
        type: 'string',
        description: 'Search term to filter products by name (case-insensitive, partial match)',
      },
      store_id: {
        type: 'integer',
        description: 'Filter products associated with a specific store ID',
      },
      warehouse_id: {
        type: 'integer',
        description: 'Filter products associated with a specific warehouse ID',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.products.count(body)));
};

export default { metadata, tool, handler };
