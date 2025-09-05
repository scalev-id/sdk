// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Partners extends APIResource {
  /**
   * Creates a new product partner.
   */
  create(
    productID: number,
    body: PartnerCreateParams,
    options?: RequestOptions,
  ): APIPromise<PartnerCreateResponse> {
    return this._client.post(path`/v2/products/${productID}/partners`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of product partners.
   */
  list(
    productID: number,
    query: PartnerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartnerListResponse> {
    return this._client.get(path`/v2/products/${productID}/partners`, { query, ...options });
  }

  /**
   * Deletes a product partner.
   */
  delete(
    id: number,
    params: PartnerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PartnerDeleteResponse> {
    const { product_id } = params;
    return this._client.delete(path`/v2/products/${product_id}/partners/${id}`, options);
  }
}

export interface PartnerCreateResponse {
  code?: number;

  /**
   * A partner associated with a product
   */
  data?: PartnerCreateResponse.Data;

  status?: string;
}

export namespace PartnerCreateResponse {
  /**
   * A partner associated with a product
   */
  export interface Data {
    /**
     * Unique identifier of the product partner
     */
    id?: number;

    /**
     * Timestamp when the product partner was created
     */
    created_at?: string;

    partner?: Data.Partner;
  }

  export namespace Data {
    export interface Partner {
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

export interface PartnerListResponse {
  code?: number;

  data?: PartnerListResponse.Data;

  status?: string;
}

export namespace PartnerListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    /**
     * A partner associated with a product
     */
    export interface Result {
      /**
       * Unique identifier of the product partner
       */
      id?: number;

      /**
       * Timestamp when the product partner was created
       */
      created_at?: string;

      partner?: Result.Partner;
    }

    export namespace Result {
      export interface Partner {
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

export interface PartnerDeleteResponse {
  code?: number;

  status?: string;
}

export interface PartnerCreateParams {
  /**
   * Partner Unique ID
   */
  partner_unique_id: string;
}

export interface PartnerListParams {
  /**
   * Last ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;
}

export interface PartnerDeleteParams {
  /**
   * Product ID
   */
  product_id: number;
}

export declare namespace Partners {
  export {
    type PartnerCreateResponse as PartnerCreateResponse,
    type PartnerListResponse as PartnerListResponse,
    type PartnerDeleteResponse as PartnerDeleteResponse,
    type PartnerCreateParams as PartnerCreateParams,
    type PartnerListParams as PartnerListParams,
    type PartnerDeleteParams as PartnerDeleteParams,
  };
}
