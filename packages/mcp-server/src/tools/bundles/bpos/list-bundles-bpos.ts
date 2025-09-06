// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles.bpos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/bundles/{bundle_id}/bpos',
  operationId: 'ScalevApiWeb.BundleController.index_bpo',
};

export const tool: Tool = {
  name: 'list_bundles_bpos',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of bundle price options associated with a specific bundle. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'BundlePriceOption',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Bundle Price Option ID'\n              },\n              bundle_id: {\n                type: 'integer',\n                description: 'Bundle ID'\n              },\n              name: {\n                type: 'string',\n                description: 'Name'\n              },\n              price: {\n                type: 'number',\n                description: 'Price (including tax)'\n              },\n              price_bt: {\n                type: 'number',\n                description: 'Price before tax'\n              },\n              slug: {\n                type: 'string',\n                description: 'Slug'\n              },\n              stores: {\n                type: 'array',\n                description: 'List of stores where the bundle price option is available',\n                items: {\n                  type: 'object',\n                  title: 'DomainStore',\n                  properties: {\n                    id: {\n                      type: 'integer',\n                      description: 'Store ID'\n                    },\n                    custom_domain: {\n                      type: 'object',\n                      title: 'SimpleCustomDomain',\n                      properties: {\n                        id: {\n                          type: 'integer',\n                          description: 'Custom Domain ID'\n                        },\n                        full_url: {\n                          type: 'string',\n                          description: 'Full URL'\n                        },\n                        is_verified: {\n                          type: 'boolean',\n                          description: 'Is Verified'\n                        }\n                      }\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'Store name'\n                    }\n                  }\n                }\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Bundle Price Option Unique ID'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bundle_id: {
        type: 'integer',
      },
      last_id: {
        type: 'integer',
        description: 'The ID of the last item from the previous page. Used for cursor-based pagination.',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items to return per page. Default is 25, maximum is 25.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bundle_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { bundle_id, jq_filter, ...body } = args as any;
  const response = await client.bundles.bpos.list(bundle_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
