// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BposAPI from './bpos';
import {
  BpoAddParams,
  BpoAddResponse,
  BpoRemoveParams,
  BpoRemoveResponse,
  BpoViewRelationsParams,
  BpoViewRelationsResponse,
  Bpos,
} from './bpos';
import * as BundlesAPI from './bundles';
import {
  BundleListParams,
  BundleListResponse,
  BundleRetrieveParams,
  BundleRetrieveResponse,
  Bundles,
} from './bundles';
import * as CourierServicesAPI from './courier-services';
import {
  CourierServiceAddParams,
  CourierServiceAddResponse,
  CourierServiceRemoveParams,
  CourierServiceRemoveResponse,
  CourierServices,
} from './courier-services';
import * as FollowUpChatsAPI from './follow-up-chats';
import {
  FollowUpChatCreateParams,
  FollowUpChatCreateResponse,
  FollowUpChatDeleteParams,
  FollowUpChatDeleteResponse,
  FollowUpChatListParams,
  FollowUpChatListResponse,
  FollowUpChatRetrieveParams,
  FollowUpChatRetrieveResponse,
  FollowUpChats,
} from './follow-up-chats';
import * as PaymentMethodsAPI from './payment-methods';
import {
  PaymentMethodAddParams,
  PaymentMethodAddResponse,
  PaymentMethodListParams,
  PaymentMethodListResponse,
  PaymentMethodRemoveParams,
  PaymentMethodRemoveResponse,
  PaymentMethods,
} from './payment-methods';
import * as ProductsAPI from './products';
import {
  ProductAddParams,
  ProductAddResponse,
  ProductListParams,
  ProductListResponse,
  ProductRemoveParams,
  ProductRemoveResponse,
  ProductViewRelationsParams,
  ProductViewRelationsResponse,
  Products,
} from './products';
import * as StoreAdminsAPI from './store-admins';
import {
  StoreAdminAddParams,
  StoreAdminAddResponse,
  StoreAdminListParams,
  StoreAdminListResponse,
  StoreAdminRemoveParams,
  StoreAdminRemoveResponse,
  StoreAdmins,
} from './store-admins';
import * as StoreAdvertisersAPI from './store-advertisers';
import {
  StoreAdvertiserAddParams,
  StoreAdvertiserAddResponse,
  StoreAdvertiserListParams,
  StoreAdvertiserListResponse,
  StoreAdvertiserRemoveParams,
  StoreAdvertiserRemoveResponse,
  StoreAdvertisers,
} from './store-advertisers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Stores extends APIResource {
  bpos: BposAPI.Bpos = new BposAPI.Bpos(this._client);
  bundles: BundlesAPI.Bundles = new BundlesAPI.Bundles(this._client);
  courierServices: CourierServicesAPI.CourierServices = new CourierServicesAPI.CourierServices(this._client);
  followUpChats: FollowUpChatsAPI.FollowUpChats = new FollowUpChatsAPI.FollowUpChats(this._client);
  paymentMethods: PaymentMethodsAPI.PaymentMethods = new PaymentMethodsAPI.PaymentMethods(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  storeAdmins: StoreAdminsAPI.StoreAdmins = new StoreAdminsAPI.StoreAdmins(this._client);
  storeAdvertisers: StoreAdvertisersAPI.StoreAdvertisers = new StoreAdvertisersAPI.StoreAdvertisers(
    this._client,
  );

  /**
   * Creates a new store with the provided details.
   *
   * @example
   * ```ts
   * const store = await client.stores.create({ name: 'name' });
   * ```
   */
  create(body: StoreCreateParams, options?: RequestOptions): APIPromise<StoreCreateResponse> {
    return this._client.post('/v2/stores', { body, ...options });
  }

  /**
   * Retrieves detailed information about a specific store identified by its ID.
   *
   * @example
   * ```ts
   * const store = await client.stores.retrieve(1);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<StoreRetrieveResponse> {
    return this._client.get(path`/v2/stores/${id}`, options);
  }

  /**
   * Retrieves a paginated list of stores with optional filtering. The data is sorted
   * by id in descending order and cannot be changed. Uses cursor-based pagination
   * with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * const stores = await client.stores.list();
   * ```
   */
  list(
    query: StoreListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoreListResponse> {
    return this._client.get('/v2/stores', { query, ...options });
  }

  /**
   * Deletes a store and all its associated data.
   *
   * @example
   * ```ts
   * const store = await client.stores.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<StoreDeleteResponse> {
    return this._client.delete(path`/v2/stores/${id}`, options);
  }

  /**
   * Retrieves a list of custom audiences associated with a specific store.
   *
   * @example
   * ```ts
   * const response = await client.stores.listCustomAudiences(1);
   * ```
   */
  listCustomAudiences(
    storeID: number,
    options?: RequestOptions,
  ): APIPromise<StoreListCustomAudiencesResponse> {
    return this._client.get(path`/v2/stores/${storeID}/custom-audiences`, options);
  }

  /**
   * Retrieves a paginated list of pages associated with a specific store. The data
   * is sorted by id in descending order and cannot be changed. Uses cursor-based
   * pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * const response = await client.stores.listPages(1);
   * ```
   */
  listPages(
    storeID: number,
    query: StoreListPagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoreListPagesResponse> {
    return this._client.get(path`/v2/stores/${storeID}/pages`, { query, ...options });
  }

  /**
   * Retrieves a paginated list of payment accounts associated with a specific store.
   * The data is sorted by id in descending order and cannot be changed. Uses
   * cursor-based pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * const response = await client.stores.listPaymentAccounts(1);
   * ```
   */
  listPaymentAccounts(
    storeID: number,
    query: StoreListPaymentAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoreListPaymentAccountsResponse> {
    return this._client.get(path`/v2/stores/${storeID}/payment-accounts`, { query, ...options });
  }

  /**
   * Retrieves a paginated list of sales persons associated with a specific store.
   * The data is sorted by id in descending order and cannot be changed. Uses
   * cursor-based pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * const response = await client.stores.listSalesPeople(1);
   * ```
   */
  listSalesPeople(
    storeID: number,
    query: StoreListSalesPeopleParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoreListSalesPeopleResponse> {
    return this._client.get(path`/v2/stores/${storeID}/sales-people`, { query, ...options });
  }

  /**
   * Retrieves a paginated list of stores with simplified fields and optional
   * filtering. The data is sorted by id in descending order and cannot be changed.
   * Uses cursor-based pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * const response = await client.stores.listSimplified();
   * ```
   */
  listSimplified(
    query: StoreListSimplifiedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoreListSimplifiedResponse> {
    return this._client.get('/v2/stores/simplified', { query, ...options });
  }
}

export interface StoreCreateResponse {
  /**
   * Store ID
   */
  id?: number;

  /**
   * List of advertisers associated with the store
   */
  advertisers?: Array<StoreCreateResponse.Advertiser>;

  /**
   * Days until auto-expire
   */
  auto_expire_days?: number;

  /**
   * Type of auto other income
   */
  auto_other_income?: string;

  /**
   * Blocked message for spam filter
   */
  blocked_message?: string;

  /**
   * List of bundles associated with the store
   */
  bundles?: Array<StoreCreateResponse.Bundle>;

  business?: StoreCreateResponse.Business;

  /**
   * Type of CAPI purchase value
   */
  capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

  /**
   * COD purchase triggers
   */
  cod_purchase_triggers?: Array<'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'>;

  /**
   * List of courier services associated with the store
   */
  courier_services?: Array<StoreCreateResponse.CourierService>;

  /**
   * Creation timestamp
   */
  created_at?: string;

  created_by?: StoreCreateResponse.CreatedBy;

  custom_domain?: StoreCreateResponse.CustomDomain;

  /**
   * Days of payment processing
   */
  days_of_payment_processing?: number;

  /**
   * Digital only complete type
   */
  digital_only_complete_type?: string;

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
   * Email notification statuses
   */
  email_notification_statuses?: Array<string>;

  email_reply_to?: StoreCreateResponse.EmailReplyTo;

  /**
   * Email reply-to assignment type
   */
  email_reply_to_assignment?: 'fixed' | 'rotator';

  /**
   * Fixed auto other income amount
   */
  fixed_auto_other_income?: number;

  /**
   * Greeting message for WhatsApp
   */
  greeting_message?: string;

  /**
   * Inactivity period for WhatsApp
   */
  inactivity_period?: number;

  /**
   * Is the store active?
   */
  is_active?: boolean;

  /**
   * Is advanced validation enabled?
   */
  is_advanced_validation?: boolean;

  /**
   * Is auto-expire enabled?
   */
  is_auto_expire?: boolean;

  /**
   * Is customer OTP required?
   */
  is_customer_otp_required?: boolean;

  /**
   * Is customer spam filter enabled?
   */
  is_customer_spam_filter?: boolean;

  /**
   * Is discount editable?
   */
  is_discount_editable?: boolean;

  /**
   * Is dropshipping allowed in this store?
   */
  is_dropshipping_allowed?: boolean;

  /**
   * Is email notification for new orders enabled?
   */
  is_email_new_order?: boolean;

  /**
   * Is email notifications enabled?
   */
  is_email_notifications?: boolean;

  /**
   * Is follow-up chat for bundles enabled?
   */
  is_fuc_bundle_enabled?: boolean;

  /**
   * Is follow-up chat for products enabled?
   */
  is_fuc_product_enabled?: boolean;

  /**
   * Is greeting message enabled?
   */
  is_greeting_message_enabled?: boolean;

  /**
   * Is IP spam filter enabled?
   */
  is_ip_spam_filter?: boolean;

  /**
   * Is manual shipping cost enabled?
   */
  is_manual_shipping_cost?: boolean;

  /**
   * Is Moota integration enabled for this store?
   */
  is_moota_enabled?: boolean;

  /**
   * Is postal code required for orders?
   */
  is_postal_code?: boolean;

  /**
   * Is show download invoice option enabled?
   */
  is_show_download_invoice?: boolean;

  /**
   * Is Scalev branding shown?
   */
  is_show_scalev_branding?: boolean;

  /**
   * Is show WhatsApp option enabled?
   */
  is_show_whatsapp?: boolean;

  /**
   * Is spam filter with AI enabled?
   */
  is_spam_filter?: boolean;

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
   * Last update timestamp
   */
  last_updated_at?: string;

  last_updated_by?: StoreCreateResponse.LastUpdatedBy;

  /**
   * URL of the store logo
   */
  logo?: string;

  /**
   * Maximum orders per IP address
   */
  max_per_ip?: number;

  /**
   * Maximum orders per phone number
   */
  max_per_phone?: number;

  /**
   * Maximum amount for unique code orders
   */
  max_unique_code_amount?: number;

  /**
   * Minimum address length for validation
   */
  min_address_length?: number;

  /**
   * Minimum name length for validation
   */
  min_name_length?: number;

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
   * List of payment accounts associated with the store
   */
  payment_accounts?: Array<StoreCreateResponse.PaymentAccount>;

  /**
   * Payment methods available in the store
   */
  payment_methods?: Array<
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
    | 'cod'
  >;

  /**
   * Postal code requirement options
   */
  postal_code_requirement?: 'autofill' | 'manual';

  /**
   * List of products associated with the store
   */
  products?: Array<StoreCreateResponse.Product>;

  /**
   * List of store admins
   */
  store_admins?: Array<StoreCreateResponse.StoreAdmin>;

  /**
   * Other incomes for store couriers
   */
  store_courier_other_incomes?: Array<StoreCreateResponse.StoreCourierOtherIncome>;

  /**
   * Other incomes for store methods
   */
  store_method_other_incomes?: Array<StoreCreateResponse.StoreMethodOtherIncome>;

  /**
   * List of store sales persons
   */
  store_sales_person?: Array<StoreCreateResponse.StoreSalesPerson>;

  /**
   * Xendit VA bank codes
   */
  sub_payment_methods?: Array<
    'BCA' | 'BNI' | 'BRI' | 'MANDIRI' | 'PERMATA' | 'BSI' | 'BJB' | 'CIMB' | 'SAHABAT_SAMPOERNA' | 'ARTAJASA'
  >;

  /**
   * Unique identifier for the store
   */
  unique_id?: string;

  /**
   * UUID of the store
   */
  uuid?: string;

  waba_account?: StoreCreateResponse.WabaAccount;

  warehouse?: StoreCreateResponse.Warehouse;
}

export namespace StoreCreateResponse {
  export interface Advertiser {
    /**
     * The business user ID
     */
    id: number;

    /**
     * The business phone number
     */
    business_phone: string;

    role: Advertiser.Role;

    user: Advertiser.User;
  }

  export namespace Advertiser {
    export interface Role {
      /**
       * The role ID
       */
      id: number;

      /**
       * The name of the role
       */
      name: string;
    }

    export interface User {
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
  }

  export interface Bundle {
    /**
     * Bundle ID
     */
    id?: number;

    /**
     * List of Bundle Price Options
     */
    bundle_price_options?: Array<Bundle.BundlePriceOption>;

    /**
     * Custom Identifier
     */
    custom_id?: string;

    /**
     * Display Name
     */
    display?: string;

    /**
     * List of Image URLs
     */
    images?: Array<string>;

    /**
     * Is Bundle Sharing Enabled
     */
    is_bundle_sharing?: boolean;

    /**
     * Name
     */
    name?: string;

    /**
     * Public Name
     */
    public_name?: string;

    /**
     * Weight Bump
     */
    weight_bump?: number;
  }

  export namespace Bundle {
    export interface BundlePriceOption {
      /**
       * Bundle Price Option ID
       */
      id?: number;

      /**
       * Is owned by store
       */
      is_owned_by_store?: boolean;

      /**
       * Name
       */
      name?: string;

      /**
       * Price (including tax)
       */
      price?: number;

      /**
       * Price before tax
       */
      price_bt?: number;

      /**
       * Slug
       */
      slug?: string;

      /**
       * Bundle Price Option Unique ID
       */
      unique_id?: string;
    }
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
     * Category of the courier service
     */
    category?: string;

    /**
     * Code for the courier service
     */
    code?: string;

    courier?: CourierService.Courier;

    /**
     * Description of the courier service
     */
    description?: string;

    /**
     * Is Cash on Delivery available for this courier service
     */
    is_cod?: boolean;

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

  export interface CreatedBy {
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

  export interface CustomDomain {
    /**
     * Custom Domain ID
     */
    id?: number;

    /**
     * Full URL
     */
    full_url?: string;

    /**
     * Is Verified
     */
    is_verified?: boolean;
  }

  export interface EmailReplyTo {
    /**
     * The business user ID
     */
    id: number;

    /**
     * The business phone number
     */
    business_phone: string;

    role: EmailReplyTo.Role;

    user: EmailReplyTo.User;
  }

  export namespace EmailReplyTo {
    export interface Role {
      /**
       * The role ID
       */
      id: number;

      /**
       * The name of the role
       */
      name: string;
    }

    export interface User {
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

  export interface PaymentAccount {
    /**
     * Payment Account ID
     */
    id?: number;

    /**
     * Account Holder Name
     */
    account_holder?: string;

    /**
     * Account Number
     */
    account_number?: string;

    financial_entity?: PaymentAccount.FinancialEntity;

    /**
     * Payment Method
     */
    method?: string;

    /**
     * Unique Identifier
     */
    unique_id?: string;
  }

  export namespace PaymentAccount {
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
  }

  export interface Product {
    /**
     * Product primary key
     */
    id?: number;

    /**
     * Display name of the product
     */
    display?: string;

    /**
     * List of image URLs associated with the product
     */
    images?: Array<string>;

    /**
     * Type of the product item
     */
    item_type?: 'physical' | 'digital' | 'course';

    /**
     * Human-readable name of the product item type
     */
    item_type_name?: string;

    /**
     * List of labels associated with the product
     */
    labels?: Array<Product.Label>;

    /**
     * Product name
     */
    name?: string;

    /**
     * Name of first option value
     */
    option1_name?: string;

    /**
     * Name of 2nd option value
     */
    option2_name?: string;

    /**
     * Name of 3rd option value
     */
    option3_name?: string;

    /**
     * Product Public name
     */
    public_name?: string;

    /**
     * Product UUID
     */
    uuid?: string;

    /**
     * Count of variants associated with the product
     */
    variant_count?: number;

    /**
     * List of variants associated with the product
     */
    variants?: Array<Product.Variant>;
  }

  export namespace Product {
    export interface Label {
      /**
       * Label name
       */
      name?: string;
    }

    export interface Variant {
      /**
       * Variant primary key
       */
      id?: number;

      /**
       * Available quantity of the variant in inventory
       */
      available_qty?: number;

      /**
       * List of image URLs associated with the variant
       */
      images?: Array<string>;

      /**
       * Mark variant as sellable
       */
      is_checked?: boolean;

      /**
       * Indicates if the variant is editable
       */
      is_editable?: boolean;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      /**
       * Additional metadata associated with the variant
       */
      metadata?: { [key: string]: unknown };

      /**
       * Full name of the variant
       */
      name?: string;

      /**
       * Color associated with the first product option
       */
      option1_color?: string;

      /**
       * Icon URL for the first product option
       */
      option1_icon_url?: string;

      /**
       * Value of the first product option
       */
      option1_value?: string;

      /**
       * Color associated with the second product option
       */
      option2_color?: string;

      /**
       * Icon URL for the second product option
       */
      option2_icon_url?: string;

      /**
       * Value of the second product option
       */
      option2_value?: string;

      /**
       * Color associated with the third product option
       */
      option3_color?: string;

      /**
       * Icon URL for the third product option
       */
      option3_icon_url?: string;

      /**
       * Value of the third product option
       */
      option3_value?: string;

      /**
       * Price of the variant
       */
      price?: number;

      /**
       * Name of the associated product
       */
      product_name?: string;

      /**
       * Reseller price of the variant
       */
      reseller_price?: number;

      /**
       * Variant unique identifier
       */
      unique_id?: string;

      /**
       * Variant UUID
       */
      uuid?: string;

      /**
       * Weight of the variant in grams
       */
      weight?: number;
    }
  }

  export interface StoreAdmin {
    /**
     * The business user ID
     */
    id: number;

    /**
     * The business phone number
     */
    business_phone: string;

    role: StoreAdmin.Role;

    user: StoreAdmin.User;
  }

  export namespace StoreAdmin {
    export interface Role {
      /**
       * The role ID
       */
      id: number;

      /**
       * The name of the role
       */
      name: string;
    }

    export interface User {
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

  /**
   * Store Sales Person Simple Schema
   */
  export interface StoreSalesPerson {
    /**
     * Store Sales Person ID
     */
    id?: number;

    business_user?: StoreSalesPerson.BusinessUser;

    /**
     * Percentage of sales person
     */
    percentage?: number;

    /**
     * Weekly Schedule Schema
     */
    weekly_schedule?: StoreSalesPerson.WeeklySchedule;
  }

  export namespace StoreSalesPerson {
    export interface BusinessUser {
      /**
       * The business user ID
       */
      id: number;

      /**
       * The business phone number
       */
      business_phone: string;

      role: BusinessUser.Role;

      user: BusinessUser.User;
    }

    export namespace BusinessUser {
      export interface Role {
        /**
         * The role ID
         */
        id: number;

        /**
         * The name of the role
         */
        name: string;
      }

      export interface User {
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
    }

    /**
     * Weekly Schedule Schema
     */
    export interface WeeklySchedule {
      /**
       * Day Schedule Schema
       */
      friday?: WeeklySchedule.Friday;

      /**
       * Day Schedule Schema
       */
      monday?: WeeklySchedule.Monday;

      /**
       * Day Schedule Schema
       */
      saturday?: WeeklySchedule.Saturday;

      /**
       * Day Schedule Schema
       */
      sunday?: WeeklySchedule.Sunday;

      /**
       * Day Schedule Schema
       */
      thursday?: WeeklySchedule.Thursday;

      /**
       * Day Schedule Schema
       */
      tuesday?: WeeklySchedule.Tuesday;

      /**
       * Day Schedule Schema
       */
      wednesday?: WeeklySchedule.Wednesday;
    }

    export namespace WeeklySchedule {
      /**
       * Day Schedule Schema
       */
      export interface Friday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Monday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Saturday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Sunday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Thursday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Tuesday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Wednesday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }
    }
  }

  export interface WabaAccount {
    /**
     * WABA Account ID
     */
    id?: number;

    /**
     * Display Phone Number
     */
    display_phone_number?: string;

    /**
     * Inserted At
     */
    inserted_at?: string;

    /**
     * Is PIN Enabled
     */
    is_pin_enabled?: boolean;

    /**
     * Is Webhooks Subscribed
     */
    is_webhooks_subscribed?: boolean;

    /**
     * Phone Number ID
     */
    phone_number_id?: string;

    /**
     * Status
     */
    status?: string;

    /**
     * Unique Identifier
     */
    unique_id?: string;

    /**
     * Updated At
     */
    updated_at?: string;

    /**
     * Verified Name
     */
    verified_name?: string;

    /**
     * WABA ID
     */
    waba_id?: string;
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

    warehouse_address?: Warehouse.WarehouseAddress;
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

    export interface WarehouseAddress {
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
    }
  }
}

export interface StoreRetrieveResponse {
  /**
   * Store ID
   */
  id?: number;

  /**
   * List of advertisers associated with the store
   */
  advertisers?: Array<StoreRetrieveResponse.Advertiser>;

  /**
   * Days until auto-expire
   */
  auto_expire_days?: number;

  /**
   * Type of auto other income
   */
  auto_other_income?: string;

  /**
   * Blocked message for spam filter
   */
  blocked_message?: string;

  /**
   * List of bundles associated with the store
   */
  bundles?: Array<StoreRetrieveResponse.Bundle>;

  business?: StoreRetrieveResponse.Business;

  /**
   * Type of CAPI purchase value
   */
  capi_purchase_value_type?: 'gross_revenue' | 'net_revenue' | 'adj_gross_revenue';

  /**
   * COD purchase triggers
   */
  cod_purchase_triggers?: Array<'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'>;

  /**
   * List of courier services associated with the store
   */
  courier_services?: Array<StoreRetrieveResponse.CourierService>;

  /**
   * Creation timestamp
   */
  created_at?: string;

  created_by?: StoreRetrieveResponse.CreatedBy;

  custom_domain?: StoreRetrieveResponse.CustomDomain;

  /**
   * Days of payment processing
   */
  days_of_payment_processing?: number;

  /**
   * Digital only complete type
   */
  digital_only_complete_type?: string;

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
   * Email notification statuses
   */
  email_notification_statuses?: Array<string>;

  email_reply_to?: StoreRetrieveResponse.EmailReplyTo;

  /**
   * Email reply-to assignment type
   */
  email_reply_to_assignment?: 'fixed' | 'rotator';

  /**
   * Fixed auto other income amount
   */
  fixed_auto_other_income?: number;

  /**
   * Greeting message for WhatsApp
   */
  greeting_message?: string;

  /**
   * Inactivity period for WhatsApp
   */
  inactivity_period?: number;

  /**
   * Is the store active?
   */
  is_active?: boolean;

  /**
   * Is advanced validation enabled?
   */
  is_advanced_validation?: boolean;

  /**
   * Is auto-expire enabled?
   */
  is_auto_expire?: boolean;

  /**
   * Is customer OTP required?
   */
  is_customer_otp_required?: boolean;

  /**
   * Is customer spam filter enabled?
   */
  is_customer_spam_filter?: boolean;

  /**
   * Is discount editable?
   */
  is_discount_editable?: boolean;

  /**
   * Is dropshipping allowed in this store?
   */
  is_dropshipping_allowed?: boolean;

  /**
   * Is email notification for new orders enabled?
   */
  is_email_new_order?: boolean;

  /**
   * Is email notifications enabled?
   */
  is_email_notifications?: boolean;

  /**
   * Is follow-up chat for bundles enabled?
   */
  is_fuc_bundle_enabled?: boolean;

  /**
   * Is follow-up chat for products enabled?
   */
  is_fuc_product_enabled?: boolean;

  /**
   * Is greeting message enabled?
   */
  is_greeting_message_enabled?: boolean;

  /**
   * Is IP spam filter enabled?
   */
  is_ip_spam_filter?: boolean;

  /**
   * Is manual shipping cost enabled?
   */
  is_manual_shipping_cost?: boolean;

  /**
   * Is Moota integration enabled for this store?
   */
  is_moota_enabled?: boolean;

  /**
   * Is postal code required for orders?
   */
  is_postal_code?: boolean;

  /**
   * Is show download invoice option enabled?
   */
  is_show_download_invoice?: boolean;

  /**
   * Is Scalev branding shown?
   */
  is_show_scalev_branding?: boolean;

  /**
   * Is show WhatsApp option enabled?
   */
  is_show_whatsapp?: boolean;

  /**
   * Is spam filter with AI enabled?
   */
  is_spam_filter?: boolean;

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
   * Last update timestamp
   */
  last_updated_at?: string;

  last_updated_by?: StoreRetrieveResponse.LastUpdatedBy;

  /**
   * URL of the store logo
   */
  logo?: string;

  /**
   * Maximum orders per IP address
   */
  max_per_ip?: number;

  /**
   * Maximum orders per phone number
   */
  max_per_phone?: number;

  /**
   * Maximum amount for unique code orders
   */
  max_unique_code_amount?: number;

  /**
   * Minimum address length for validation
   */
  min_address_length?: number;

  /**
   * Minimum name length for validation
   */
  min_name_length?: number;

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
   * List of payment accounts associated with the store
   */
  payment_accounts?: Array<StoreRetrieveResponse.PaymentAccount>;

  /**
   * Payment methods available in the store
   */
  payment_methods?: Array<
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
    | 'cod'
  >;

  /**
   * Postal code requirement options
   */
  postal_code_requirement?: 'autofill' | 'manual';

  /**
   * List of products associated with the store
   */
  products?: Array<StoreRetrieveResponse.Product>;

  /**
   * List of store admins
   */
  store_admins?: Array<StoreRetrieveResponse.StoreAdmin>;

  /**
   * Other incomes for store couriers
   */
  store_courier_other_incomes?: Array<StoreRetrieveResponse.StoreCourierOtherIncome>;

  /**
   * Other incomes for store methods
   */
  store_method_other_incomes?: Array<StoreRetrieveResponse.StoreMethodOtherIncome>;

  /**
   * List of store sales persons
   */
  store_sales_person?: Array<StoreRetrieveResponse.StoreSalesPerson>;

  /**
   * Xendit VA bank codes
   */
  sub_payment_methods?: Array<
    'BCA' | 'BNI' | 'BRI' | 'MANDIRI' | 'PERMATA' | 'BSI' | 'BJB' | 'CIMB' | 'SAHABAT_SAMPOERNA' | 'ARTAJASA'
  >;

  /**
   * Unique identifier for the store
   */
  unique_id?: string;

  /**
   * UUID of the store
   */
  uuid?: string;

  waba_account?: StoreRetrieveResponse.WabaAccount;

  warehouse?: StoreRetrieveResponse.Warehouse;
}

export namespace StoreRetrieveResponse {
  export interface Advertiser {
    /**
     * The business user ID
     */
    id: number;

    /**
     * The business phone number
     */
    business_phone: string;

    role: Advertiser.Role;

    user: Advertiser.User;
  }

  export namespace Advertiser {
    export interface Role {
      /**
       * The role ID
       */
      id: number;

      /**
       * The name of the role
       */
      name: string;
    }

    export interface User {
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
  }

  export interface Bundle {
    /**
     * Bundle ID
     */
    id?: number;

    /**
     * List of Bundle Price Options
     */
    bundle_price_options?: Array<Bundle.BundlePriceOption>;

    /**
     * Custom Identifier
     */
    custom_id?: string;

    /**
     * Display Name
     */
    display?: string;

    /**
     * List of Image URLs
     */
    images?: Array<string>;

    /**
     * Is Bundle Sharing Enabled
     */
    is_bundle_sharing?: boolean;

    /**
     * Name
     */
    name?: string;

    /**
     * Public Name
     */
    public_name?: string;

    /**
     * Weight Bump
     */
    weight_bump?: number;
  }

  export namespace Bundle {
    export interface BundlePriceOption {
      /**
       * Bundle Price Option ID
       */
      id?: number;

      /**
       * Is owned by store
       */
      is_owned_by_store?: boolean;

      /**
       * Name
       */
      name?: string;

      /**
       * Price (including tax)
       */
      price?: number;

      /**
       * Price before tax
       */
      price_bt?: number;

      /**
       * Slug
       */
      slug?: string;

      /**
       * Bundle Price Option Unique ID
       */
      unique_id?: string;
    }
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
     * Category of the courier service
     */
    category?: string;

    /**
     * Code for the courier service
     */
    code?: string;

    courier?: CourierService.Courier;

    /**
     * Description of the courier service
     */
    description?: string;

    /**
     * Is Cash on Delivery available for this courier service
     */
    is_cod?: boolean;

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

  export interface CreatedBy {
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

  export interface CustomDomain {
    /**
     * Custom Domain ID
     */
    id?: number;

    /**
     * Full URL
     */
    full_url?: string;

    /**
     * Is Verified
     */
    is_verified?: boolean;
  }

  export interface EmailReplyTo {
    /**
     * The business user ID
     */
    id: number;

    /**
     * The business phone number
     */
    business_phone: string;

    role: EmailReplyTo.Role;

    user: EmailReplyTo.User;
  }

  export namespace EmailReplyTo {
    export interface Role {
      /**
       * The role ID
       */
      id: number;

      /**
       * The name of the role
       */
      name: string;
    }

    export interface User {
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

  export interface PaymentAccount {
    /**
     * Payment Account ID
     */
    id?: number;

    /**
     * Account Holder Name
     */
    account_holder?: string;

    /**
     * Account Number
     */
    account_number?: string;

    financial_entity?: PaymentAccount.FinancialEntity;

    /**
     * Payment Method
     */
    method?: string;

    /**
     * Unique Identifier
     */
    unique_id?: string;
  }

  export namespace PaymentAccount {
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
  }

  export interface Product {
    /**
     * Product primary key
     */
    id?: number;

    /**
     * Display name of the product
     */
    display?: string;

    /**
     * List of image URLs associated with the product
     */
    images?: Array<string>;

    /**
     * Type of the product item
     */
    item_type?: 'physical' | 'digital' | 'course';

    /**
     * Human-readable name of the product item type
     */
    item_type_name?: string;

    /**
     * List of labels associated with the product
     */
    labels?: Array<Product.Label>;

    /**
     * Product name
     */
    name?: string;

    /**
     * Name of first option value
     */
    option1_name?: string;

    /**
     * Name of 2nd option value
     */
    option2_name?: string;

    /**
     * Name of 3rd option value
     */
    option3_name?: string;

    /**
     * Product Public name
     */
    public_name?: string;

    /**
     * Product UUID
     */
    uuid?: string;

    /**
     * Count of variants associated with the product
     */
    variant_count?: number;

    /**
     * List of variants associated with the product
     */
    variants?: Array<Product.Variant>;
  }

  export namespace Product {
    export interface Label {
      /**
       * Label name
       */
      name?: string;
    }

    export interface Variant {
      /**
       * Variant primary key
       */
      id?: number;

      /**
       * Available quantity of the variant in inventory
       */
      available_qty?: number;

      /**
       * List of image URLs associated with the variant
       */
      images?: Array<string>;

      /**
       * Mark variant as sellable
       */
      is_checked?: boolean;

      /**
       * Indicates if the variant is editable
       */
      is_editable?: boolean;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      /**
       * Additional metadata associated with the variant
       */
      metadata?: { [key: string]: unknown };

      /**
       * Full name of the variant
       */
      name?: string;

      /**
       * Color associated with the first product option
       */
      option1_color?: string;

      /**
       * Icon URL for the first product option
       */
      option1_icon_url?: string;

      /**
       * Value of the first product option
       */
      option1_value?: string;

      /**
       * Color associated with the second product option
       */
      option2_color?: string;

      /**
       * Icon URL for the second product option
       */
      option2_icon_url?: string;

      /**
       * Value of the second product option
       */
      option2_value?: string;

      /**
       * Color associated with the third product option
       */
      option3_color?: string;

      /**
       * Icon URL for the third product option
       */
      option3_icon_url?: string;

      /**
       * Value of the third product option
       */
      option3_value?: string;

      /**
       * Price of the variant
       */
      price?: number;

      /**
       * Name of the associated product
       */
      product_name?: string;

      /**
       * Reseller price of the variant
       */
      reseller_price?: number;

      /**
       * Variant unique identifier
       */
      unique_id?: string;

      /**
       * Variant UUID
       */
      uuid?: string;

      /**
       * Weight of the variant in grams
       */
      weight?: number;
    }
  }

  export interface StoreAdmin {
    /**
     * The business user ID
     */
    id: number;

    /**
     * The business phone number
     */
    business_phone: string;

    role: StoreAdmin.Role;

    user: StoreAdmin.User;
  }

  export namespace StoreAdmin {
    export interface Role {
      /**
       * The role ID
       */
      id: number;

      /**
       * The name of the role
       */
      name: string;
    }

    export interface User {
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

  /**
   * Store Sales Person Simple Schema
   */
  export interface StoreSalesPerson {
    /**
     * Store Sales Person ID
     */
    id?: number;

    business_user?: StoreSalesPerson.BusinessUser;

    /**
     * Percentage of sales person
     */
    percentage?: number;

    /**
     * Weekly Schedule Schema
     */
    weekly_schedule?: StoreSalesPerson.WeeklySchedule;
  }

  export namespace StoreSalesPerson {
    export interface BusinessUser {
      /**
       * The business user ID
       */
      id: number;

      /**
       * The business phone number
       */
      business_phone: string;

      role: BusinessUser.Role;

      user: BusinessUser.User;
    }

    export namespace BusinessUser {
      export interface Role {
        /**
         * The role ID
         */
        id: number;

        /**
         * The name of the role
         */
        name: string;
      }

      export interface User {
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
    }

    /**
     * Weekly Schedule Schema
     */
    export interface WeeklySchedule {
      /**
       * Day Schedule Schema
       */
      friday?: WeeklySchedule.Friday;

      /**
       * Day Schedule Schema
       */
      monday?: WeeklySchedule.Monday;

      /**
       * Day Schedule Schema
       */
      saturday?: WeeklySchedule.Saturday;

      /**
       * Day Schedule Schema
       */
      sunday?: WeeklySchedule.Sunday;

      /**
       * Day Schedule Schema
       */
      thursday?: WeeklySchedule.Thursday;

      /**
       * Day Schedule Schema
       */
      tuesday?: WeeklySchedule.Tuesday;

      /**
       * Day Schedule Schema
       */
      wednesday?: WeeklySchedule.Wednesday;
    }

    export namespace WeeklySchedule {
      /**
       * Day Schedule Schema
       */
      export interface Friday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Monday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Saturday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Sunday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Thursday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Tuesday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }

      /**
       * Day Schedule Schema
       */
      export interface Wednesday {
        /**
         * End time
         */
        end_time: string;

        /**
         * Is active
         */
        is_active: boolean;

        /**
         * Start time
         */
        start_time: string;
      }
    }
  }

  export interface WabaAccount {
    /**
     * WABA Account ID
     */
    id?: number;

    /**
     * Display Phone Number
     */
    display_phone_number?: string;

    /**
     * Inserted At
     */
    inserted_at?: string;

    /**
     * Is PIN Enabled
     */
    is_pin_enabled?: boolean;

    /**
     * Is Webhooks Subscribed
     */
    is_webhooks_subscribed?: boolean;

    /**
     * Phone Number ID
     */
    phone_number_id?: string;

    /**
     * Status
     */
    status?: string;

    /**
     * Unique Identifier
     */
    unique_id?: string;

    /**
     * Updated At
     */
    updated_at?: string;

    /**
     * Verified Name
     */
    verified_name?: string;

    /**
     * WABA ID
     */
    waba_id?: string;
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

    warehouse_address?: Warehouse.WarehouseAddress;
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

    export interface WarehouseAddress {
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
    }
  }
}

export interface StoreListResponse {
  code?: number;

  data?: StoreListResponse.Data;

  status?: string;
}

export namespace StoreListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Business ID
       */
      business_id?: number;

      /**
       * COD purchase triggers
       */
      cod_purchase_triggers?: Array<
        'public_upload' | 'internal_upload' | 'confirmed' | 'shipped' | 'completed'
      >;

      /**
       * Creation timestamp
       */
      created_at?: string;

      created_by?: Result.CreatedBy;

      custom_domain?: Result.CustomDomain;

      /**
       * Is dropshipping allowed in this store?
       */
      is_dropshipping_allowed?: boolean;

      /**
       * Is manual shipping cost enabled?
       */
      is_manual_shipping_cost?: boolean;

      /**
       * Is Moota integration enabled for this store?
       */
      is_moota_enabled?: boolean;

      /**
       * Is Scalev branding shown?
       */
      is_show_scalev_branding?: boolean;

      /**
       * Is transfer proof required for orders in this store?
       */
      is_transferproof_required?: boolean;

      /**
       * Is unique code required for orders?
       */
      is_unique_code?: boolean;

      /**
       * Last update timestamp
       */
      last_updated_at?: string;

      last_updated_by?: Result.LastUpdatedBy;

      /**
       * URL of the store logo
       */
      logo?: string;

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
       * Unique identifier for the store
       */
      unique_id?: string;

      /**
       * UUID of the store
       */
      uuid?: string;

      /**
       * Warehouse ID
       */
      warehouse_id?: number;
    }

    export namespace Result {
      export interface CreatedBy {
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

      export interface CustomDomain {
        /**
         * Custom Domain ID
         */
        id?: number;

        /**
         * Full URL
         */
        full_url?: string;

        /**
         * Is Verified
         */
        is_verified?: boolean;
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
    }
  }
}

export interface StoreDeleteResponse {
  code?: number;

  status?: string;
}

export interface StoreListCustomAudiencesResponse {
  code?: number;

  data?: Array<StoreListCustomAudiencesResponse.Data>;

  status?: string;
}

export namespace StoreListCustomAudiencesResponse {
  export interface Data {
    custom_audience?: Data.CustomAudience;

    /**
     * Order status
     */
    order_status?:
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
    export interface CustomAudience {
      /**
       * The ID of the custom audience
       */
      custom_audience_id: string;

      /**
       * The name of the custom audience
       */
      name: string;

      /**
       * List of errors associated with the custom audience
       */
      errors?: Array<{ [key: string]: unknown }>;
    }
  }
}

export interface StoreListPagesResponse {
  code?: number;

  data?: StoreListPagesResponse.Data;

  status?: string;
}

export namespace StoreListPagesResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
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
  }
}

export interface StoreListPaymentAccountsResponse {
  code?: number;

  data?: StoreListPaymentAccountsResponse.Data;

  status?: string;
}

export namespace StoreListPaymentAccountsResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * Payment Account ID
       */
      id?: number;

      /**
       * Account Holder Name
       */
      account_holder?: string;

      /**
       * Account Number
       */
      account_number?: string;

      financial_entity?: Result.FinancialEntity;

      /**
       * Is Owned By Store
       */
      is_owned_by_store?: boolean;

      /**
       * Payment Method
       */
      method?: string;

      /**
       * Unique Identifier
       */
      unique_id?: string;
    }

    export namespace Result {
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
    }
  }
}

export interface StoreListSalesPeopleResponse {
  code?: number;

  data?: StoreListSalesPeopleResponse.Data;

  status?: string;
}

export namespace StoreListSalesPeopleResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    /**
     * Store Sales Person Simple Schema
     */
    export interface Result {
      /**
       * Store Sales Person ID
       */
      id?: number;

      business_user?: Result.BusinessUser;

      /**
       * Percentage of sales person
       */
      percentage?: number;

      /**
       * Weekly Schedule Schema
       */
      weekly_schedule?: Result.WeeklySchedule;
    }

    export namespace Result {
      export interface BusinessUser {
        /**
         * The business user ID
         */
        id: number;

        /**
         * The business phone number
         */
        business_phone: string;

        role: BusinessUser.Role;

        user: BusinessUser.User;
      }

      export namespace BusinessUser {
        export interface Role {
          /**
           * The role ID
           */
          id: number;

          /**
           * The name of the role
           */
          name: string;
        }

        export interface User {
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
      }

      /**
       * Weekly Schedule Schema
       */
      export interface WeeklySchedule {
        /**
         * Day Schedule Schema
         */
        friday?: WeeklySchedule.Friday;

        /**
         * Day Schedule Schema
         */
        monday?: WeeklySchedule.Monday;

        /**
         * Day Schedule Schema
         */
        saturday?: WeeklySchedule.Saturday;

        /**
         * Day Schedule Schema
         */
        sunday?: WeeklySchedule.Sunday;

        /**
         * Day Schedule Schema
         */
        thursday?: WeeklySchedule.Thursday;

        /**
         * Day Schedule Schema
         */
        tuesday?: WeeklySchedule.Tuesday;

        /**
         * Day Schedule Schema
         */
        wednesday?: WeeklySchedule.Wednesday;
      }

      export namespace WeeklySchedule {
        /**
         * Day Schedule Schema
         */
        export interface Friday {
          /**
           * End time
           */
          end_time: string;

          /**
           * Is active
           */
          is_active: boolean;

          /**
           * Start time
           */
          start_time: string;
        }

        /**
         * Day Schedule Schema
         */
        export interface Monday {
          /**
           * End time
           */
          end_time: string;

          /**
           * Is active
           */
          is_active: boolean;

          /**
           * Start time
           */
          start_time: string;
        }

        /**
         * Day Schedule Schema
         */
        export interface Saturday {
          /**
           * End time
           */
          end_time: string;

          /**
           * Is active
           */
          is_active: boolean;

          /**
           * Start time
           */
          start_time: string;
        }

        /**
         * Day Schedule Schema
         */
        export interface Sunday {
          /**
           * End time
           */
          end_time: string;

          /**
           * Is active
           */
          is_active: boolean;

          /**
           * Start time
           */
          start_time: string;
        }

        /**
         * Day Schedule Schema
         */
        export interface Thursday {
          /**
           * End time
           */
          end_time: string;

          /**
           * Is active
           */
          is_active: boolean;

          /**
           * Start time
           */
          start_time: string;
        }

        /**
         * Day Schedule Schema
         */
        export interface Tuesday {
          /**
           * End time
           */
          end_time: string;

          /**
           * Is active
           */
          is_active: boolean;

          /**
           * Start time
           */
          start_time: string;
        }

        /**
         * Day Schedule Schema
         */
        export interface Wednesday {
          /**
           * End time
           */
          end_time: string;

          /**
           * Is active
           */
          is_active: boolean;

          /**
           * Start time
           */
          start_time: string;
        }
      }
    }
  }
}

export interface StoreListSimplifiedResponse {
  code?: number;

  data?: StoreListSimplifiedResponse.Data;

  status?: string;
}

export namespace StoreListSimplifiedResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * Store ID
       */
      id?: number;

      /**
       * Business ID
       */
      business_id?: number;

      custom_domain?: Result.CustomDomain;

      /**
       * URL of the store logo
       */
      logo?: string;

      /**
       * Name of the store
       */
      name?: string;

      /**
       * Payment methods available in the store
       */
      payment_methods?: Array<
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
        | 'cod'
      >;

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

    export namespace Result {
      export interface CustomDomain {
        /**
         * Custom Domain ID
         */
        id?: number;

        /**
         * Full URL
         */
        full_url?: string;

        /**
         * Is Verified
         */
        is_verified?: boolean;
      }
    }
  }
}

export interface StoreCreateParams {
  /**
   * Store name
   */
  name: string;
}

export interface StoreListParams {
  /**
   * Filter stores by custom domain (case-insensitive, exact match)
   */
  domain?: string;

  /**
   * Filter stores that have a custom domain (true/false)
   */
  has_domain?: boolean;

  /**
   * Last order ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;

  /**
   * Search term to filter stores by name (case-insensitive, partial match)
   */
  search?: string;
}

export interface StoreListPagesParams {
  /**
   * Filter pages that are pinned (true/false)
   */
  is_pinned?: boolean;

  /**
   * Last page ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;

  /**
   * Search term to filter pages by title or content (case-insensitive, partial
   * match)
   */
  search?: string;

  /**
   * Filter pages by specific tags
   */
  tags?: string;
}

export interface StoreListPaymentAccountsParams {
  /**
   * Last payment account ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Filter by payment method
   */
  method?: string;

  /**
   * Primary key of the order to validate if the payment accounts are applicable for
   * that order
   */
  order_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;

  /**
   * Search by payment account name or number
   */
  search?: string;
}

export interface StoreListSalesPeopleParams {
  /**
   * Last sales person ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;
}

export interface StoreListSimplifiedParams {
  /**
   * Filter stores by custom domain (case-insensitive, exact match)
   */
  domain?: string;

  /**
   * Filter stores that have a custom domain (true/false)
   */
  has_domain?: boolean;

  /**
   * Last order ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;

  /**
   * Search term to filter stores by name (case-insensitive, partial match)
   */
  search?: string;
}

Stores.Bpos = Bpos;
Stores.Bundles = Bundles;
Stores.CourierServices = CourierServices;
Stores.FollowUpChats = FollowUpChats;
Stores.PaymentMethods = PaymentMethods;
Stores.Products = Products;
Stores.StoreAdmins = StoreAdmins;
Stores.StoreAdvertisers = StoreAdvertisers;

export declare namespace Stores {
  export {
    type StoreCreateResponse as StoreCreateResponse,
    type StoreRetrieveResponse as StoreRetrieveResponse,
    type StoreListResponse as StoreListResponse,
    type StoreDeleteResponse as StoreDeleteResponse,
    type StoreListCustomAudiencesResponse as StoreListCustomAudiencesResponse,
    type StoreListPagesResponse as StoreListPagesResponse,
    type StoreListPaymentAccountsResponse as StoreListPaymentAccountsResponse,
    type StoreListSalesPeopleResponse as StoreListSalesPeopleResponse,
    type StoreListSimplifiedResponse as StoreListSimplifiedResponse,
    type StoreCreateParams as StoreCreateParams,
    type StoreListParams as StoreListParams,
    type StoreListPagesParams as StoreListPagesParams,
    type StoreListPaymentAccountsParams as StoreListPaymentAccountsParams,
    type StoreListSalesPeopleParams as StoreListSalesPeopleParams,
    type StoreListSimplifiedParams as StoreListSimplifiedParams,
  };

  export {
    Bpos as Bpos,
    type BpoAddResponse as BpoAddResponse,
    type BpoRemoveResponse as BpoRemoveResponse,
    type BpoViewRelationsResponse as BpoViewRelationsResponse,
    type BpoAddParams as BpoAddParams,
    type BpoRemoveParams as BpoRemoveParams,
    type BpoViewRelationsParams as BpoViewRelationsParams,
  };

  export {
    Bundles as Bundles,
    type BundleRetrieveResponse as BundleRetrieveResponse,
    type BundleListResponse as BundleListResponse,
    type BundleRetrieveParams as BundleRetrieveParams,
    type BundleListParams as BundleListParams,
  };

  export {
    CourierServices as CourierServices,
    type CourierServiceAddResponse as CourierServiceAddResponse,
    type CourierServiceRemoveResponse as CourierServiceRemoveResponse,
    type CourierServiceAddParams as CourierServiceAddParams,
    type CourierServiceRemoveParams as CourierServiceRemoveParams,
  };

  export {
    FollowUpChats as FollowUpChats,
    type FollowUpChatCreateResponse as FollowUpChatCreateResponse,
    type FollowUpChatRetrieveResponse as FollowUpChatRetrieveResponse,
    type FollowUpChatListResponse as FollowUpChatListResponse,
    type FollowUpChatDeleteResponse as FollowUpChatDeleteResponse,
    type FollowUpChatCreateParams as FollowUpChatCreateParams,
    type FollowUpChatRetrieveParams as FollowUpChatRetrieveParams,
    type FollowUpChatListParams as FollowUpChatListParams,
    type FollowUpChatDeleteParams as FollowUpChatDeleteParams,
  };

  export {
    PaymentMethods as PaymentMethods,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodAddResponse as PaymentMethodAddResponse,
    type PaymentMethodRemoveResponse as PaymentMethodRemoveResponse,
    type PaymentMethodListParams as PaymentMethodListParams,
    type PaymentMethodAddParams as PaymentMethodAddParams,
    type PaymentMethodRemoveParams as PaymentMethodRemoveParams,
  };

  export {
    Products as Products,
    type ProductListResponse as ProductListResponse,
    type ProductAddResponse as ProductAddResponse,
    type ProductRemoveResponse as ProductRemoveResponse,
    type ProductViewRelationsResponse as ProductViewRelationsResponse,
    type ProductListParams as ProductListParams,
    type ProductAddParams as ProductAddParams,
    type ProductRemoveParams as ProductRemoveParams,
    type ProductViewRelationsParams as ProductViewRelationsParams,
  };

  export {
    StoreAdmins as StoreAdmins,
    type StoreAdminListResponse as StoreAdminListResponse,
    type StoreAdminAddResponse as StoreAdminAddResponse,
    type StoreAdminRemoveResponse as StoreAdminRemoveResponse,
    type StoreAdminListParams as StoreAdminListParams,
    type StoreAdminAddParams as StoreAdminAddParams,
    type StoreAdminRemoveParams as StoreAdminRemoveParams,
  };

  export {
    StoreAdvertisers as StoreAdvertisers,
    type StoreAdvertiserListResponse as StoreAdvertiserListResponse,
    type StoreAdvertiserAddResponse as StoreAdvertiserAddResponse,
    type StoreAdvertiserRemoveResponse as StoreAdvertiserRemoveResponse,
    type StoreAdvertiserListParams as StoreAdvertiserListParams,
    type StoreAdvertiserAddParams as StoreAdvertiserAddParams,
    type StoreAdvertiserRemoveParams as StoreAdvertiserRemoveParams,
  };
}
