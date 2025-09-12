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
  httpPath: '/v2/shipping-costs',
  operationId: 'ScalevApiWeb.ShippingCostController.search_shipping_costs',
};

export const tool: Tool = {
  name: 'get_estimates_shipping_costs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve shipping cost estimates based on origin, destination, courier services, and package weight.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    data: {\n      type: 'array',\n      description: 'List of shipping cost results',\n      items: {\n        type: 'object',\n        title: 'ShippingCostResult',\n        description: 'Schema for a single shipping cost result',\n        properties: {\n          cost: {\n            type: 'number',\n            description: 'Cost of the shipment'\n          },\n          cost_source: {\n            type: 'string',\n            description: 'Source of the cost'\n          },\n          courier_service: {\n            type: 'object',\n            title: 'CourierServiceLocationData',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Courier Service ID'\n              },\n              code: {\n                type: 'string',\n                description: 'Code for the courier service'\n              },\n              courier: {\n                type: 'object',\n                title: 'CourierLocationData',\n                properties: {\n                  id: {\n                    type: 'integer',\n                    description: 'Courier ID'\n                  },\n                  code: {\n                    type: 'string',\n                    description: 'Courier code'\n                  },\n                  courier_type: {\n                    type: 'string',\n                    title: 'CourierType',\n                    description: 'Type of the courier',\n                    enum: [                      'instant',\n                      'cashless',\n                      'standard'\n                    ]\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Courier name'\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the courier service'\n              }\n            }\n          },\n          etd: {\n            type: 'string',\n            description: 'Estimated time of delivery'\n          },\n          weight: {\n            type: 'integer',\n            description: 'Weight of the shipment in grams'\n          }\n        },\n        required: [          'cost',\n          'cost_source',\n          'courier_service',\n          'etd',\n          'weight'\n        ]\n      }\n    },\n    status: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      courier_codes: {
        type: 'array',
        description: 'List of courier codes',
        items: {
          type: 'string',
          title: 'CourierCode',
          description: 'Schema for a courier code',
          enum: [
            'ninja',
            'ide',
            'sicepat',
            'sap',
            'ncs',
            'anteraja',
            'sentral',
            'jne',
            'jnt',
            'pos',
            'lion',
            'rex',
            'jtl',
            'tiki',
            'rpx',
            'pandu',
            'wahana',
            'pahala',
            'jet',
            'slis',
            'dse',
            'first',
            'star',
            'idl',
          ],
        },
      },
      location_id: {
        type: 'integer',
        description: 'ID of the destination location',
      },
      warehouse_id: {
        type: 'integer',
        description: 'ID of the warehouse',
      },
      weight: {
        type: 'integer',
        description: 'Weight of the shipment in grams',
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
    required: ['courier_codes', 'location_id', 'warehouse_id', 'weight'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.shippingCosts.getEstimates(body)));
};

export default { metadata, tool, handler };
