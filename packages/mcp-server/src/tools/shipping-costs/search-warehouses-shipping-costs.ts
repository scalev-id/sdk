// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'shipping_costs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/shipping-costs/search-warehouse',
  operationId: 'ScalevApiWeb.ShippingCostController.search_warehouses',
};

export const tool: Tool = {
  name: 'search_warehouses_shipping_costs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for warehouses based on order details, store, destination, and product variants.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'SearchWarehouseResult',\n        properties: {\n          destination: {\n            type: 'object',\n            title: 'Location',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Location ID'\n              },\n              city_name: {\n                type: 'string',\n                description: 'City Name'\n              },\n              display: {\n                type: 'string',\n                description: 'Display Name'\n              },\n              jne_destination_id: {\n                type: 'integer',\n                description: 'JNE Destination ID'\n              },\n              jne_origin_id: {\n                type: 'integer',\n                description: 'JNE Origin ID'\n              },\n              ka_district_id: {\n                type: 'integer',\n                description: 'Kargo Aman District ID'\n              },\n              lincah_code: {\n                type: 'string',\n                description: 'Lincah Code'\n              },\n              lion_code: {\n                type: 'string',\n                description: 'Lion Code'\n              },\n              mengantar_code: {\n                type: 'string',\n                description: 'Mengantar Code'\n              },\n              ninja_l1: {\n                type: 'string',\n                description: 'Ninja L1 Code'\n              },\n              ninja_l2: {\n                type: 'string',\n                description: 'Ninja L2 Code'\n              },\n              province_name: {\n                type: 'string',\n                description: 'Province Name'\n              },\n              ro_city_id: {\n                type: 'integer',\n                description: 'RajaOngkir City ID'\n              },\n              ro_province_id: {\n                type: 'integer',\n                description: 'RajaOngkir Province ID'\n              },\n              ro_subdistrict_id: {\n                type: 'integer',\n                description: 'RajaOngkir Subdistrict ID'\n              },\n              subdistrict_name: {\n                type: 'string',\n                description: 'Subdistrict Name'\n              }\n            }\n          },\n          distance_km: {\n            type: 'number',\n            description: 'Distance in kilometers'\n          },\n          warehouse: {\n            type: 'object',\n            title: 'ForLocationSearchWarehouse',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Warehouse ID'\n              },\n              business: {\n                type: 'object',\n                title: 'BusinessUsernameOnly',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Business ID'\n                  },\n                  username: {\n                    type: 'string',\n                    description: 'Username of the business'\n                  }\n                }\n              },\n              lincah_origin_id: {\n                type: 'string',\n                description: 'Lincah origin ID for the warehouse'\n              },\n              mengantar_origin_id: {\n                type: 'string',\n                description: 'Mengantar origin ID for the warehouse'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the warehouse'\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Unique identifier of the warehouse'\n              },\n              warehouse_address: {\n                type: 'object',\n                title: 'WarehouseAddressLocationData',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Warehouse Address ID'\n                  },\n                  address: {\n                    type: 'string',\n                    description: 'Full address of the warehouse'\n                  },\n                  city: {\n                    type: 'string',\n                    description: 'City of the warehouse address'\n                  },\n                  location: {\n                    type: 'integer',\n                    description: 'Location ID for the address'\n                  },\n                  postal_code: {\n                    type: 'string',\n                    description: 'Postal code of the warehouse address'\n                  },\n                  province: {\n                    type: 'string',\n                    description: 'Province of the warehouse address'\n                  },\n                  subdistrict: {\n                    type: 'string',\n                    description: 'Subdistrict of the warehouse address'\n                  }\n                }\n              }\n            }\n          },\n          warehouse_partner: {\n            type: 'object',\n            title: 'WarehousePartnerSearchData',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Warehouse Partner ID'\n              },\n              ka_origin_id: {\n                type: 'string',\n                description: 'KA Origin ID'\n              },\n              lincah_origin_id: {\n                type: 'string',\n                description: 'Lincah Origin ID'\n              },\n              mengantar_origin_id: {\n                type: 'string',\n                description: 'Mengantar Origin ID'\n              },\n              partner_id: {\n                type: 'integer',\n                description: 'Partner Business ID'\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.shippingCosts.searchWarehouses()));
};

export default { metadata, tool, handler };
