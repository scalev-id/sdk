// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FollowUpChats extends APIResource {
  /**
   * Create a follow up chat template for a store.
   *
   * @example
   * ```ts
   * const followUpChat =
   *   await client.stores.followUpChats.create(0, {
   *     name: 'name',
   *     provider: 'provider',
   *   });
   * ```
   */
  create(
    storeID: number,
    body: FollowUpChatCreateParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatCreateResponse> {
    return this._client.post(path`/v2/stores/${storeID}/follow-up-chats`, { body, ...options });
  }

  /**
   * Retrieves a follow up chat template by its ID.
   *
   * @example
   * ```ts
   * const followUpChat =
   *   await client.stores.followUpChats.retrieve(0, {
   *     store_id: 0,
   *   });
   * ```
   */
  retrieve(
    id: number,
    params: FollowUpChatRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatRetrieveResponse> {
    const { store_id } = params;
    return this._client.get(path`/v2/stores/${store_id}/follow-up-chats/${id}`, options);
  }

  /**
   * Updates a follow up chat template.
   *
   * @example
   * ```ts
   * const followUpChat =
   *   await client.stores.followUpChats.update(0, {
   *     store_id: 0,
   *     name: 'name',
   *     provider: 'provider',
   *   });
   * ```
   */
  update(
    id: number,
    params: FollowUpChatUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatUpdateResponse> {
    const { store_id, ...body } = params;
    return this._client.put(path`/v2/stores/${store_id}/follow-up-chats/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of follow up chats for a store.
   *
   * @example
   * ```ts
   * const followUpChats =
   *   await client.stores.followUpChats.list(0);
   * ```
   */
  list(
    storeID: number,
    query: FollowUpChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FollowUpChatListResponse> {
    return this._client.get(path`/v2/stores/${storeID}/follow-up-chats`, { query, ...options });
  }

  /**
   * Deletes a follow up chat template.
   *
   * @example
   * ```ts
   * const followUpChat =
   *   await client.stores.followUpChats.delete(0, {
   *     store_id: 0,
   *   });
   * ```
   */
  delete(
    id: number,
    params: FollowUpChatDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FollowUpChatDeleteResponse> {
    const { store_id } = params;
    return this._client.delete(path`/v2/stores/${store_id}/follow-up-chats/${id}`, options);
  }
}

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
  code?: number;

  data?: FollowUpChatListResponse.Data;

  status?: string;
}

export namespace FollowUpChatListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
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

      wa_integration?: Result.WaIntegration;
    }

    export namespace Result {
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
}

export interface FollowUpChatDeleteResponse {
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
   * Store ID
   */
  store_id: number;
}

export interface FollowUpChatUpdateParams {
  /**
   * Path param: Store ID
   */
  store_id: number;

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

export interface FollowUpChatListParams {
  /**
   * Last ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;
}

export interface FollowUpChatDeleteParams {
  /**
   * Store ID
   */
  store_id: number;
}

export declare namespace FollowUpChats {
  export {
    type FollowUpChatCreateResponse as FollowUpChatCreateResponse,
    type FollowUpChatRetrieveResponse as FollowUpChatRetrieveResponse,
    type FollowUpChatUpdateResponse as FollowUpChatUpdateResponse,
    type FollowUpChatListResponse as FollowUpChatListResponse,
    type FollowUpChatDeleteResponse as FollowUpChatDeleteResponse,
    type FollowUpChatCreateParams as FollowUpChatCreateParams,
    type FollowUpChatRetrieveParams as FollowUpChatRetrieveParams,
    type FollowUpChatUpdateParams as FollowUpChatUpdateParams,
    type FollowUpChatListParams as FollowUpChatListParams,
    type FollowUpChatDeleteParams as FollowUpChatDeleteParams,
  };
}
