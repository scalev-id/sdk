// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class StoreAdvertisers extends APIResource {
  /**
   * Retrieves a paginated list of store advertisers associated with a specific
   * store. The data is sorted by id in descending order and cannot be changed. Uses
   * cursor-based pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * const storeAdvertisers =
   *   await client.stores.storeAdvertisers.list(1);
   * ```
   */
  list(
    storeID: number,
    query: StoreAdvertiserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoreAdvertiserListResponse> {
    return this._client.get(path`/v2/stores/${storeID}/store-advertisers`, { query, ...options });
  }

  /**
   * Associates one or more business users as store advertisers to a specific store.
   *
   * @example
   * ```ts
   * const response = await client.stores.storeAdvertisers.add(
   *   1,
   *   { advertiser_ids: [1, 2, 3] },
   * );
   * ```
   */
  add(
    storeID: number,
    body: StoreAdvertiserAddParams,
    options?: RequestOptions,
  ): APIPromise<StoreAdvertiserAddResponse> {
    return this._client.post(path`/v2/stores/${storeID}/store-advertisers`, { body, ...options });
  }

  /**
   * Dissociates a specific business user as a store advertiser from a store.
   *
   * @example
   * ```ts
   * const storeAdvertiser =
   *   await client.stores.storeAdvertisers.remove(1, {
   *     store_id: 1,
   *   });
   * ```
   */
  remove(
    buID: number,
    params: StoreAdvertiserRemoveParams,
    options?: RequestOptions,
  ): APIPromise<StoreAdvertiserRemoveResponse> {
    const { store_id } = params;
    return this._client.delete(path`/v2/stores/${store_id}/store-advertisers/${buID}`, options);
  }
}

export interface StoreAdvertiserListResponse {
  code?: number;

  data?: StoreAdvertiserListResponse.Data;

  status?: string;
}

export namespace StoreAdvertiserListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * The business user ID
       */
      id: number;

      /**
       * The business phone number
       */
      business_phone: string;

      role: Result.Role;

      user: Result.User;
    }

    export namespace Result {
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
  }
}

export interface StoreAdvertiserAddResponse {
  code?: number;

  status?: string;
}

export interface StoreAdvertiserRemoveResponse {
  code?: number;

  status?: string;
}

export interface StoreAdvertiserListParams {
  /**
   * Last store advertiser ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;
}

export interface StoreAdvertiserAddParams {
  /**
   * List of Business User IDs to associate as store advertisers with the store
   */
  advertiser_ids: Array<number>;
}

export interface StoreAdvertiserRemoveParams {
  /**
   * ID of the store from which the store advertiser will be removed
   */
  store_id: number;
}

export declare namespace StoreAdvertisers {
  export {
    type StoreAdvertiserListResponse as StoreAdvertiserListResponse,
    type StoreAdvertiserAddResponse as StoreAdvertiserAddResponse,
    type StoreAdvertiserRemoveResponse as StoreAdvertiserRemoveResponse,
    type StoreAdvertiserListParams as StoreAdvertiserListParams,
    type StoreAdvertiserAddParams as StoreAdvertiserAddParams,
    type StoreAdvertiserRemoveParams as StoreAdvertiserRemoveParams,
  };
}
