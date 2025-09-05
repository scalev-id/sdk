// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/products',
  operationId: 'ScalevApiWeb.ProductController.index',
};

export const tool: Tool = {
  name: 'list_products',
  description:
    'Retrieves a paginated list of products with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.',
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
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.products.list(body));
};

export default { metadata, tool, handler };
