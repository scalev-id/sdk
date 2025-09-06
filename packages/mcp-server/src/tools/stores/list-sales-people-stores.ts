// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/sales-people',
  operationId: 'ScalevApiWeb.StoreController.index_sales_person',
};

export const tool: Tool = {
  name: 'list_sales_people_stores',
  description:
    'Retrieves a paginated list of sales persons associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.',
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      last_id: {
        type: 'integer',
        description: 'Last sales person ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
    },
    required: ['store_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { store_id, ...body } = args as any;
  const response = await client.stores.listSalesPeople(store_id, body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
