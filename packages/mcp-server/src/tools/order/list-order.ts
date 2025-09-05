// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/order',
  operationId: 'ScalevApiWeb.OrderViewController.index',
};

export const tool: Tool = {
  name: 'list_order',
  description:
    'Retrieves a paginated list of orders with optional filtering. The data is sorted by created_at in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.',
  inputSchema: {
    type: 'object',
    properties: {
      advertiser_id: {
        type: 'string',
        description: 'Filter orders by advertiser ID',
      },
      awb_ca_status: {
        type: 'string',
        description: 'Filter orders by AWB status',
        enum: ['unavailable', 'pending', 'waiting', 'failed', 'created', 'canceled'],
      },
      business_id: {
        type: 'string',
        description: 'Filter orders by business ID',
      },
      business_role: {
        type: 'string',
        description: 'Filter by business role',
        enum: ['retailer', 'fulfillment_provider'],
      },
      columns: {
        type: 'string',
        description:
          'Comma-separated list of columns to include. Available columns: secret_slug, final_variants, store, origin_address, address_location, handler_phone, order_id, destination_address, quantity, product_price, total_weight, courier_service, shipping_cost, payment_method, gross_revenue, shipment_receipt, courier_additional_info, payment_status, status, customer, draft_time, orderlines, is_dropshipping, dropshipper_name, dropshipper_phone, unique_code_discount, tags, awb_status, awb_ca_status, follow_up_chats, follow_up_chat_type, message_history, metadata, notes, courier_aggregator_code, shipment_account, payment_account, financial_entity, payment_account_holder, payment_account_number, transferproof_url, transfer_time, product_discount, shipping_discount, other_income, other_income_name, shipment_status, is_repeat, platform, external_id, is_purchase_fb, is_purchase_tiktok, is_purchase_kwai, fb_pixel_ids, tiktok_pixel_ids, kwai_pixel_ids, pending_time, confirmed_time, shipped_time, completed_time, rts_time, canceled_time, closed_time, warehouse, page, channel_name, handler, advertiser, pg_payment_info, sub_payment_method, epayment_provider, invoice_url, pg_reference_id, net_revenue, payment_fee, scalev_fee, net_payment_revenue, discount_code_discount, discount_code_code, discount_code_applied_to, utm_source',
      },
      completed_time_since: {
        type: 'string',
        description: 'Filter orders by completed time since (ISO 8601 format)',
      },
      completed_time_until: {
        type: 'string',
        description: 'Filter orders by completed time until (ISO 8601 format)',
      },
      confirmed_time_since: {
        type: 'string',
        description: 'Filter orders by confirmed time since (ISO 8601 format)',
      },
      confirmed_time_until: {
        type: 'string',
        description: 'Filter orders by confirmed time until (ISO 8601 format)',
      },
      courier_id: {
        type: 'string',
        description: 'Filter orders by courier ID',
      },
      draft_time_until: {
        type: 'string',
        description: 'Filter orders by draft time until (ISO 8601 format)',
      },
      external_id: {
        type: 'string',
        description: 'Filter orders by external ID',
      },
      financial_entity_id: {
        type: 'string',
        description: 'Filter orders by financial entity ID',
      },
      handler_id: {
        type: 'string',
        description: 'Filter orders by handler ID',
      },
      is_from_form: {
        type: 'string',
        description: 'Filter orders created from a form',
        enum: ['true', 'false'],
      },
      is_probably_spam: {
        type: 'string',
        description: 'Filter spam orders',
        enum: ['true', 'false'],
      },
      is_repeat: {
        type: 'string',
        description: 'Filter repeat orders',
        enum: ['true', 'false'],
      },
      is_transferproof_exist: {
        type: 'string',
        description: 'Filter orders with transfer proof',
        enum: ['true', 'false'],
      },
      last_id: {
        type: 'integer',
        description: 'Last order ID for cursor-based pagination',
      },
      order_id: {
        type: 'string',
        description: 'Filter orders by specific order ID',
      },
      page_id: {
        type: 'string',
        description: 'Filter orders by page ID',
      },
      page_size: {
        type: 'integer',
        description: 'Number of items per page (default: 25, max: 25)',
      },
      payment_method: {
        type: 'string',
        description: 'Filter orders by payment method',
        enum: [
          'no_payment',
          'bank_transfer',
          'marketplace',
          'va',
          'qris',
          'ewallet',
          'cod',
          'card',
          'gopay',
          'invoice',
          'alfamart',
          'ovo',
          'dana',
          'shopeepay',
          'linkaja',
        ],
      },
      payment_status: {
        type: 'string',
        description: 'Filter orders by payment status',
        enum: ['paid', 'unpaid', 'conflict', 'settled'],
      },
      platform: {
        type: 'string',
        description: 'Filter orders by platform',
        enum: [
          'scalev',
          'tiktokshop',
          'tokopedia',
          'shopee',
          'lazada',
          'blibli',
          'bukalapak',
          'orderonline',
          'berdu',
        ],
      },
      product_id: {
        type: 'string',
        description: 'Filter orders containing a specific product ID',
      },
      search: {
        type: 'string',
        description: 'Search term to filter orders by order ID, customer name, email, or phone number',
      },
      shipment_status: {
        type: 'string',
        description: 'Filter orders by shipment status',
      },
      shipped_time_since: {
        type: 'string',
        description: 'Filter orders by shipped time since (ISO 8601 format)',
      },
      shipped_time_until: {
        type: 'string',
        description: 'Filter orders by shipped time until (ISO 8601 format)',
      },
      status: {
        type: 'string',
        description: 'Filter orders by status',
        enum: [
          'draft',
          'pending',
          'confirmed',
          'in_process',
          'ready',
          'canceled',
          'shipped',
          'shipped_rts',
          'completed',
          'rts',
          'closed',
        ],
      },
      store_id: {
        type: 'string',
        description: 'Filter orders by store ID',
      },
      tags: {
        type: 'string',
        description: 'Comma-separated list of tags to filter orders',
      },
      utm_source: {
        type: 'string',
        description: 'Filter orders by UTM source',
      },
      warehouse_id: {
        type: 'string',
        description: 'Filter orders by warehouse ID',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.order.list(body));
};

export default { metadata, tool, handler };
