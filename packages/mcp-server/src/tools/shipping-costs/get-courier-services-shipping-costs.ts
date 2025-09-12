// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'scalev-mcp/filtering';
import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'shipping_costs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/shipping-costs/search-courier-service',
  operationId: 'ScalevApiWeb.ShippingCostController.search_courier_services',
};

export const tool: Tool = {
  name: 'get_courier_services_shipping_costs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve available courier services based on warehouse, destination, payment method, and package weight.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'array',\n      description: 'List of courier services',\n      items: {\n        type: 'object',\n        title: 'CourierServiceResult',\n        properties: {\n          cost: {\n            type: 'number',\n            description: 'Cost of the shipment'\n          },\n          cost_source: {\n            type: 'string',\n            description: 'Source of the cost'\n          },\n          courier_service: {\n            type: 'object',\n            title: 'CourierServiceLocationData',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Courier Service ID'\n              },\n              code: {\n                type: 'string',\n                description: 'Code for the courier service'\n              },\n              courier: {\n                type: 'object',\n                title: 'CourierLocationData',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Courier ID'\n                  },\n                  code: {\n                    type: 'string',\n                    description: 'Courier code'\n                  },\n                  courier_type: {\n                    type: 'string',\n                    title: 'CourierType',\n                    description: 'Type of the courier',\n                    enum: [                      'instant',\n                      'cashless',\n                      'standard'\n                    ]\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Courier name'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the courier service'\n              }\n            }\n          },\n          etd: {\n            type: 'string',\n            description: 'Estimated time of delivery'\n          },\n          is_cod: {\n            type: 'boolean',\n            description: 'Is Cash on Delivery available'\n          },\n          is_pickup: {\n            type: 'boolean',\n            description: 'Is Pickup available'\n          },\n          shipment_provider_code: {\n            type: 'string',\n            description: 'Code of the shipment provider'\n          },\n          warehouse: {\n            type: 'object',\n            title: 'ForLocationWarehouse',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Warehouse ID'\n              },\n              address: {\n                type: 'string',\n                description: 'Address of the warehouse'\n              },\n              city_name: {\n                type: 'string',\n                description: 'City name of the warehouse location'\n              },\n              lincah_origin_id: {\n                type: 'string',\n                description: 'Lincah origin ID for the warehouse'\n              },\n              mengantar_origin_id: {\n                type: 'string',\n                description: 'Mengantar origin ID for the warehouse'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the warehouse'\n              },\n              province_name: {\n                type: 'string',\n                description: 'Province name of the warehouse location'\n              },\n              subdistrict_name: {\n                type: 'string',\n                description: 'Subdistrict name of the warehouse location'\n              },\n              unique_id: {\n                type: 'string',\n                description: 'Unique identifier of the warehouse'\n              }\n            }\n          },\n          weight: {\n            type: 'integer',\n            description: 'Weight of the shipment in grams'\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      location_id: {
        type: 'integer',
        description: 'ID of the destination location',
      },
      payment_method: {
        type: 'string',
        description: 'Order payment method',
        enum: [
          'gopay',
          'va',
          'qris',
          'card',
          'invoice',
          'alfamart',
          'ovo',
          'dana',
          'shopeepay',
          'linkaja',
          'no_payment',
          'bank_transfer',
          'marketplace',
          'cod',
        ],
      },
      store_id: {
        type: 'integer',
        description: 'ID of the store',
      },
      warehouse_id: {
        type: 'integer',
        description: 'ID of the warehouse',
      },
      weight: {
        type: 'integer',
        description: 'Weight of the shipment in grams',
      },
      is_show_all: {
        type: 'boolean',
        description: 'Whether to show all courier services or only those available',
      },
      postal_code: {
        type: 'string',
        description: 'Postal code of the destination',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['location_id', 'payment_method', 'store_id', 'warehouse_id', 'weight'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.shippingCosts.getCourierServices(body)),
  );
};

export default { metadata, tool, handler };
