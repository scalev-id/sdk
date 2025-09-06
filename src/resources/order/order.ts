// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessageHistoryAPI from './message-history';
import {
  MessageHistory as MessageHistoryAPIMessageHistory,
  MessageHistoryAddParams,
  MessageHistoryAddResponse,
  MessageHistoryShowResponse,
} from './message-history';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Order extends APIResource {
  messageHistory: MessageHistoryAPI.MessageHistory = new MessageHistoryAPI.MessageHistory(this._client);

  /**
   * Create a new order with the provided details.
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    return this._client.post('/v2/order', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific order.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/v2/order/${id}`, options);
  }

  /**
   * Update order details by ID.
   */
  update(
    id: number,
    body: OrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderUpdateResponse> {
    return this._client.patch(path`/v2/order/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of orders with optional filtering. The data is sorted
   * by created_at in descending order and cannot be changed. Uses cursor-based
   * pagination with default page size of 25 and maximum of 25.
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrderListResponsesCursorPagination, OrderListResponse> {
    return this._client.getAPIList('/v2/order', CursorPagination<OrderListResponse>, { query, ...options });
  }

  /**
   * Delete multiple orders by IDs.
   */
  delete(body: OrderDeleteParams, options?: RequestOptions): APIPromise<OrderDeleteResponse> {
    return this._client.post('/v2/order/delete', { body, ...options });
  }

  /**
   * Cancel Air Waybill for multiple orders.
   */
  cancelAwb(body: OrderCancelAwbParams, options?: RequestOptions): APIPromise<OrderCancelAwbResponse> {
    return this._client.post('/v2/order/cancel-awb', { body, ...options });
  }

  /**
   * Change the status of multiple orders.
   */
  changeStatus(
    body: OrderChangeStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderChangeStatusResponse> {
    return this._client.post('/v2/order/change-status', { body, ...options });
  }

  /**
   * Check the payment status of an order.
   */
  checkPayment(id: number, options?: RequestOptions): APIPromise<OrderCheckPaymentResponse> {
    return this._client.post(path`/v2/order/${id}/check-payment`, options);
  }

  /**
   * Check the settlement status of an order.
   */
  checkSettlement(id: number, options?: RequestOptions): APIPromise<OrderCheckSettlementResponse> {
    return this._client.post(path`/v2/order/${id}/check-settlement`, options);
  }

  /**
   * Create a payment request / intent for an order.
   */
  createPayment(id: number, options?: RequestOptions): APIPromise<OrderCreatePaymentResponse> {
    return this._client.post(path`/v2/order/${id}/payment`, options);
  }

  /**
   * Create a new shipment status history entry for an order.
   */
  createShipmentStatusHistory(
    id: number,
    body: OrderCreateShipmentStatusHistoryParams,
    options?: RequestOptions,
  ): APIPromise<OrderCreateShipmentStatusHistoryResponse> {
    return this._client.post(path`/v2/order/${id}/shipment-status-history`, { body, ...options });
  }

  /**
   * Create a duplicate of an order and cancel the original.
   */
  duplicate(
    id: number,
    body: OrderDuplicateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderDuplicateResponse> {
    return this._client.post(path`/v2/order/${id}/duplicate`, { body, ...options });
  }

  /**
   * Generate Air Waybill for multiple orders.
   */
  generateAwb(body: OrderGenerateAwbParams, options?: RequestOptions): APIPromise<OrderGenerateAwbResponse> {
    return this._client.post('/v2/order/generate-awb', { body, ...options });
  }

  /**
   * Retrieve flags to determine available actions for an order.
   */
  getActions(id: number, options?: RequestOptions): APIPromise<OrderGetActionsResponse> {
    return this._client.get(path`/v2/order/${id}/actions`, options);
  }

  /**
   * Retrieve a specific chat text message.
   */
  getChat(
    chatID: number,
    params: OrderGetChatParams,
    options?: RequestOptions,
  ): APIPromise<OrderGetChatResponse> {
    const { id } = params;
    return this._client.get(path`/v2/order/${id}/chat/${chatID}`, options);
  }

  /**
   * Retrieve chat text messages associated with an order.
   */
  getChats(id: number, options?: RequestOptions): APIPromise<OrderGetChatsResponse> {
    return this._client.get(path`/v2/order/${id}/chats`, options);
  }

  /**
   * Get list of emails sent for an order.
   */
  listEmails(id: number, options?: RequestOptions): APIPromise<OrderListEmailsResponse> {
    return this._client.get(path`/v2/order/${id}/emails`, options);
  }

  /**
   * Retrieve a list of tags associated with orders.
   */
  listTags(
    query: OrderListTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListTagsResponse> {
    return this._client.get('/v2/order/tags', { query, ...options });
  }

  /**
   * Mark multiple orders as not spam.
   */
  markNotSpam(body: OrderMarkNotSpamParams, options?: RequestOptions): APIPromise<OrderMarkNotSpamResponse> {
    return this._client.post('/v2/order/mark-not-spam', { body, ...options });
  }

  /**
   * Retrieve order details using payment gateway reference ID.
   */
  retrieveByPgReferenceID(
    pgReferenceID: string,
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveByPgReferenceIDResponse> {
    return this._client.get(path`/v2/order/pg-reference-id/${pgReferenceID}`, options);
  }

  /**
   * Retrieve orders using multiple payment gateway reference IDs.
   */
  retrieveByPgReferenceIDs(
    query: OrderRetrieveByPgReferenceIDsParams,
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveByPgReferenceIDsResponse> {
    return this._client.get('/v2/order/pg-reference-ids', { query, ...options });
  }

  /**
   * Send LMS access email to customer.
   */
  sendLmsAccess(id: number, options?: RequestOptions): APIPromise<OrderSendLmsAccessResponse> {
    return this._client.post(path`/v2/order/${id}/send-lms-access`, options);
  }

  /**
   * Send email containing links to download digital products to customer.
   */
  sendProductDigital(id: number, options?: RequestOptions): APIPromise<OrderSendProductDigitalResponse> {
    return this._client.post(path`/v2/order/${id}/send-product-digital`, options);
  }

  /**
   * Retrieves descriptive statistics about orders, such as total orders, total
   * revenue, and other aggregated data. Can be filtered using the same parameters as
   * the orders list endpoint.
   */
  statistics(
    query: OrderStatisticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderStatisticsResponse> {
    return this._client.get('/v2/order/statistics', { query, ...options });
  }

  /**
   * Trigger purchase event for analytics and tracking.
   */
  triggerPurchase(id: number, options?: RequestOptions): APIPromise<OrderTriggerPurchaseResponse> {
    return this._client.post(path`/v2/order/${id}/trigger-purchase`, options);
  }

  /**
   * Update the customer associated with an order.
   */
  updateCustomer(
    id: number,
    body: OrderUpdateCustomerParams,
    options?: RequestOptions,
  ): APIPromise<OrderUpdateCustomerResponse> {
    return this._client.patch(path`/v2/order/${id}/customer`, { body, ...options });
  }

  /**
   * Update shipment-related data for an order.
   */
  updateShipment(
    id: number,
    body: OrderUpdateShipmentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderUpdateShipmentResponse> {
    return this._client.patch(path`/v2/order/${id}/shipment`, { body, ...options });
  }

  /**
   * Update shipment receipt / tracking ID for an order.
   */
  updateShipmentReceipt(
    id: number,
    body: OrderUpdateShipmentReceiptParams,
    options?: RequestOptions,
  ): APIPromise<OrderUpdateShipmentReceiptResponse> {
    return this._client.patch(path`/v2/order/${id}/shipment-receipt`, { body, ...options });
  }

  /**
   * Update tags for an order.
   */
  updateTags(
    id: number,
    body: OrderUpdateTagsParams,
    options?: RequestOptions,
  ): APIPromise<OrderUpdateTagsResponse> {
    return this._client.post(path`/v2/order/${id}/update-tags`, { body, ...options });
  }

  /**
   * Upload orders from CSV file. (1) Archive mode. Choose this mode if you want to
   * import old data from another platform you've been using. You can directly create
   * products that you made on your previous platform. Orders that are created will
   * immediately have 'Completed' status. Download template for Archive mode here:
   * https://app.scalev.id/example/template_archive.csv. (2) Regular mode. Choose
   * this mode if you want to enter current data that you wish to input in bulk, not
   * one by one via order input. It will take inventory into account if your products
   * have inventory enabled. Successfully created orders will have 'Created',
   * 'Pending', or 'Confirmed' status, depending on the completeness of the data.
   * Download template for Regular mode here:
   * https://app.scalev.id/example/template_regular.csv.
   */
  upload(body: OrderUploadParams, options?: RequestOptions): APIPromise<OrderUploadResponse> {
    return this._client.post(
      '/v2/order/upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Upload a CSV file to change status of multiple orders. Template file can be
   * downloaded from the link here:
   * https://app.scalev.id/example/update_status_template.csv. (1) Leave blank the
   * 'shipment_receipt' field if you don't want to change the receipt/tracking
   * number. Note: this will not change receipts/tracking numbers that are
   * automatically generated by Scalev through the 'Request Pickup' menu. (2) Leave
   * blank the 'day', 'month', and 'year' fields if you want to use the time of
   * upload.
   */
  uploadChangeStatus(
    body: OrderUploadChangeStatusParams,
    options?: RequestOptions,
  ): APIPromise<OrderUploadChangeStatusResponse> {
    return this._client.post(
      '/v2/order/upload-change-status',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Upload file to update shipment receipts (tracking IDs) for multiple orders.
   * Template file can be downloaded from the link here:
   * https://app.scalev.id/example/receipt_template.csv.
   */
  uploadReceipt(
    body: OrderUploadReceiptParams,
    options?: RequestOptions,
  ): APIPromise<OrderUploadReceiptResponse> {
    return this._client.post(
      '/v2/order/upload-receipt',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type OrderListResponsesCursorPagination = CursorPagination<OrderListResponse>;

export interface OrderCreateResponse {
  code?: number;

  data?: OrderCreateResponse.Data;

  status?: string;
}

export namespace OrderCreateResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderRetrieveResponse {
  code?: number;

  data?: OrderRetrieveResponse.Data;

  status?: string;
}

export namespace OrderRetrieveResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderUpdateResponse {
  code?: number;

  data?: OrderUpdateResponse.Data;

  status?: string;
}

export namespace OrderUpdateResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

/**
 * Order data based on requested columns
 */
export interface OrderListResponse {
  /**
   * Order primary key
   */
  id?: number;

  advertiser?: OrderListResponse.Advertiser;

  /**
   * Order AWB courier aggregator status
   */
  awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

  /**
   * Order AWB status
   */
  awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

  canceled_time?: string | null;

  /**
   * Channel name
   */
  channel_name?: string | null;

  closed_time?: string | null;

  completed_time?: string | null;

  confirmed_time?: string | null;

  /**
   * Additional courier information
   */
  courier_additional_info?: string | null;

  courier_service?: OrderListResponse.CourierService;

  /**
   * Order creation timestamp
   */
  created_at?: string;

  customer?: OrderListResponse.Customer;

  destination_address?: OrderListResponse.DestinationAddress;

  /**
   * Discount code applied to the order
   */
  discount_code_applied_to?: string | null;

  /**
   * Discount code used in the order
   */
  discount_code_code?: string | null;

  /**
   * Discount amount from the discount code
   */
  discount_code_discount?: string;

  /**
   * Draft timestamp
   */
  draft_time?: string;

  /**
   * Dropshipper name
   */
  dropshipper_name?: string | null;

  /**
   * Dropshipper phone number
   */
  dropshipper_phone?: string | null;

  /**
   * E-payment provider
   */
  epayment_provider?: string | null;

  /**
   * External ID for the order
   */
  external_id?: string | null;

  fb_pixel_ids?: Array<string>;

  final_variants?: { [key: string]: number };

  financial_entity?: OrderListResponse.FinancialEntity;

  /**
   * Type of follow up chat
   */
  follow_up_chat_type?: 'product' | 'order';

  /**
   * Follow up chats associated with the order
   */
  follow_up_chats?: Array<OrderListResponse.FollowUpChat>;

  /**
   * Gross revenue from the order
   */
  gross_revenue?: string;

  handler?: OrderListResponse.Handler;

  /**
   * Handler phone number
   */
  handler_phone?: string | null;

  /**
   * Is the order a dropshipping order
   */
  is_dropshipping?: boolean;

  /**
   * Is the order probably spam
   */
  is_probably_spam?: boolean;

  /**
   * Is the order a Facebook purchase
   */
  is_purchase_fb?: boolean;

  /**
   * Is the order a Kwai purchase
   */
  is_purchase_kwai?: boolean;

  /**
   * Is the order a TikTok purchase
   */
  is_purchase_tiktok?: boolean;

  /**
   * Is the order a repeat order
   */
  is_repeat?: boolean;

  kwai_pixel_ids?: Array<string>;

  /**
   * Last updated timestamp of the order
   */
  last_updated_at?: string;

  /**
   * Who marked the order as spam
   */
  mark_as_spam_by?: string | null;

  message_history?: Array<OrderListResponse.MessageHistory>;

  /**
   * Metadata associated with the order
   */
  metadata?: { [key: string]: unknown };

  /**
   * Net payment revenue from the order
   */
  net_payment_revenue?: string;

  /**
   * Net revenue from the order
   */
  net_revenue?: number;

  /**
   * Notes associated with the order
   */
  notes?: string | null;

  /**
   * Order ID in string format
   */
  order_id?: string;

  origin_address?: OrderListResponse.OriginAddress;

  /**
   * Other income associated with the order
   */
  other_income?: number;

  /**
   * Name of the other income
   */
  other_income_name?: string | null;

  page?: OrderListResponse.Page;

  /**
   * Payment account holder name
   */
  payment_account_holder?: string | null;

  /**
   * Payment account ID
   */
  payment_account_id?: number | null;

  /**
   * Payment account number
   */
  payment_account_number?: string | null;

  /**
   * Payment fee associated with the order
   */
  payment_fee?: number;

  /**
   * Order payment method
   */
  payment_method?:
    | 'gopay'
    | 'va'
    | 'qris'
    | 'card'
    | 'invoice'
    | 'alfamart'
    | 'ovo'
    | 'dana'
    | 'shopeepay'
    | 'linkaja'
    | 'no_payment'
    | 'bank_transfer'
    | 'marketplace'
    | 'cod';

  /**
   * Order payment status
   */
  payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

  /**
   * Pending timestamp of the order
   */
  pending_time?: string;

  /**
   * Payment gateway payment info
   */
  pg_payment_info?: { [key: string]: unknown } | null;

  /**
   * Payment gateway reference ID
   */
  pg_reference_id?: string | null;

  /**
   * Platform where the order was placed
   */
  platform?: string;

  /**
   * Total product discount applied to the order
   */
  product_discount?: number;

  /**
   * Total product price before discounts
   */
  product_price?: number;

  /**
   * Ready to ship timestamp
   */
  rts_time?: string | null;

  /**
   * Scalev fee associated with the order
   */
  scalev_fee?: number;

  /**
   * Secret slug for the order
   */
  secret_slug?: string | null;

  /**
   * Shipment provider code
   */
  shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

  /**
   * Shipment receipt URL
   */
  shipment_receipt?: string | null;

  /**
   * Current shipment status of the order
   */
  shipment_status?: string | null;

  /**
   * Shipped timestamp of the order
   */
  shipped_time?: string | null;

  /**
   * Shipping cost associated with the order
   */
  shipping_cost?: number;

  /**
   * Shipping discount applied to the order
   */
  shipping_discount?: number;

  /**
   * Order status
   */
  status?:
    | 'draft'
    | 'pending'
    | 'confirmed'
    | 'in_process'
    | 'ready'
    | 'shipped'
    | 'completed'
    | 'canceled'
    | 'rts'
    | 'closed';

  store?: OrderListResponse.Store;

  /**
   * Xendit VA bank code
   */
  sub_payment_method?:
    | 'BCA'
    | 'BNI'
    | 'BRI'
    | 'MANDIRI'
    | 'PERMATA'
    | 'BSI'
    | 'BJB'
    | 'CIMB'
    | 'SAHABAT_SAMPOERNA'
    | 'ARTAJASA';

  /**
   * Tags associated with the order
   */
  tags?: Array<OrderListResponse.Tag>;

  tiktok_pixel_ids?: Array<string>;

  /**
   * Total weight of the order
   */
  total_weight?: number;

  /**
   * Transfer timestamp of the order
   */
  transfer_time?: string | null;

  /**
   * Transfer proof URL
   */
  transferproof_url?: string | null;

  /**
   * Discount from unique code applied to the order
   */
  unique_code_discount?: number;

  /**
   * UTM source for tracking
   */
  utm_source?: string | null;

  warehouse?: OrderListResponse.Warehouse;
}

export namespace OrderListResponse {
  export interface Advertiser {
    /**
     * User ID
     */
    id?: number;

    /**
     * Affiliate code of the user
     */
    aff_code?: string;

    /**
     * URL to user avatar
     */
    avatar?: string;

    /**
     * User email
     */
    email?: string;

    /**
     * User full name
     */
    fullname?: string;

    /**
     * User phone number
     */
    phone?: string;
  }

  export interface CourierService {
    /**
     * Courier Service ID
     */
    id?: number;

    /**
     * Code for the courier service
     */
    code?: string;

    /**
     * Code for CO courier service
     */
    code_co?: string;

    /**
     * Code for KA courier service
     */
    code_ka?: string;

    /**
     * Code for Lincah courier service
     */
    code_lincah?: string;

    /**
     * Code for Mengantar courier service
     */
    code_mengantar?: string;

    /**
     * Code for RO courier service
     */
    code_ro?: string;

    courier?: CourierService.Courier;

    /**
     * Name of the courier service
     */
    name?: string;
  }

  export namespace CourierService {
    export interface Courier {
      /**
       * Courier ID
       */
      id?: number;

      /**
       * Courier code
       */
      code?: string;

      /**
       * Courier code in Georgian
       */
      code_ka?: string;

      /**
       * Courier code in Lincah
       */
      code_lincah?: string;

      /**
       * Courier code for Mengantar
       */
      code_mengantar?: string;

      /**
       * Courier code in Romanian
       */
      code_ro?: string;

      /**
       * Type of the courier
       */
      courier_type?: 'delivery' | 'pickup';

      /**
       * Is this a pickup courier?
       */
      is_pickup?: boolean;

      /**
       * Courier name
       */
      name?: string;
    }
  }

  export interface Customer {
    /**
     * Customer ID
     */
    id?: number;

    /**
     * Confirmation timestamp
     */
    confirmed_at?: string;

    /**
     * Creation timestamp
     */
    created_at?: string;

    /**
     * Customer email
     */
    email?: string;

    /**
     * Last update timestamp
     */
    last_updated_at?: string;

    /**
     * Customer name
     */
    name?: string;

    /**
     * Customer phone number
     */
    phone?: string;

    /**
     * Customer status
     */
    status?: string;
  }

  export interface DestinationAddress {
    /**
     * Order Address ID
     */
    id?: number;

    /**
     * Full address
     */
    address?: string;

    /**
     * City of the address
     */
    city?: string;

    /**
     * Location ID for the address
     */
    location?: number;

    /**
     * Name of the recipient
     */
    name?: string;

    /**
     * Phone number of the recipient
     */
    phone?: string;

    /**
     * Postal code of the address
     */
    postal_code?: string;

    /**
     * Province of the address
     */
    province?: string;

    /**
     * Subdistrict of the address
     */
    subdistrict?: string;
  }

  export interface FinancialEntity {
    /**
     * Financial Entity ID
     */
    id?: number;

    /**
     * Code of the financial entity
     */
    code?: string;

    /**
     * Duitku code for the financial entity
     */
    duitku_code?: string;

    /**
     * Type of the financial entity
     */
    entity_type?: string;

    /**
     * Name of the financial entity
     */
    name?: string;

    /**
     * Platform associated with the financial entity
     */
    platform?: string;

    /**
     * Xendit code for the financial entity
     */
    xendit_code?: string;
  }

  export interface FollowUpChat {
    /**
     * Follow Up Chat ID
     */
    id?: number;

    /**
     * Bundle ID associated with the chat
     */
    bundle_id?: number;

    /**
     * Change status after follow up chat
     */
    change_status?: boolean;

    /**
     * Hours after which the follow up chat is triggered
     */
    hours_after?: number;

    /**
     * Image URL for the follow up chat
     */
    image?: string;

    /**
     * Is this a default follow up chat?
     */
    is_default?: boolean;

    /**
     * Name of the follow up chat
     */
    name?: string;

    /**
     * Product ID associated with the chat
     */
    product_id?: number;

    /**
     * Provider of the follow up chat service
     */
    provider?: string;

    /**
     * Store ID associated with the chat
     */
    store_id?: number;

    /**
     * Trigger condition for the follow up chat
     */
    trigger?: string;
  }

  export interface Handler {
    /**
     * User ID
     */
    id?: number;

    /**
     * Affiliate code of the user
     */
    aff_code?: string;

    /**
     * URL to user avatar
     */
    avatar?: string;

    /**
     * User email
     */
    email?: string;

    /**
     * User full name
     */
    fullname?: string;

    /**
     * User phone number
     */
    phone?: string;
  }

  export interface MessageHistory {
    /**
     * ID of the Follow Up Chat
     */
    id?: number;

    /**
     * Is the message from bot
     */
    is_from_bot?: boolean;

    /**
     * Message content
     */
    message?: string;

    /**
     * Name of the sender
     */
    name?: string;

    /**
     * Message provider
     */
    provider?: string;

    /**
     * Recipient name
     */
    recipient_name?: string;

    /**
     * Recipient phone number
     */
    recipient_phone?: string;

    /**
     * Sender name
     */
    sender_name?: string;

    /**
     * Sender phone number
     */
    sender_phone?: string;

    /**
     * Timestamp of the message
     */
    timestamp?: string;
  }

  export interface OriginAddress {
    /**
     * Warehouse Address ID
     */
    id?: number;

    /**
     * Full address of the warehouse
     */
    address?: string;

    /**
     * City of the warehouse address
     */
    city?: string;

    /**
     * Location ID for the address
     */
    location?: number;

    /**
     * Location ID for the address
     */
    location_id?: number;

    /**
     * Postal code of the warehouse address
     */
    postal_code?: string;

    /**
     * Province of the warehouse address
     */
    province?: string;

    /**
     * Subdistrict of the warehouse address
     */
    subdistrict?: string;

    /**
     * ID of the associated warehouse
     */
    warehouse?: number;
  }

  export interface Page {
    /**
     * Page ID
     */
    id?: number;

    /**
     * Is the page published?
     */
    is_published?: boolean;

    /**
     * Name of the page
     */
    name?: string;

    /**
     * Publication date of the page
     */
    published_at?: string;

    /**
     * Slug for the page URL
     */
    slug?: string;

    /**
     * ID of the store the page belongs to
     */
    store_id?: number;

    /**
     * Unique identifier for the page
     */
    unique_id?: string;
  }

  export interface Store {
    /**
     * Store ID
     */
    id?: number;

    business?: Store.Business;

    /**
     * Name of the store
     */
    name?: string;

    /**
     * Unique identifier for the store
     */
    unique_id?: string;

    /**
     * UUID of the store
     */
    uuid?: string;
  }

  export namespace Store {
    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }
  }

  export interface Tag {
    /**
     * Tag ID
     */
    id?: number;

    /**
     * Tag Name
     */
    name?: string;
  }

  export interface Warehouse {
    /**
     * Warehouse ID
     */
    id?: number;

    business?: Warehouse.Business;

    /**
     * Contact name at the warehouse
     */
    contact_name?: string;

    /**
     * Contact phone number at the warehouse
     */
    contact_phone?: string;

    /**
     * Name of the warehouse
     */
    name?: string;
  }

  export namespace Warehouse {
    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }
  }
}

export interface OrderDeleteResponse {
  code?: number;

  data?: Array<number>;

  status?: string;
}

export interface OrderCancelAwbResponse {
  code?: number;

  data?: OrderCancelAwbResponse.Data;

  status?: string;
}

export namespace OrderCancelAwbResponse {
  export interface Data {
    failures?: Data.Failures;

    successes?: Data.Successes;
  }

  export namespace Data {
    export interface Failures {
      /**
       * Error message for the order with this ID
       */
      ORDER_ID?: string;
    }

    export interface Successes {
      /**
       * Message or shipment receipt or tracking ID for the order with this ID
       */
      ORDER_ID?: string;
    }
  }
}

export interface OrderChangeStatusResponse {
  code?: number;

  data?: Array<OrderChangeStatusResponse.Data>;

  status?: string;
}

export namespace OrderChangeStatusResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Order ID in string format
     */
    order_id?: string;

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';
  }
}

export interface OrderCheckPaymentResponse {
  code?: number;

  data?: OrderCheckPaymentResponse.Data;

  status?: string;
}

export namespace OrderCheckPaymentResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderCheckSettlementResponse {
  code?: number;

  data?: OrderCheckSettlementResponse.Data;

  status?: string;
}

export namespace OrderCheckSettlementResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderCreatePaymentResponse {
  code?: number;

  data?: { [key: string]: unknown };

  status?: string;
}

export interface OrderCreateShipmentStatusHistoryResponse {
  code?: number;

  data?: OrderCreateShipmentStatusHistoryResponse.Data;

  status?: string;
}

export namespace OrderCreateShipmentStatusHistoryResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderDuplicateResponse {
  code?: number;

  data?: OrderDuplicateResponse.Data;

  status?: string;
}

export namespace OrderDuplicateResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderGenerateAwbResponse {
  code?: number;

  data?: OrderGenerateAwbResponse.Data;

  status?: string;
}

export namespace OrderGenerateAwbResponse {
  export interface Data {
    failures?: Data.Failures;

    successes?: Data.Successes;
  }

  export namespace Data {
    export interface Failures {
      /**
       * Error message for the order with this ID
       */
      ORDER_ID?: string;
    }

    export interface Successes {
      /**
       * Message or shipment receipt or tracking ID for the order with this ID
       */
      ORDER_ID?: string;
    }
  }
}

export interface OrderGetActionsResponse {
  code?: number;

  data?: OrderGetActionsResponse.Data;

  status?: string;
}

export namespace OrderGetActionsResponse {
  export interface Data {
    id?: number;

    is_digital_product_present?: boolean;

    is_physical_product_present?: boolean;

    order_id?: string;
  }
}

export interface OrderGetChatResponse {
  code?: number;

  data?: OrderGetChatResponse.Data;

  status?: string;
}

export namespace OrderGetChatResponse {
  export interface Data {
    /**
     * Follow-up chat ID
     */
    id?: number;

    /**
     * Triggered after order status change to this status
     */
    change_status?: boolean;

    /**
     * Hours after which the follow-up chat is sent
     */
    hours_after?: number;

    /**
     * Image URL for the follow-up chat
     */
    image?: string;

    /**
     * Is this a default follow-up chat
     */
    is_default?: boolean;

    /**
     * Name of the follow-up chat
     */
    name?: string;

    /**
     * Provider of the follow-up chat
     */
    provider?: string;

    /**
     * Text of the follow-up chat
     */
    text?: string;

    /**
     * URL encoded text of the follow-up chat
     */
    text_url?: string;

    /**
     * Trigger for the follow-up chat
     */
    trigger?: string;

    /**
     * WhatsApp integration ID for the follow-up chat
     */
    wa_integration_id?: number;
  }
}

export interface OrderGetChatsResponse {
  code?: number;

  data?: OrderGetChatsResponse.Data;

  status?: string;
}

export namespace OrderGetChatsResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string | null;

    /**
     * Order ID in string format
     */
    order_id?: string;

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';
  }

  export namespace Data {
    export interface FollowUpChat {
      /**
       * Follow-up chat ID
       */
      id?: number;

      /**
       * Triggered after order status change to this status
       */
      change_status?: boolean;

      /**
       * Hours after which the follow-up chat is sent
       */
      hours_after?: number;

      /**
       * Image URL for the follow-up chat
       */
      image?: string;

      /**
       * Is this a default follow-up chat
       */
      is_default?: boolean;

      /**
       * Name of the follow-up chat
       */
      name?: string;

      /**
       * Provider of the follow-up chat
       */
      provider?: string;

      /**
       * Text of the follow-up chat
       */
      text?: string;

      /**
       * URL encoded text of the follow-up chat
       */
      text_url?: string;

      /**
       * Trigger for the follow-up chat
       */
      trigger?: string;

      /**
       * WhatsApp integration ID for the follow-up chat
       */
      wa_integration_id?: number;
    }
  }
}

export interface OrderListEmailsResponse {
  code?: number;

  data?: Array<OrderListEmailsResponse.Data>;

  status?: string;
}

export namespace OrderListEmailsResponse {
  export interface Data {
    /**
     * Order email ID
     */
    id?: number;

    /**
     * Sender email address
     */
    from?: string;

    /**
     * Email creation timestamp
     */
    inserted_at?: string;

    /**
     * Message ID of the email
     */
    message_id?: string;

    /**
     * Associated order primary key
     */
    order_id?: number;

    /**
     * Email status
     */
    status?: string;

    status_history?: Array<Data.StatusHistory>;

    /**
     * Email subject
     */
    subject?: string;

    /**
     * Recipient email address
     */
    to?: string;

    /**
     * Type of the email
     */
    type?: string;

    /**
     * Last update timestamp of the email
     */
    updated_at?: string;
  }

  export namespace Data {
    export interface StatusHistory {
      /**
       * Email status
       */
      status?: string;

      /**
       * Timestamp of the status change
       */
      timestamp?: string;
    }
  }
}

export interface OrderListTagsResponse {
  code?: number;

  /**
   * List of tag names
   */
  data?: Array<string>;

  status?: string;
}

export interface OrderMarkNotSpamResponse {
  code?: number;

  data?: Array<OrderMarkNotSpamResponse.Data>;

  status?: string;
}

export namespace OrderMarkNotSpamResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string | null;

    /**
     * Order ID in string format
     */
    order_id?: string;

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';
  }
}

export interface OrderRetrieveByPgReferenceIDResponse {
  code?: number;

  data?: OrderRetrieveByPgReferenceIDResponse.Data;

  status?: string;
}

export namespace OrderRetrieveByPgReferenceIDResponse {
  export interface Data {
    id?: number;
  }
}

export interface OrderRetrieveByPgReferenceIDsResponse {
  code?: number;

  data?: OrderRetrieveByPgReferenceIDsResponse.Data;

  status?: string;
}

export namespace OrderRetrieveByPgReferenceIDsResponse {
  export interface Data {
    PG_REFERENCE_ID?: Data.PgReferenceID;
  }

  export namespace Data {
    export interface PgReferenceID {
      id?: number;

      order_id?: string;
    }
  }
}

export interface OrderSendLmsAccessResponse {
  code?: number;

  status?: string;
}

export interface OrderSendProductDigitalResponse {
  code?: number;

  status?: string;
}

export interface OrderStatisticsResponse {
  code?: number;

  data?: OrderStatisticsResponse.Data;

  status?: string;
}

export namespace OrderStatisticsResponse {
  export interface Data {
    breakdown_date?: string;

    custom_breakdown_key?: string;

    datetime_type?: string;

    is_breakdown_status?: boolean;

    params?: { [key: string]: unknown };

    results?: Array<Data.Result>;

    tz?: string;
  }

  export namespace Data {
    export interface Result {
      count?: number;

      custom_breakdown_id?: number;

      custom_breakdown_name?: string;

      day?: string;

      gross_revenue?: number;

      month?: string;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      week?: string;
    }
  }
}

export interface OrderTriggerPurchaseResponse {
  code?: number;

  data?: OrderTriggerPurchaseResponse.Data;

  status?: string;
}

export namespace OrderTriggerPurchaseResponse {
  export interface Data {
    /**
     * Kwai purchase trigger response
     */
    kwai?: { [key: string]: unknown };

    /**
     * Meta purchase trigger response
     */
    meta?: { [key: string]: unknown };

    /**
     * TikTok purchase trigger response
     */
    tiktok?: { [key: string]: unknown };
  }
}

export interface OrderUpdateCustomerResponse {
  code?: number;

  data?: OrderUpdateCustomerResponse.Data;

  status?: string;
}

export namespace OrderUpdateCustomerResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderUpdateShipmentResponse {
  code?: number;

  data?: OrderUpdateShipmentResponse.Data;

  status?: string;
}

export namespace OrderUpdateShipmentResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderUpdateShipmentReceiptResponse {
  code?: number;

  data?: OrderUpdateShipmentReceiptResponse.Data;

  status?: string;
}

export namespace OrderUpdateShipmentReceiptResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Order ID in string format
     */
    order_id?: string;

    /**
     * Shipment receipt URL
     */
    shipment_receipt?: string | null;
  }
}

export interface OrderUpdateTagsResponse {
  code?: number;

  data?: OrderUpdateTagsResponse.Data;

  status?: string;
}

export namespace OrderUpdateTagsResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    advertiser?: Data.Advertiser;

    /**
     * Analytics purchases associated with the order
     */
    analytics_purchases?: Array<Data.AnalyticsPurchase>;

    /**
     * Order AWB courier aggregator status
     */
    awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Order AWB status
     */
    awb_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

    /**
     * Bundle price options for the order
     */
    bundle_price_options?: { [key: string]: unknown } | null;

    business?: Data.Business;

    canceled_time?: string | null;

    /**
     * Channel name of the order
     */
    channel_name?: string | null;

    /**
     * Chat message associated with the order
     */
    chat_message?: string;

    closed_time?: string | null;

    /**
     * Cost of goods sold for the order
     */
    cogs?: string;

    /**
     * Cost of goods sold for the order minus tax
     */
    cogs_bt?: string;

    completed_time?: string | null;

    confirmed_time?: string | null;

    conflict_time?: string | null;

    /**
     * Courier ID for the order
     */
    courier?: number | null;

    /**
     * Additional information for the courier
     */
    courier_additional_info?: string | null;

    courier_service?: Data.CourierService;

    /**
     * Order creation timestamp
     */
    created_at?: string;

    customer?: Data.Customer;

    destination_address?: Data.DestinationAddress;

    /**
     * What the discount code was applied to
     */
    discount_code_applied_to?: string | null;

    /**
     * Discount code used in the order
     */
    discount_code_code?: string | null;

    /**
     * Discount code discount amount
     */
    discount_code_discount?: string;

    /**
     * Discount code ID
     */
    discount_code_id?: number | null;

    /**
     * Discount rate applied to the order
     */
    discount_rate?: string;

    draft_time?: string | null;

    /**
     * Name of the dropshipper
     */
    dropshipper_name?: string | null;

    /**
     * Phone number of the dropshipper
     */
    dropshipper_phone?: string | null;

    /**
     * E-payment provider
     */
    epayment_provider?: string | null;

    /**
     * External ID of the order
     */
    external_id?: string;

    /**
     * Facebook pixel IDs associated with the order
     */
    fb_pixel_ids?: Array<string>;

    /**
     * Final variants of the order after bundle options
     */
    final_variants?: { [key: string]: unknown } | null;

    financial_entity?: Data.FinancialEntity;

    /**
     * Type of follow-up chat for the order
     */
    follow_up_chat_type?: string | null;

    follow_up_chats?: Array<Data.FollowUpChat>;

    /**
     * Gross revenue of the order
     */
    gross_revenue?: string;

    /**
     * Gross revenue for dropshipper after discounts
     */
    gross_revenue_for_dropshipper?: string;

    handler?: Data.Handler;

    /**
     * Handler phone number
     */
    handler_phone?: string | null;

    in_process_time?: string | null;

    /**
     * IP address of the customer who placed the order
     */
    ip?: string | null;

    /**
     * Is the order a dropshipping order
     */
    is_dropshipping?: boolean;

    /**
     * Is from form submission
     */
    is_from_form?: boolean;

    /**
     * Is probably spam
     */
    is_probably_spam?: boolean;

    /**
     * Is this order a Facebook purchase
     */
    is_purchase_fb?: boolean;

    /**
     * Is this order a Kwai purchase
     */
    is_purchase_kwai?: boolean;

    /**
     * Is this order a TikTok purchase
     */
    is_purchase_tiktok?: boolean;

    /**
     * Is repeat order
     */
    is_repeat?: boolean;

    /**
     * Kwai pixel IDs associated with the order
     */
    kwai_pixel_ids?: Array<string>;

    /**
     * Last updated timestamp of the order
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Who marked as spam
     */
    mark_as_spam_by?: string;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;

    /**
     * Metadata associated with the order
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Minimum payment fee applied to the order
     */
    min_payment_fee?: string;

    /**
     * Net payment revenue after fees
     */
    net_payment_revenue?: string;

    /**
     * Net revenue after all discounts and fees
     */
    net_revenue?: string;

    /**
     * Notes or comments for the order
     */
    notes?: string | null;

    /**
     * Order emails associated with the order
     */
    order_emails?: Array<Data.OrderEmail>;

    /**
     * Order ID in string format
     */
    order_id?: string;

    orderlines?: Array<Data.Orderline>;

    origin_address?: Data.OriginAddress;

    /**
     * Other income amount
     */
    other_income?: string;

    /**
     * Other income amount minus tax
     */
    other_income_bt?: string;

    /**
     * Name of other income source
     */
    other_income_name?: string | null;

    page?: Data.Page;

    paid_time?: string | null;

    /**
     * Payment account holder name
     */
    payment_account_holder?: string | null;

    /**
     * Payment account ID
     */
    payment_account_id?: number | null;

    /**
     * Payment account number
     */
    payment_account_number?: string | null;

    /**
     * Payment fee for the order
     */
    payment_fee?: string;

    /**
     * Payment fee rate applied to the order
     */
    payment_fee_rate?: string;

    /**
     * Order payment method
     */
    payment_method?:
      | 'gopay'
      | 'va'
      | 'qris'
      | 'card'
      | 'invoice'
      | 'alfamart'
      | 'ovo'
      | 'dana'
      | 'shopeepay'
      | 'linkaja'
      | 'no_payment'
      | 'bank_transfer'
      | 'marketplace'
      | 'cod';

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    payment_status_history?: Array<Data.PaymentStatusHistory>;

    pending_time?: string | null;

    /**
     * Payment gateway paid info
     */
    pg_paid_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway payment info
     */
    pg_payment_info?: { [key: string]: unknown } | null;

    /**
     * Payment gateway reference ID
     */
    pg_reference_id?: string | null;

    /**
     * Platform of the order
     */
    platform?: string;

    /**
     * Total product discount applied
     */
    product_discount?: string;

    /**
     * Total product discount applied minus tax
     */
    product_discount_bt?: string;

    /**
     * Total product price before discounts
     */
    product_price?: string;

    /**
     * Total product price before discounts minus tax
     */
    product_price_bt?: string;

    /**
     * Total weight of products in the order
     */
    product_weight?: string;

    ready_time?: string | null;

    rts_time?: string | null;

    /**
     * RTS proof URL for the order
     */
    rtsproof_url?: string | null;

    /**
     * Scalev fee for the order
     */
    scalev_fee?: string;

    /**
     * Secret slug of the order
     */
    secret_slug?: string;

    /**
     * Shipment provider code
     */
    shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

    /**
     * Shipment receipt URL for the order
     */
    shipment_receipt?: string | null;

    /**
     * Current shipment status of the order
     */
    shipment_status?: string | null;

    shipment_status_history?: Array<Data.ShipmentStatusHistory>;

    shipped_time?: string | null;

    /**
     * Shipping cost for the order
     */
    shipping_cost?: string;

    /**
     * Shipping discount applied to the order
     */
    shipping_discount?: string;

    /**
     * Shipping fee charged for the order
     */
    shipping_fee?: string;

    /**
     * Shipping fee discount applied to the order
     */
    shipping_fee_discount?: string;

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';

    status_history?: Array<Data.StatusHistory>;

    store?: Data.Store;

    /**
     * Xendit VA bank code
     */
    sub_payment_method?:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';

    /**
     * Tags associated with the order
     */
    tags?: Array<string>;

    /**
     * Tax rate applied to the order
     */
    tax_rate?: number | null;

    /**
     * TikTok pixel IDs associated with the order
     */
    tiktok_pixel_ids?: Array<string>;

    /**
     * Total quantity of items in the order
     */
    total_quantity?: number;

    /**
     * Total weight of the order including weight bump
     */
    total_weight?: string;

    transfer_time?: string | null;

    /**
     * Transfer proof URL
     */
    transferproof_url?: string | null;

    /**
     * Unique code discount applied to the order
     */
    unique_code_discount?: string;

    unpaid_time?: string | null;

    /**
     * UTM source of the order
     */
    utm_source?: string | null;

    /**
     * Variants of the order
     */
    variants?: { [key: string]: unknown } | null;

    warehouse?: Data.Warehouse;

    /**
     * Weight bump added to the order
     */
    weight_bump?: string;
  }

  export namespace Data {
    export interface Advertiser {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface AnalyticsPurchase {
      /**
       * Analytics Purchase ID
       */
      id?: number;

      /**
       * Timestamp when the analytics purchase was created
       */
      inserted_at?: string;

      /**
       * Order ID associated with the analytics purchase
       */
      order_id?: number;

      /**
       * Payload data of the analytics purchase
       */
      payload?: { [key: string]: unknown };

      /**
       * Pixel ID associated with the purchase
       */
      pixel_id?: string;

      /**
       * Platform of the analytics purchase
       */
      platform?: string;

      /**
       * Response data from the analytics purchase
       */
      response?: { [key: string]: unknown };

      /**
       * Timestamp when the analytics purchase was last updated
       */
      updated_at?: string;
    }

    export interface Business {
      /**
       * Business ID
       */
      id?: number;

      /**
       * Name of the account holder
       */
      account_holder?: string;

      /**
       * Email address of the business
       */
      email?: string;

      /**
       * Is the business banned?
       */
      is_banned?: boolean;

      /**
       * URL to the business logo
       */
      logo?: string;

      /**
       * Unique identifier for the business
       */
      unique_id?: string;

      /**
       * Username of the business
       */
      username?: string;
    }

    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      /**
       * Code for CO courier service
       */
      code_co?: string;

      /**
       * Code for KA courier service
       */
      code_ka?: string;

      /**
       * Code for Lincah courier service
       */
      code_lincah?: string;

      /**
       * Code for Mengantar courier service
       */
      code_mengantar?: string;

      /**
       * Code for RO courier service
       */
      code_ro?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Courier code in Georgian
         */
        code_ka?: string;

        /**
         * Courier code in Lincah
         */
        code_lincah?: string;

        /**
         * Courier code for Mengantar
         */
        code_mengantar?: string;

        /**
         * Courier code in Romanian
         */
        code_ro?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'delivery' | 'pickup';

        /**
         * Is this a pickup courier?
         */
        is_pickup?: boolean;

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Customer {
      /**
       * Customer ID
       */
      id?: number;

      /**
       * Confirmation timestamp
       */
      confirmed_at?: string;

      /**
       * Creation timestamp
       */
      created_at?: string;

      /**
       * Customer email
       */
      email?: string;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      /**
       * Customer name
       */
      name?: string;

      /**
       * Customer phone number
       */
      phone?: string;

      /**
       * Customer status
       */
      status?: string;
    }

    export interface DestinationAddress {
      /**
       * Order Address ID
       */
      id?: number;

      /**
       * Full address
       */
      address?: string;

      /**
       * City of the address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Name of the recipient
       */
      name?: string;

      /**
       * Phone number of the recipient
       */
      phone?: string;

      /**
       * Postal code of the address
       */
      postal_code?: string;

      /**
       * Province of the address
       */
      province?: string;

      /**
       * Subdistrict of the address
       */
      subdistrict?: string;
    }

    export interface FinancialEntity {
      /**
       * Financial Entity ID
       */
      id?: number;

      /**
       * Code of the financial entity
       */
      code?: string;

      /**
       * Duitku code for the financial entity
       */
      duitku_code?: string;

      /**
       * Type of the financial entity
       */
      entity_type?: string;

      /**
       * Name of the financial entity
       */
      name?: string;

      /**
       * Platform associated with the financial entity
       */
      platform?: string;

      /**
       * Xendit code for the financial entity
       */
      xendit_code?: string;
    }

    export interface FollowUpChat {
      /**
       * Follow Up Chat ID
       */
      id?: number;

      /**
       * Bundle ID associated with the chat
       */
      bundle_id?: number;

      /**
       * Change status after follow up chat
       */
      change_status?: boolean;

      /**
       * Hours after which the follow up chat is triggered
       */
      hours_after?: number;

      /**
       * Image URL for the follow up chat
       */
      image?: string;

      /**
       * Is this a default follow up chat?
       */
      is_default?: boolean;

      /**
       * Name of the follow up chat
       */
      name?: string;

      /**
       * Product ID associated with the chat
       */
      product_id?: number;

      /**
       * Provider of the follow up chat service
       */
      provider?: string;

      /**
       * Store ID associated with the chat
       */
      store_id?: number;

      /**
       * Trigger condition for the follow up chat
       */
      trigger?: string;
    }

    export interface Handler {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface LastUpdatedBy {
      /**
       * User ID
       */
      id?: number;

      /**
       * Affiliate code of the user
       */
      aff_code?: string;

      /**
       * URL to user avatar
       */
      avatar?: string;

      /**
       * User email
       */
      email?: string;

      /**
       * User full name
       */
      fullname?: string;

      /**
       * User phone number
       */
      phone?: string;
    }

    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }

    export interface OrderEmail {
      /**
       * Order email ID
       */
      id?: number;

      /**
       * Sender email address
       */
      from?: string;

      /**
       * Email creation timestamp
       */
      inserted_at?: string;

      /**
       * Message ID of the email
       */
      message_id?: string;

      /**
       * Associated order primary key
       */
      order_id?: number;

      /**
       * Email status
       */
      status?: string;

      status_history?: Array<OrderEmail.StatusHistory>;

      /**
       * Email subject
       */
      subject?: string;

      /**
       * Recipient email address
       */
      to?: string;

      /**
       * Type of the email
       */
      type?: string;

      /**
       * Last update timestamp of the email
       */
      updated_at?: string;
    }

    export namespace OrderEmail {
      export interface StatusHistory {
        /**
         * Email status
         */
        status?: string;

        /**
         * Timestamp of the status change
         */
        timestamp?: string;
      }
    }

    export interface Orderline {
      /**
       * Order Line ID
       */
      id?: number;

      /**
       * Cost of Goods Sold for this order line
       */
      cogs?: number;

      /**
       * COGS for this order line minus tax
       */
      cogs_bt?: number;

      /**
       * Discount amount applied
       */
      discount?: number;

      /**
       * Discount amount minus tax
       */
      discount_bt?: number;

      /**
       * Discount from a discount code
       */
      discount_code_discount?: number;

      /**
       * Discount from a discount code minus tax
       */
      discount_code_discount_bt?: number;

      /**
       * Discount rate applied to this order line
       */
      discount_rate?: number;

      /**
       * Timestamp when the order line was created
       */
      inserted_at?: string;

      /**
       * Is this order line related to inventory?
       */
      is_inventory?: boolean;

      /**
       * Type of the item
       */
      item_type?: string;

      /**
       * Business ID of the product
       */
      product_business?: number;

      /**
       * Name of the product
       */
      product_name?: string;

      /**
       * Price of the product before discounts
       */
      product_price?: number;

      /**
       * Price of the product before discounts minus tax
       */
      product_price_bt?: number;

      /**
       * Quantity of the item
       */
      quantity?: number;

      /**
       * Reseller price of the product
       */
      reseller_product_price?: number;

      /**
       * Reseller price of the product minus tax
       */
      reseller_product_price_bt?: number;

      /**
       * Tax rate applied to this order line
       */
      tax_rate?: number;

      /**
       * Variant ID
       */
      variant?: number;

      /**
       * COGS of the variant
       */
      variant_cogs?: number;

      /**
       * COGS of the varian minus tax
       */
      variant_cogs_bt?: number;

      /**
       * Value of option 1 for the variant
       */
      variant_option1_value?: string;

      /**
       * Value of option 2 for the variant
       */
      variant_option2_value?: string;

      /**
       * Value of option 3 for the variant
       */
      variant_option3_value?: string;

      /**
       * Price of the variant
       */
      variant_price?: number;

      /**
       * Price of the variant minus tax
       */
      variant_price_bt?: number;

      /**
       * Reseller price of the variant
       */
      variant_reseller_price?: number;

      /**
       * Reseller price of the variant minus tax
       */
      variant_reseller_price_bt?: number;

      /**
       * SKU of the variant
       */
      variant_sku?: string;

      /**
       * Weight of the product
       */
      weight?: number;
    }

    export interface OriginAddress {
      /**
       * Warehouse Address ID
       */
      id?: number;

      /**
       * Full address of the warehouse
       */
      address?: string;

      /**
       * City of the warehouse address
       */
      city?: string;

      /**
       * Location ID for the address
       */
      location?: number;

      /**
       * Location ID for the address
       */
      location_id?: number;

      /**
       * Postal code of the warehouse address
       */
      postal_code?: string;

      /**
       * Province of the warehouse address
       */
      province?: string;

      /**
       * Subdistrict of the warehouse address
       */
      subdistrict?: string;

      /**
       * ID of the associated warehouse
       */
      warehouse?: number;
    }

    export interface Page {
      /**
       * Page ID
       */
      id?: number;

      /**
       * Is the page published?
       */
      is_published?: boolean;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Publication date of the page
       */
      published_at?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * ID of the store the page belongs to
       */
      store_id?: number;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export interface PaymentStatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface ShipmentStatusHistory {
      /**
       * Description of the status update
       */
      description?: string;

      /**
       * Current status of the shipment
       */
      status?: string;

      /**
       * Timestamp of the status update
       */
      timestamp?: string;

      /**
       * Source of the timestamp
       */
      timestamp_source?: string;
    }

    export interface StatusHistory {
      /**
       * Who changed the status
       */
      by?: string | null;

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';

      time?: string;
    }

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Days until auto-expire
       */
      auto_expire_days?: number;

      /**
       * Is auto other income enabled?
       */
      auto_other_income?: boolean;

      business?: Store.Business;

      /**
       * Type of CAPI purchase value
       */
      capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Default amount for dynamic COD income
       */
      dynamic_other_income_cod_default_amount?: number;

      /**
       * Default percentage for dynamic COD income
       */
      dynamic_other_income_cod_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_cod_type?: 'fixed' | 'percentage';

      /**
       * Default amount for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_amount?: number;

      /**
       * Default percentage for dynamic e-payment income
       */
      dynamic_other_income_epayment_default_percentage?: number;

      /**
       * Type of amount (fixed or percentage)
       */
      dynamic_other_income_epayment_type?: 'fixed' | 'percentage';

      /**
       * Is fixed auto other income enabled?
       */
      fixed_auto_other_income?: boolean;

      /**
       * Is the store active?
       */
      is_active?: boolean;

      /**
       * Is auto-expire enabled?
       */
      is_auto_expire?: boolean;

      /**
       * Is discount editable?
       */
      is_discount_editable?: boolean;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is postal code required for orders?
       */
      is_postal_code?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Is WABA integration enabled?
       */
      is_use_waba?: boolean;

      /**
       * Maximum amount for unique code orders
       */
      max_unique_code_amount?: number;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Non-COD purchase triggers
       */
      non_cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Name of the other income
       */
      other_income_name?: string;

      /**
       * Postal code requirement options
       */
      postal_code_requirement?: 'autofill' | 'manual';

      /**
       * Other incomes for store couriers
       */
      store_courier_other_incomes?: Array<Store.StoreCourierOtherIncome>;

      /**
       * Other incomes for store methods
       */
      store_method_other_incomes?: Array<Store.StoreMethodOtherIncome>;

      /**
       * Xendit VA bank codes
       */
      sub_payment_methods?: Array<
        | 'BCA'
        | 'BNI'
        | 'BRI'
        | 'MANDIRI'
        | 'PERMATA'
        | 'BSI'
        | 'BJB'
        | 'CIMB'
        | 'SAHABAT_SAMPOERNA'
        | 'ARTAJASA'
      >;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;
    }

    export namespace Store {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }

      /**
       * Store Courier Other Income Schema
       */
      export interface StoreCourierOtherIncome {
        /**
         * Courier ID
         */
        courier_id: number;

        /**
         * Type of other income
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;
      }

      /**
       * Store Payment Method Other Income Schema
       */
      export interface StoreMethodOtherIncome {
        /**
         * Payment Method
         */
        payment_method: string;

        /**
         * Type of amount (fixed or percentage)
         */
        type: 'fixed' | 'percentage';

        /**
         * Amount of other income
         */
        amount?: number;

        /**
         * Percentage of other income
         */
        percentage?: number;

        /**
         * Sub Payment Method
         */
        sub_payment_method?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Contact name at the warehouse
       */
      contact_name?: string;

      /**
       * Contact phone number at the warehouse
       */
      contact_phone?: string;

      /**
       * Name of the warehouse
       */
      name?: string;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Name of the account holder
         */
        account_holder?: string;

        /**
         * Email address of the business
         */
        email?: string;

        /**
         * Is the business banned?
         */
        is_banned?: boolean;

        /**
         * URL to the business logo
         */
        logo?: string;

        /**
         * Unique identifier for the business
         */
        unique_id?: string;

        /**
         * Username of the business
         */
        username?: string;
      }
    }
  }
}

export interface OrderUploadResponse {
  code?: number;

  data?: OrderUploadResponse.Data;

  status?: string;
}

export namespace OrderUploadResponse {
  export interface Data {
    failed?: Data.Failed;

    success?: Array<Data.Success>;
  }

  export namespace Data {
    export interface Failed {
      /**
       * Error for the order with this ID
       */
      ID_OF_ORDER?: string;
    }

    export interface Success {
      /**
       * Order primary key
       */
      id?: number;

      /**
       * External ID of the order
       */
      external_id?: string | null;

      /**
       * Order ID in string format
       */
      order_id?: string;

      /**
       * Order payment status
       */
      payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

      /**
       * Order status
       */
      status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }
  }
}

export interface OrderUploadChangeStatusResponse {
  code?: number;

  data?: Array<OrderUploadChangeStatusResponse.Data>;

  status?: string;
}

export namespace OrderUploadChangeStatusResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Order ID in string format
     */
    order_id?: string;

    /**
     * Order payment status
     */
    payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

    /**
     * Order status
     */
    status?:
      | 'draft'
      | 'pending'
      | 'confirmed'
      | 'in_process'
      | 'ready'
      | 'shipped'
      | 'completed'
      | 'canceled'
      | 'rts'
      | 'closed';
  }
}

export interface OrderUploadReceiptResponse {
  code?: number;

  data?: Array<OrderUploadReceiptResponse.Data>;

  status?: string;
}

export namespace OrderUploadReceiptResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Order ID in string format
     */
    order_id?: string;

    /**
     * Shipment receipt URL
     */
    shipment_receipt?: string | null;
  }
}

export interface OrderCreateParams {
  /**
   * Customer name
   */
  customer_name: string;

  /**
   * Store unique ID
   */
  store_unique_id: string;

  /**
   * Recipient address
   */
  address?: string;

  /**
   * Channel unique ID
   */
  channel_unique_id?: string;

  /**
   * Courier service ID
   */
  courier_service_id?: number;

  /**
   * Customer email
   */
  customer_email?: string;

  /**
   * Customer phone number
   */
  customer_phone?: string;

  /**
   * Dropshipper name
   */
  dropshipper_name?: string;

  /**
   * Dropshipper phone
   */
  dropshipper_phone?: string;

  /**
   * Financial entity ID
   */
  financial_entity_id?: number;

  /**
   * Is dropshipping order
   */
  is_dropshipping?: boolean;

  /**
   * Is the order probably spam
   */
  is_probably_spam?: boolean;

  /**
   * Location ID
   */
  location_id?: number;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * Order notes
   */
  notes?: string;

  /**
   * Order bundles
   */
  orderbundles?: Array<OrderCreateParams.Orderbundle>;

  /**
   * Order variants
   */
  ordervariants?: Array<OrderCreateParams.Ordervariant>;

  /**
   * Other income amount
   */
  other_income?: number;

  /**
   * Other income name
   */
  other_income_name?: string;

  /**
   * Page unique ID
   */
  page_unique_id?: string;

  /**
   * Payment account holder name
   */
  payment_account_holder?: string;

  /**
   * Payment account number
   */
  payment_account_number?: string;

  /**
   * Payment account unique ID
   */
  payment_account_unique_id?: string;

  /**
   * Order payment method
   */
  payment_method?:
    | 'gopay'
    | 'va'
    | 'qris'
    | 'card'
    | 'invoice'
    | 'alfamart'
    | 'ovo'
    | 'dana'
    | 'shopeepay'
    | 'linkaja'
    | 'no_payment'
    | 'bank_transfer'
    | 'marketplace'
    | 'cod';

  /**
   * Postal code
   */
  postal_code?: string;

  /**
   * Product discount amount
   */
  product_discount?: number;

  /**
   * Shipment provider code
   */
  shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

  /**
   * Shipping cost
   */
  shipping_cost?: number;

  /**
   * Shipping discount amount
   */
  shipping_discount?: number;

  /**
   * Xendit VA bank code
   */
  sub_payment_method?:
    | 'BCA'
    | 'BNI'
    | 'BRI'
    | 'MANDIRI'
    | 'PERMATA'
    | 'BSI'
    | 'BJB'
    | 'CIMB'
    | 'SAHABAT_SAMPOERNA'
    | 'ARTAJASA';

  /**
   * Transfer proof URL
   */
  transferproof_url?: string;

  /**
   * Warehouse unique ID
   */
  warehouse_unique_id?: string;
}

export namespace OrderCreateParams {
  export interface Orderbundle {
    /**
     * Bundle price option unique ID
     */
    bundle_price_option_unique_id: string;

    /**
     * Quantity
     */
    quantity: number;
  }

  export interface Ordervariant {
    /**
     * Quantity
     */
    quantity: number;

    /**
     * Variant unique ID
     */
    variant_unique_id: string;
  }
}

export interface OrderUpdateParams {
  /**
   * Recipient address
   */
  address?: string;

  /**
   * Channel unique ID
   */
  channel_unique_id?: string;

  /**
   * Courier service ID
   */
  courier_service_id?: number;

  /**
   * Customer email
   */
  customer_email?: string;

  /**
   * Customer name
   */
  customer_name?: string;

  /**
   * Customer phone number
   */
  customer_phone?: string;

  /**
   * Dropshipper name
   */
  dropshipper_name?: string;

  /**
   * Dropshipper phone
   */
  dropshipper_phone?: string;

  /**
   * Financial entity ID
   */
  financial_entity_id?: number;

  /**
   * Is dropshipping order
   */
  is_dropshipping?: boolean;

  /**
   * Location ID
   */
  location_id?: number;

  /**
   * Order notes
   */
  notes?: string;

  /**
   * Order bundles
   */
  orderbundles?: Array<OrderUpdateParams.Orderbundle>;

  /**
   * Order variants
   */
  ordervariants?: Array<OrderUpdateParams.Ordervariant>;

  /**
   * Other income amount
   */
  other_income?: number;

  /**
   * Other income name
   */
  other_income_name?: string;

  /**
   * Page unique ID
   */
  page_unique_id?: string;

  /**
   * Payment account holder name
   */
  payment_account_holder?: string;

  /**
   * Payment account number
   */
  payment_account_number?: string;

  /**
   * Payment account unique ID
   */
  payment_account_unique_id?: string;

  /**
   * Order payment method
   */
  payment_method?:
    | 'gopay'
    | 'va'
    | 'qris'
    | 'card'
    | 'invoice'
    | 'alfamart'
    | 'ovo'
    | 'dana'
    | 'shopeepay'
    | 'linkaja'
    | 'no_payment'
    | 'bank_transfer'
    | 'marketplace'
    | 'cod';

  /**
   * Postal code
   */
  postal_code?: string;

  /**
   * Product discount amount
   */
  product_discount?: number;

  /**
   * Shipment provider code
   */
  shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

  /**
   * Shipping cost
   */
  shipping_cost?: number;

  /**
   * Shipping discount amount
   */
  shipping_discount?: number;

  /**
   * Xendit VA bank code
   */
  sub_payment_method?:
    | 'BCA'
    | 'BNI'
    | 'BRI'
    | 'MANDIRI'
    | 'PERMATA'
    | 'BSI'
    | 'BJB'
    | 'CIMB'
    | 'SAHABAT_SAMPOERNA'
    | 'ARTAJASA';

  /**
   * Transfer proof URL
   */
  transferproof_url?: string;

  /**
   * Warehouse unique ID
   */
  warehouse_unique_id?: string;
}

export namespace OrderUpdateParams {
  export interface Orderbundle {
    /**
     * Bundle price option unique ID
     */
    bundle_price_option_unique_id: string;

    /**
     * Quantity
     */
    quantity: number;
  }

  export interface Ordervariant {
    /**
     * Quantity
     */
    quantity: number;

    /**
     * Variant unique ID
     */
    variant_unique_id: string;
  }
}

export interface OrderListParams extends CursorPaginationParams {
  /**
   * Filter orders by advertiser ID
   */
  advertiser_id?: string;

  /**
   * Filter orders by AWB status
   */
  awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

  /**
   * Filter orders by business ID
   */
  business_id?: string;

  /**
   * Filter by business role
   */
  business_role?: 'retailer' | 'fulfillment_provider';

  /**
   * Comma-separated list of columns to include. Available columns: secret_slug,
   * final_variants, store, origin_address, address_location, handler_phone,
   * order_id, destination_address, quantity, product_price, total_weight,
   * courier_service, shipping_cost, payment_method, gross_revenue, shipment_receipt,
   * courier_additional_info, payment_status, status, customer, draft_time,
   * orderlines, is_dropshipping, dropshipper_name, dropshipper_phone,
   * unique_code_discount, tags, awb_status, awb_ca_status, follow_up_chats,
   * follow_up_chat_type, message_history, metadata, notes, courier_aggregator_code,
   * shipment_account, payment_account, financial_entity, payment_account_holder,
   * payment_account_number, transferproof_url, transfer_time, product_discount,
   * shipping_discount, other_income, other_income_name, shipment_status, is_repeat,
   * platform, external_id, is_purchase_fb, is_purchase_tiktok, is_purchase_kwai,
   * fb_pixel_ids, tiktok_pixel_ids, kwai_pixel_ids, pending_time, confirmed_time,
   * shipped_time, completed_time, rts_time, canceled_time, closed_time, warehouse,
   * page, channel_name, handler, advertiser, pg_payment_info, sub_payment_method,
   * epayment_provider, invoice_url, pg_reference_id, net_revenue, payment_fee,
   * scalev_fee, net_payment_revenue, discount_code_discount, discount_code_code,
   * discount_code_applied_to, utm_source
   */
  columns?: string;

  /**
   * Filter orders by completed time since (ISO 8601 format)
   */
  completed_time_since?: string;

  /**
   * Filter orders by completed time until (ISO 8601 format)
   */
  completed_time_until?: string;

  /**
   * Filter orders by confirmed time since (ISO 8601 format)
   */
  confirmed_time_since?: string;

  /**
   * Filter orders by confirmed time until (ISO 8601 format)
   */
  confirmed_time_until?: string;

  /**
   * Filter orders by courier ID
   */
  courier_id?: string;

  /**
   * Filter orders by draft time until (ISO 8601 format)
   */
  draft_time_until?: string;

  /**
   * Filter orders by external ID
   */
  external_id?: string;

  /**
   * Filter orders by financial entity ID
   */
  financial_entity_id?: string;

  /**
   * Filter orders by handler ID
   */
  handler_id?: string;

  /**
   * Filter orders created from a form
   */
  is_from_form?: 'true' | 'false';

  /**
   * Filter spam orders
   */
  is_probably_spam?: 'true' | 'false';

  /**
   * Filter repeat orders
   */
  is_repeat?: 'true' | 'false';

  /**
   * Filter orders with transfer proof
   */
  is_transferproof_exist?: 'true' | 'false';

  /**
   * Filter orders by specific order ID
   */
  order_id?: string;

  /**
   * Filter orders by page ID
   */
  page_id?: string;

  /**
   * Filter orders by payment method
   */
  payment_method?:
    | 'no_payment'
    | 'bank_transfer'
    | 'marketplace'
    | 'va'
    | 'qris'
    | 'ewallet'
    | 'cod'
    | 'card'
    | 'gopay'
    | 'invoice'
    | 'alfamart'
    | 'ovo'
    | 'dana'
    | 'shopeepay'
    | 'linkaja';

  /**
   * Filter orders by payment status
   */
  payment_status?: 'paid' | 'unpaid' | 'conflict' | 'settled';

  /**
   * Filter orders by platform
   */
  platform?:
    | 'scalev'
    | 'tiktokshop'
    | 'tokopedia'
    | 'shopee'
    | 'lazada'
    | 'blibli'
    | 'bukalapak'
    | 'orderonline'
    | 'berdu';

  /**
   * Filter orders containing a specific product ID
   */
  product_id?: string;

  /**
   * Search term to filter orders by order ID, customer name, email, or phone number
   */
  search?: string;

  /**
   * Filter orders by shipment status
   */
  shipment_status?: string;

  /**
   * Filter orders by shipped time since (ISO 8601 format)
   */
  shipped_time_since?: string;

  /**
   * Filter orders by shipped time until (ISO 8601 format)
   */
  shipped_time_until?: string;

  /**
   * Filter orders by status
   */
  status?:
    | 'draft'
    | 'pending'
    | 'confirmed'
    | 'in_process'
    | 'ready'
    | 'canceled'
    | 'shipped'
    | 'shipped_rts'
    | 'completed'
    | 'rts'
    | 'closed';

  /**
   * Filter orders by store ID
   */
  store_id?: string;

  /**
   * Comma-separated list of tags to filter orders
   */
  tags?: string;

  /**
   * Filter orders by UTM source
   */
  utm_source?: string;

  /**
   * Filter orders by warehouse ID
   */
  warehouse_id?: string;
}

export interface OrderDeleteParams {
  ids: Array<number>;
}

export interface OrderCancelAwbParams {
  /**
   * Order primary keys to cancel AWB
   */
  ids: Array<number>;
}

export interface OrderChangeStatusParams {
  /**
   * Entity or user performing the status change
   */
  by?: string | null;

  /**
   * Financial entity ID
   */
  financial_entity_id?: number | null;

  ids?: Array<number>;

  /**
   * Payment account holder name
   */
  payment_account_holder?: string | null;

  /**
   * Payment account number
   */
  payment_account_number?: string | null;

  /**
   * Order payment method
   */
  payment_method?:
    | 'gopay'
    | 'va'
    | 'qris'
    | 'card'
    | 'invoice'
    | 'alfamart'
    | 'ovo'
    | 'dana'
    | 'shopeepay'
    | 'linkaja'
    | 'no_payment'
    | 'bank_transfer'
    | 'marketplace'
    | 'cod';

  /**
   * Order payment status
   */
  payment_status?: 'unpaid' | 'paid' | 'conflict' | 'settled';

  /**
   * Return to sender proof image URL
   */
  rtsproof_url?: string | null;

  /**
   * Order status
   */
  status?:
    | 'draft'
    | 'pending'
    | 'confirmed'
    | 'in_process'
    | 'ready'
    | 'shipped'
    | 'completed'
    | 'canceled'
    | 'rts'
    | 'closed';

  /**
   * Transfer timestamp (ISO 8601 format)
   */
  transfer_time?: string | null;

  /**
   * Transfer proof image URL
   */
  transferproof_url?: string | null;
}

export interface OrderCreateShipmentStatusHistoryParams {
  /**
   * Description of the shipment status change
   */
  description: string;

  /**
   * Order status
   */
  status:
    | 'draft'
    | 'pending'
    | 'confirmed'
    | 'in_process'
    | 'ready'
    | 'shipped'
    | 'completed'
    | 'canceled'
    | 'rts'
    | 'closed';

  /**
   * Timestamp of the shipment status change (ISO 8601 format)
   */
  timestamp: string;
}

export interface OrderDuplicateParams {
  /**
   * Financial entity ID
   */
  financial_entity_id?: number;

  /**
   * Metadata to be copied to the new order
   */
  metadata?: { [key: string]: unknown };

  /**
   * Payment account holder name
   */
  payment_account_holder?: string;

  /**
   * Payment account number
   */
  payment_account_number?: string;

  /**
   * Order payment method
   */
  payment_method?:
    | 'gopay'
    | 'va'
    | 'qris'
    | 'card'
    | 'invoice'
    | 'alfamart'
    | 'ovo'
    | 'dana'
    | 'shopeepay'
    | 'linkaja'
    | 'no_payment'
    | 'bank_transfer'
    | 'marketplace'
    | 'cod';

  /**
   * Xendit VA bank code
   */
  sub_payment_method?:
    | 'BCA'
    | 'BNI'
    | 'BRI'
    | 'MANDIRI'
    | 'PERMATA'
    | 'BSI'
    | 'BJB'
    | 'CIMB'
    | 'SAHABAT_SAMPOERNA'
    | 'ARTAJASA';
}

export interface OrderGenerateAwbParams {
  /**
   * Order primary keys to generate AWB
   */
  ids: Array<number>;
}

export interface OrderGetChatParams {
  /**
   * Order primary key
   */
  id: number;
}

export interface OrderListTagsParams {
  /**
   * Search term to filter tags by name
   */
  search?: string;
}

export interface OrderMarkNotSpamParams {
  ids: Array<number>;
}

export interface OrderRetrieveByPgReferenceIDsParams {
  /**
   * Comma-separated payment gateway reference IDs
   */
  pg_reference_ids: string;
}

export interface OrderStatisticsParams {
  /**
   * Date breakdown for statistics (defaults to 'off')
   */
  breakdown_date?: 'off' | 'day' | 'week' | 'month';

  /**
   * Filter by business ID
   */
  business_id?: string;

  /**
   * Custom breakdown key for statistics (defaults to 'off')
   */
  custom_breakdown_key?: 'off' | 'handler_id' | 'advertiser_id' | 'page_id' | 'city' | 'province';

  /**
   * Type of datetime for statistics (defaults to 'created_at')
   */
  datetime_type?:
    | 'draft_time'
    | 'pending_time'
    | 'confirmed_time'
    | 'in_process_time'
    | 'ready_time'
    | 'canceled_time'
    | 'shipped_time'
    | 'shipped_rts_time'
    | 'completed_time'
    | 'rts_time'
    | 'closed_time';

  /**
   * Include breakdown by order status (defaults to 'false')
   */
  is_breakdown_status?: 'true' | 'false';

  /**
   * Minimum number of days for statistics (defaults to 0)
   */
  minimum_days?: number;

  /**
   * Filter by payment status
   */
  payment_status?: string;

  /**
   * Filter by shipped time since (ISO 8601 format)
   */
  shipped_time_since?: string;

  /**
   * Filter by shipped time until (ISO 8601 format)
   */
  shipped_time_until?: string;

  /**
   * Filter by order status
   */
  status?: string;

  /**
   * Filter by store ID
   */
  store_id?: string;

  /**
   * Timezone for datetime adjustment (defaults to 'Asia/Jakarta')
   */
  tz?: string;
}

export interface OrderUpdateCustomerParams {
  /**
   * Customer ID
   */
  customer_id: number;
}

export interface OrderUpdateShipmentParams {
  /**
   * Order AWB courier aggregator status
   */
  awb_ca_status?: 'unavailable' | 'pending' | 'waiting' | 'failed' | 'created' | 'canceled';

  /**
   * Additional courier information
   */
  courier_additional_info?: string | null;

  /**
   * Is the shipment completed
   */
  is_shipment_completed?: boolean;

  /**
   * Shipment provider code
   */
  shipment_provider_code?: 'mengantar' | 'lincah' | 'ninja' | null;

  /**
   * Shipment receipt / tracking ID
   */
  shipment_receipt?: string | null;
}

export interface OrderUpdateShipmentReceiptParams {
  shipment_receipt: string;
}

export interface OrderUpdateTagsParams {
  tags: Array<string>;
}

export interface OrderUploadParams {
  /**
   * Choose 'archive' for Archive mode, 'regular' for Regular mode
   */
  create_type: 'archive' | 'regular';

  file: Uploadable;

  /**
   * Timezone in IANA format, e.g., 'Asia/Jakarta'
   */
  tz: string;
}

export interface OrderUploadChangeStatusParams {
  file: Uploadable;

  /**
   * Timezone in IANA format, e.g., 'Asia/Jakarta'
   */
  tz: string;
}

export interface OrderUploadReceiptParams {
  file: Uploadable;
}

Order.MessageHistory = MessageHistoryAPIMessageHistory;

export declare namespace Order {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderDeleteResponse as OrderDeleteResponse,
    type OrderCancelAwbResponse as OrderCancelAwbResponse,
    type OrderChangeStatusResponse as OrderChangeStatusResponse,
    type OrderCheckPaymentResponse as OrderCheckPaymentResponse,
    type OrderCheckSettlementResponse as OrderCheckSettlementResponse,
    type OrderCreatePaymentResponse as OrderCreatePaymentResponse,
    type OrderCreateShipmentStatusHistoryResponse as OrderCreateShipmentStatusHistoryResponse,
    type OrderDuplicateResponse as OrderDuplicateResponse,
    type OrderGenerateAwbResponse as OrderGenerateAwbResponse,
    type OrderGetActionsResponse as OrderGetActionsResponse,
    type OrderGetChatResponse as OrderGetChatResponse,
    type OrderGetChatsResponse as OrderGetChatsResponse,
    type OrderListEmailsResponse as OrderListEmailsResponse,
    type OrderListTagsResponse as OrderListTagsResponse,
    type OrderMarkNotSpamResponse as OrderMarkNotSpamResponse,
    type OrderRetrieveByPgReferenceIDResponse as OrderRetrieveByPgReferenceIDResponse,
    type OrderRetrieveByPgReferenceIDsResponse as OrderRetrieveByPgReferenceIDsResponse,
    type OrderSendLmsAccessResponse as OrderSendLmsAccessResponse,
    type OrderSendProductDigitalResponse as OrderSendProductDigitalResponse,
    type OrderStatisticsResponse as OrderStatisticsResponse,
    type OrderTriggerPurchaseResponse as OrderTriggerPurchaseResponse,
    type OrderUpdateCustomerResponse as OrderUpdateCustomerResponse,
    type OrderUpdateShipmentResponse as OrderUpdateShipmentResponse,
    type OrderUpdateShipmentReceiptResponse as OrderUpdateShipmentReceiptResponse,
    type OrderUpdateTagsResponse as OrderUpdateTagsResponse,
    type OrderUploadResponse as OrderUploadResponse,
    type OrderUploadChangeStatusResponse as OrderUploadChangeStatusResponse,
    type OrderUploadReceiptResponse as OrderUploadReceiptResponse,
    type OrderListResponsesCursorPagination as OrderListResponsesCursorPagination,
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
    type OrderDeleteParams as OrderDeleteParams,
    type OrderCancelAwbParams as OrderCancelAwbParams,
    type OrderChangeStatusParams as OrderChangeStatusParams,
    type OrderCreateShipmentStatusHistoryParams as OrderCreateShipmentStatusHistoryParams,
    type OrderDuplicateParams as OrderDuplicateParams,
    type OrderGenerateAwbParams as OrderGenerateAwbParams,
    type OrderGetChatParams as OrderGetChatParams,
    type OrderListTagsParams as OrderListTagsParams,
    type OrderMarkNotSpamParams as OrderMarkNotSpamParams,
    type OrderRetrieveByPgReferenceIDsParams as OrderRetrieveByPgReferenceIDsParams,
    type OrderStatisticsParams as OrderStatisticsParams,
    type OrderUpdateCustomerParams as OrderUpdateCustomerParams,
    type OrderUpdateShipmentParams as OrderUpdateShipmentParams,
    type OrderUpdateShipmentReceiptParams as OrderUpdateShipmentReceiptParams,
    type OrderUpdateTagsParams as OrderUpdateTagsParams,
    type OrderUploadParams as OrderUploadParams,
    type OrderUploadChangeStatusParams as OrderUploadChangeStatusParams,
    type OrderUploadReceiptParams as OrderUploadReceiptParams,
  };

  export {
    MessageHistoryAPIMessageHistory as MessageHistory,
    type MessageHistoryAddResponse as MessageHistoryAddResponse,
    type MessageHistoryShowResponse as MessageHistoryShowResponse,
    type MessageHistoryAddParams as MessageHistoryAddParams,
  };
}
