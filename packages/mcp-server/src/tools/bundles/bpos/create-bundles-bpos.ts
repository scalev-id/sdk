// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles.bpos',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/bundles/{bundle_id}/bpos',
  operationId: 'ScalevApiWeb.BundleController.create_bpo',
};

export const tool: Tool = {
  name: 'create_bundles_bpos',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new bundle price option associated with a specific bundle using the provided data.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      title: 'BundlePriceOption',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Bundle Price Option ID'\n        },\n        bundle_id: {\n          type: 'integer',\n          description: 'Bundle ID'\n        },\n        name: {\n          type: 'string',\n          description: 'Name'\n        },\n        price: {\n          type: 'number',\n          description: 'Price (including tax)'\n        },\n        price_bt: {\n          type: 'number',\n          description: 'Price before tax'\n        },\n        slug: {\n          type: 'string',\n          description: 'Slug'\n        },\n        stores: {\n          type: 'array',\n          description: 'List of stores where the bundle price option is available',\n          items: {\n            type: 'object',\n            title: 'DomainStore',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Store ID'\n              },\n              custom_domain: {\n                type: 'object',\n                title: 'SimpleCustomDomain',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Custom Domain ID'\n                  },\n                  full_url: {\n                    type: 'string',\n                    description: 'Full URL'\n                  },\n                  is_verified: {\n                    type: 'boolean',\n                    description: 'Is Verified'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Store name'\n              }\n            }\n          }\n        },\n        unique_id: {\n          type: 'string',\n          description: 'Bundle Price Option Unique ID'\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bundle_id: {
        type: 'integer',
      },
      name: {
        type: 'string',
        description: 'Name',
      },
      price: {
        type: 'number',
        description: 'Price (including tax)',
      },
      slug: {
        type: 'string',
        description: 'Slug',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bundle_id', 'name', 'price'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { bundle_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.bundles.bpos.create(bundle_id, body)));
};

export default { metadata, tool, handler };
