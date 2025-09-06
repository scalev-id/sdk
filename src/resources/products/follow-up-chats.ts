// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FollowUpChats extends APIResource {
  /**
   * Create a follow up chat template for a product.
   */
  create(
    productID: number,
    body: FollowUpChatCreateParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatCreateResponse> {
    return this._client.post(path`/v2/products/${productID}/follow-up-chats`, { body, ...options });
  }

  /**
   * Shows a single follow up chat template by ID.
   */
  retrieve(
    id: number,
    params: FollowUpChatRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatRetrieveResponse> {
    const { product_id } = params;
    return this._client.get(path`/v2/products/${product_id}/follow-up-chats/${id}`, options);
  }

  /**
   * Updates a follow up chat template.
   */
  update(
    id: number,
    params: FollowUpChatUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatUpdateResponse> {
    const { product_id, ...body } = params;
    return this._client.patch(path`/v2/products/${product_id}/follow-up-chats/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of follow up chats for a product.
   */
  list(
    productID: number,
    query: FollowUpChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FollowUpChatListResponsesCursorPagination, FollowUpChatListResponse> {
    return this._client.getAPIList(
      path`/v2/products/${productID}/follow-up-chats`,
      CursorPagination<FollowUpChatListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a follow up chat template.
   */
  delete(
    id: number,
    params: FollowUpChatDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatDeleteResponse> {
    const { product_id } = params;
    return this._client.delete(path`/v2/products/${product_id}/follow-up-chats/${id}`, options);
  }

  /**
   * Generates a new follow up chat for a product.
   */
  generate(productID: number, options?: RequestOptions): APIPromise<FollowUpChatGenerateResponse> {
    return this._client.post(path`/v2/products/${productID}/follow-up-chats/generate`, options);
  }
}

export type FollowUpChatListResponsesCursorPagination = CursorPagination<FollowUpChatListResponse>;

export interface FollowUpChatCreateResponse {
  code?: number;

  data?: FollowUpChatCreateResponse.Data;

  status?: string;
}

export namespace FollowUpChatCreateResponse {
  export interface Data {
    /**
     * Follow-up chat ID
     */
    id?: number;

    /**
     * Bundle ID associated with the follow-up chat
     */
    bundle_id?: number;

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
     * Product ID associated with the follow-up chat
     */
    product_id?: number;

    /**
     * Provider of the follow-up chat
     */
    provider?: string;

    /**
     * Store ID associated with the follow-up chat
     */
    store_id?: number;

    /**
     * Text for bank transfer payments
     */
    text_for_bank_transfer?: string;

    /**
     * Text for cash on delivery payments
     */
    text_for_cod?: string;

    /**
     * Text for electronic payments
     */
    text_for_epayment?: string;

    /**
     * Trigger for the follow-up chat
     */
    trigger?: string;

    /**
     * WhatsApp gateway assignation type
     */
    wa_gateway_assignation_type?: string;

    wa_integration?: Data.WaIntegration;
  }

  export namespace Data {
    export interface WaIntegration {
      /**
       * Whatsapp Integration ID
       */
      id?: number;

      /**
       * Name
       */
      name?: string;

      /**
       * Phone Number
       */
      phone_number?: string;

      /**
       * Provider
       */
      provider?: string;
    }
  }
}

export interface FollowUpChatRetrieveResponse {
  code?: number;

  data?: FollowUpChatRetrieveResponse.Data;

  status?: string;
}

export namespace FollowUpChatRetrieveResponse {
  export interface Data {
    /**
     * Follow-up chat ID
     */
    id?: number;

    /**
     * Bundle ID associated with the follow-up chat
     */
    bundle_id?: number;

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
     * Product ID associated with the follow-up chat
     */
    product_id?: number;

    /**
     * Provider of the follow-up chat
     */
    provider?: string;

    /**
     * Store ID associated with the follow-up chat
     */
    store_id?: number;

    /**
     * Text for bank transfer payments
     */
    text_for_bank_transfer?: string;

    /**
     * Text for cash on delivery payments
     */
    text_for_cod?: string;

    /**
     * Text for electronic payments
     */
    text_for_epayment?: string;

    /**
     * Trigger for the follow-up chat
     */
    trigger?: string;

    /**
     * WhatsApp gateway assignation type
     */
    wa_gateway_assignation_type?: string;

    wa_integration?: Data.WaIntegration;
  }

  export namespace Data {
    export interface WaIntegration {
      /**
       * Whatsapp Integration ID
       */
      id?: number;

      /**
       * Name
       */
      name?: string;

      /**
       * Phone Number
       */
      phone_number?: string;

      /**
       * Provider
       */
      provider?: string;
    }
  }
}

export interface FollowUpChatUpdateResponse {
  code?: number;

  data?: FollowUpChatUpdateResponse.Data;

  status?: string;
}

export namespace FollowUpChatUpdateResponse {
  export interface Data {
    /**
     * Follow-up chat ID
     */
    id?: number;

    /**
     * Bundle ID associated with the follow-up chat
     */
    bundle_id?: number;

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
     * Product ID associated with the follow-up chat
     */
    product_id?: number;

    /**
     * Provider of the follow-up chat
     */
    provider?: string;

    /**
     * Store ID associated with the follow-up chat
     */
    store_id?: number;

    /**
     * Text for bank transfer payments
     */
    text_for_bank_transfer?: string;

    /**
     * Text for cash on delivery payments
     */
    text_for_cod?: string;

    /**
     * Text for electronic payments
     */
    text_for_epayment?: string;

    /**
     * Trigger for the follow-up chat
     */
    trigger?: string;

    /**
     * WhatsApp gateway assignation type
     */
    wa_gateway_assignation_type?: string;

    wa_integration?: Data.WaIntegration;
  }

  export namespace Data {
    export interface WaIntegration {
      /**
       * Whatsapp Integration ID
       */
      id?: number;

      /**
       * Name
       */
      name?: string;

      /**
       * Phone Number
       */
      phone_number?: string;

      /**
       * Provider
       */
      provider?: string;
    }
  }
}

export interface FollowUpChatListResponse {
  /**
   * Follow-up chat ID
   */
  id?: number;

  /**
   * Bundle ID associated with the follow-up chat
   */
  bundle_id?: number;

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
   * Product ID associated with the follow-up chat
   */
  product_id?: number;

  /**
   * Provider of the follow-up chat
   */
  provider?: string;

  /**
   * Store ID associated with the follow-up chat
   */
  store_id?: number;

  /**
   * Text for bank transfer payments
   */
  text_for_bank_transfer?: string;

  /**
   * Text for cash on delivery payments
   */
  text_for_cod?: string;

  /**
   * Text for electronic payments
   */
  text_for_epayment?: string;

  /**
   * Trigger for the follow-up chat
   */
  trigger?: string;

  /**
   * WhatsApp gateway assignation type
   */
  wa_gateway_assignation_type?: string;

  wa_integration?: FollowUpChatListResponse.WaIntegration;
}

export namespace FollowUpChatListResponse {
  export interface WaIntegration {
    /**
     * Whatsapp Integration ID
     */
    id?: number;

    /**
     * Name
     */
    name?: string;

    /**
     * Phone Number
     */
    phone_number?: string;

    /**
     * Provider
     */
    provider?: string;
  }
}

export interface FollowUpChatDeleteResponse {
  code?: number;

  status?: string;
}

export interface FollowUpChatGenerateResponse {
  code?: number;

  status?: string;
}

export interface FollowUpChatCreateParams {
  /**
   * Name of the follow up chat
   */
  name: string;

  /**
   * Provider of the follow up chat
   */
  provider: string;

  /**
   * Triggered after order status change to this status
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
   * Text for bank transfer
   */
  text_for_bank_transfer?: string;

  /**
   * Text for cash on delivery
   */
  text_for_cod?: string;

  /**
   * Text for e-payments
   */
  text_for_epayment?: string;

  /**
   * Trigger condition for the follow up chat
   */
  trigger?: string;

  /**
   * WhatsApp gateway assignation type
   */
  wa_gateway_assignation_type?: string;

  /**
   * WhatsApp integration ID
   */
  wa_integration_id?: number;
}

export interface FollowUpChatRetrieveParams {
  /**
   * Product ID
   */
  product_id: number;
}

export interface FollowUpChatUpdateParams {
  /**
   * Path param: Product ID
   */
  product_id: number;

  /**
   * Body param: Name of the follow up chat
   */
  name: string;

  /**
   * Body param: Provider of the follow up chat
   */
  provider: string;

  /**
   * Body param: Triggered after order status change to this status
   */
  change_status?: boolean;

  /**
   * Body param: Hours after which the follow up chat is triggered
   */
  hours_after?: number;

  /**
   * Body param: Image URL for the follow up chat
   */
  image?: string;

  /**
   * Body param: Is this a default follow up chat?
   */
  is_default?: boolean;

  /**
   * Body param: Text for bank transfer
   */
  text_for_bank_transfer?: string;

  /**
   * Body param: Text for cash on delivery
   */
  text_for_cod?: string;

  /**
   * Body param: Text for e-payments
   */
  text_for_epayment?: string;

  /**
   * Body param: Trigger condition for the follow up chat
   */
  trigger?: string;

  /**
   * Body param: WhatsApp gateway assignation type
   */
  wa_gateway_assignation_type?: string;

  /**
   * Body param: WhatsApp integration ID
   */
  wa_integration_id?: number;
}

export interface FollowUpChatListParams extends CursorPaginationParams {}

export interface FollowUpChatDeleteParams {
  /**
   * Product ID
   */
  product_id: number;
}

export declare namespace FollowUpChats {
  export {
    type FollowUpChatCreateResponse as FollowUpChatCreateResponse,
    type FollowUpChatRetrieveResponse as FollowUpChatRetrieveResponse,
    type FollowUpChatUpdateResponse as FollowUpChatUpdateResponse,
    type FollowUpChatListResponse as FollowUpChatListResponse,
    type FollowUpChatDeleteResponse as FollowUpChatDeleteResponse,
    type FollowUpChatGenerateResponse as FollowUpChatGenerateResponse,
    type FollowUpChatListResponsesCursorPagination as FollowUpChatListResponsesCursorPagination,
    type FollowUpChatCreateParams as FollowUpChatCreateParams,
    type FollowUpChatRetrieveParams as FollowUpChatRetrieveParams,
    type FollowUpChatUpdateParams as FollowUpChatUpdateParams,
    type FollowUpChatListParams as FollowUpChatListParams,
    type FollowUpChatDeleteParams as FollowUpChatDeleteParams,
  };
}
