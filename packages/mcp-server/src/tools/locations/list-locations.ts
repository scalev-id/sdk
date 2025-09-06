// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'locations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/locations',
  operationId: 'ScalevApiWeb.LocationController.index_locations',
};

export const tool: Tool = {
  name: 'list_locations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of locations with search and pagination.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'object',\n      properties: {\n        has_next: {\n          type: 'boolean'\n        },\n        last_id: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        results: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Location',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Location ID'\n              },\n              city_name: {\n                type: 'string',\n                description: 'City Name'\n              },\n              display: {\n                type: 'string',\n                description: 'Display Name'\n              },\n              jne_destination_id: {\n                type: 'integer',\n                description: 'JNE Destination ID'\n              },\n              jne_origin_id: {\n                type: 'integer',\n                description: 'JNE Origin ID'\n              },\n              ka_district_id: {\n                type: 'integer',\n                description: 'Kargo Aman District ID'\n              },\n              lincah_code: {\n                type: 'string',\n                description: 'Lincah Code'\n              },\n              lion_code: {\n                type: 'string',\n                description: 'Lion Code'\n              },\n              mengantar_code: {\n                type: 'string',\n                description: 'Mengantar Code'\n              },\n              ninja_l1: {\n                type: 'string',\n                description: 'Ninja L1 Code'\n              },\n              ninja_l2: {\n                type: 'string',\n                description: 'Ninja L2 Code'\n              },\n              province_name: {\n                type: 'string',\n                description: 'Province Name'\n              },\n              ro_city_id: {\n                type: 'integer',\n                description: 'RajaOngkir City ID'\n              },\n              ro_province_id: {\n                type: 'integer',\n                description: 'RajaOngkir Province ID'\n              },\n              ro_subdistrict_id: {\n                type: 'integer',\n                description: 'RajaOngkir Subdistrict ID'\n              },\n              subdistrict_name: {\n                type: 'string',\n                description: 'Subdistrict Name'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'Page number for pagination',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page',
      },
      search: {
        type: 'string',
        description: 'Search term for location names',
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
  const response = await client.locations.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
