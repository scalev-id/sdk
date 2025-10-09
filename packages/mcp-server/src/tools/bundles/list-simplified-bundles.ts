// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/bundles/simplified',
  operationId: 'ScalevApiWeb.BundleController.index_simplified',
};

export const tool: Tool = {
  name: 'list_simplified_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of bundles with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25. This endpoint returns a simplified version of the bundle data, including only essential fields and active bundle price options.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/bundle_list_simplified_response'\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    bundle_list_simplified_response: {\n      type: 'object',\n      title: 'BundleListSimplified',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Bundle ID'\n        },\n        bundle_price_options: {\n          type: 'array',\n          description: 'List of Bundle Price Options',\n          items: {\n            type: 'object',\n            title: 'BundlePriceOptionSimple',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Bundle Price Option ID'\n              },\n              is_owned_by_store: {\n                type: 'boolean',\n                description: 'Is owned by store'\n              },\n              name: {\n                type: 'string',\n                description: 'Name'\n              },\n              price: {\n                type: 'number',\n                description: 'Price (including tax)'\n              },\n              price_bt: {\n                type: 'number',\n                description: 'Price before tax'\n              },\n              slug: {\n                type: 'string',\n                description: 'Slug'\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Bundle Price Option Unique ID'\n              }\n            }\n          }\n        },\n        custom_id: {\n          type: 'string',\n          description: 'Custom Identifier'\n        },\n        display: {\n          type: 'string',\n          description: 'Display Name'\n        },\n        images: {\n          type: 'array',\n          description: 'List of Image URLs',\n          items: {\n            type: 'string'\n          }\n        },\n        is_bundle_sharing: {\n          type: 'boolean',\n          description: 'Is Bundle Sharing Enabled'\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        public_name: {\n          type: 'string',\n          description: 'Public Name'\n        },\n        weight_bump: {\n          type: 'integer',\n          description: 'Weight Bump'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      for_store_id: {
        type: 'integer',
        description:
          'If provided, includes `is_owned_by_store` field in the bundle price options to indicate if the option is already included in the specified store.',
      },
      is_bundle_sharing: {
        type: 'boolean',
        description: 'Filter bundles by their sharing status',
      },
      label: {
        type: 'string',
        description: 'Filter bundles that are associated with the specified label',
      },
      last_id: {
        type: 'integer',
        description: 'Last order ID for cursor-based pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      search: {
        type: 'string',
        description: 'Search term to filter bundles by name (case-insensitive, partial match)',
      },
      store_id: {
        type: 'integer',
        description: 'Filter bundles that have price options available in the specified store ID',
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
  const response = await client.bundles.listSimplified(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
