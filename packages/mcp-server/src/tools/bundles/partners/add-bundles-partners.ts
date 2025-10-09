// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles.partners',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/bundles/{bundle_id}/partners',
  operationId: 'ScalevApiWeb.BundleController.create_partner',
};

export const tool: Tool = {
  name: 'add_bundles_partners',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAssociates a partner with a specific bundle using the provided unique identifier.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/partner_add_response',\n  $defs: {\n    partner_add_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        data: {\n          type: 'object',\n          title: 'BundlePartner',\n          properties: {\n            id: {\n              type: 'integer',\n              description: 'Bundle Partner ID'\n            },\n            created_at: {\n              type: 'string',\n              description: 'Creation timestamp',\n              format: 'date-time'\n            },\n            partner: {\n              type: 'object',\n              title: 'BusinessSimple',\n              properties: {\n                id: {\n                  type: 'integer',\n                  description: 'Business ID'\n                },\n                account_holder: {\n                  type: 'string',\n                  description: 'Name of the account holder'\n                },\n                email: {\n                  type: 'string',\n                  description: 'Email address of the business'\n                },\n                is_banned: {\n                  type: 'boolean',\n                  description: 'Is the business banned?'\n                },\n                logo: {\n                  type: 'string',\n                  description: 'URL to the business logo'\n                },\n                unique_id: {\n                  type: 'string',\n                  description: 'Unique identifier for the business'\n                },\n                username: {\n                  type: 'string',\n                  description: 'Username of the business'\n                }\n              }\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'partner'\n          ]\n        },\n        status: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bundle_id: {
        type: 'integer',
      },
      partner_unique_id: {
        type: 'string',
        description: 'Unique identifier of the partner to associate',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bundle_id', 'partner_unique_id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { bundle_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.bundles.partners.add(bundle_id, body)),
  );
};

export default { metadata, tool, handler };
