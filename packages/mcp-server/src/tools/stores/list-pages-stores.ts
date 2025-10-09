// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/stores/{store_id}/pages',
  operationId: 'ScalevApiWeb.StoreController.index_page',
};

export const tool: Tool = {
  name: 'list_pages_stores',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of pages associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/store_list_pages_response'\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    store_list_pages_response: {\n      type: 'object',\n      title: 'PageSimple',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Page ID'\n        },\n        is_published: {\n          type: 'boolean',\n          description: 'Is the page published?'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the page'\n        },\n        published_at: {\n          type: 'string',\n          description: 'Publication date of the page',\n          format: 'date-time'\n        },\n        slug: {\n          type: 'string',\n          description: 'Slug for the page URL'\n        },\n        store_id: {\n          type: 'integer',\n          description: 'ID of the store the page belongs to'\n        },\n        unique_id: {\n          type: 'string',\n          description: 'Unique identifier for the page'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      store_id: {
        type: 'integer',
      },
      is_pinned: {
        type: 'boolean',
        description: 'Filter pages that are pinned (true/false)',
      },
      last_id: {
        type: 'integer',
        description: 'Last page ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search term to filter pages by title or content (case-insensitive, partial match)',
      },
      tags: {
        type: 'string',
        description: 'Filter pages by specific tags',
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
  const response = await client.stores.listPages(store_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
