// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles.partners',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/bundles/{bundle_id}/partners',
  operationId: 'ScalevApiWeb.BundleController.index_partners',
};

export const tool: Tool = {
  name: 'list_bundles_partners',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of partners associated with a specific bundle. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/partner_list_response'\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    partner_list_response: {\n      type: 'object',\n      title: 'BundlePartner',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Bundle Partner ID'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Creation timestamp',\n          format: 'date-time'\n        },\n        partner: {\n          type: 'object',\n          title: 'BusinessSimple',\n          properties: {\n            id: {\n              type: 'integer',\n              description: 'Business ID'\n            },\n            account_holder: {\n              type: 'string',\n              description: 'Name of the account holder'\n            },\n            email: {\n              type: 'string',\n              description: 'Email address of the business'\n            },\n            is_banned: {\n              type: 'boolean',\n              description: 'Is the business banned?'\n            },\n            logo: {\n              type: 'string',\n              description: 'URL to the business logo'\n            },\n            unique_id: {\n              type: 'string',\n              description: 'Unique identifier for the business'\n            },\n            username: {\n              type: 'string',\n              description: 'Username of the business'\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'partner'\n      ]\n    }\n  }\n}\n```",
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
  const response = await client.bundles.partners.list(bundle_id, body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
