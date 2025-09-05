// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v2/order/{id}',
  operationId: 'ScalevApiWeb.OrderController.update',
};

export const tool: Tool = {
  name: 'update_order',
  description: 'Update order details by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      address: {
        type: 'string',
        description: 'Recipient address',
      },
      channel_unique_id: {
        type: 'string',
        description: 'Channel unique ID',
      },
      courier_service_id: {
        type: 'integer',
        description: 'Courier service ID',
      },
      customer_email: {
        type: 'string',
        description: 'Customer email',
      },
      customer_name: {
        type: 'string',
        description: 'Customer name',
      },
      customer_phone: {
        type: 'string',
        description: 'Customer phone number',
      },
      dropshipper_name: {
        type: 'string',
        description: 'Dropshipper name',
      },
      dropshipper_phone: {
        type: 'string',
        description: 'Dropshipper phone',
      },
      financial_entity_id: {
        type: 'integer',
        description: 'Financial entity ID',
      },
      is_dropshipping: {
        type: 'boolean',
        description: 'Is dropshipping order',
      },
      location_id: {
        type: 'integer',
        description: 'Location ID',
      },
      notes: {
        type: 'string',
        description: 'Order notes',
      },
      orderbundles: {
        type: 'array',
        description: 'Order bundles',
        items: {
          type: 'object',
          properties: {
            bundle_price_option_unique_id: {
              type: 'string',
              description: 'Bundle price option unique ID',
            },
            quantity: {
              type: 'integer',
              description: 'Quantity',
            },
          },
          required: ['bundle_price_option_unique_id', 'quantity'],
        },
      },
      ordervariants: {
        type: 'array',
        description: 'Order variants',
        items: {
          type: 'object',
          properties: {
            quantity: {
              type: 'integer',
              description: 'Quantity',
            },
            variant_unique_id: {
              type: 'string',
              description: 'Variant unique ID',
            },
          },
          required: ['quantity', 'variant_unique_id'],
        },
      },
      other_income: {
        type: 'number',
        description: 'Other income amount',
      },
      other_income_name: {
        type: 'string',
        description: 'Other income name',
      },
      page_unique_id: {
        type: 'string',
        description: 'Page unique ID',
      },
      payment_account_holder: {
        type: 'string',
        description: 'Payment account holder name',
      },
      payment_account_number: {
        type: 'string',
        description: 'Payment account number',
      },
      payment_account_unique_id: {
        type: 'string',
        description: 'Payment account unique ID',
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
      postal_code: {
        type: 'string',
        description: 'Postal code',
      },
      product_discount: {
        type: 'number',
        description: 'Product discount amount',
      },
      shipment_provider_code: {
        type: 'string',
        description: 'Shipment provider code',
        enum: ['mengantar', 'lincah', 'ninja'],
      },
      shipping_cost: {
        type: 'number',
        description: 'Shipping cost',
      },
      shipping_discount: {
        type: 'number',
        description: 'Shipping discount amount',
      },
      sub_payment_method: {
        type: 'string',
        description: 'Xendit VA bank code',
        enum: [
          'BCA',
          'BNI',
          'BRI',
          'MANDIRI',
          'PERMATA',
          'BSI',
          'BJB',
          'CIMB',
          'SAHABAT_SAMPOERNA',
          'ARTAJASA',
        ],
      },
      transferproof_url: {
        type: 'string',
        description: 'Transfer proof URL',
      },
      warehouse_unique_id: {
        type: 'string',
        description: 'Warehouse unique ID',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.update(id, body));
};

export default { metadata, tool, handler };
