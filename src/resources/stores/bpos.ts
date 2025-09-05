// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bpos extends APIResource {
  /**
   * Associates one or more bundle price options with a specific store.
   *
   * @example
   * ```ts
   * const response = await client.stores.bpos.add(1, {
   *   bpo_ids: [1, 2, 3],
   * });
   * ```
   */
  add(storeID: number, body: BpoAddParams, options?: RequestOptions): APIPromise<BpoAddResponse> {
    return this._client.post(path`/v2/stores/${storeID}/bpos`, { body, ...options });
  }

  /**
   * Dissociates a specific Bundle Price Option from a store.
   *
   * @example
   * ```ts
   * const bpo = await client.stores.bpos.remove(1, {
   *   store_id: 1,
   * });
   * ```
   */
  remove(id: number, params: BpoRemoveParams, options?: RequestOptions): APIPromise<BpoRemoveResponse> {
    const { store_id } = params;
    return this._client.delete(path`/v2/stores/${store_id}/bpos/${id}`, options);
  }

  /**
   * Retrieves detailed relation of a specific Bundle Price Option associated with a
   * store.
   *
   * @example
   * ```ts
   * const response = await client.stores.bpos.viewRelations(1, {
   *   store_id: 1,
   * });
   * ```
   */
  viewRelations(
    id: number,
    params: BpoViewRelationsParams,
    options?: RequestOptions,
  ): APIPromise<BpoViewRelationsResponse> {
    const { store_id } = params;
    return this._client.get(path`/v2/stores/${store_id}/bpos/${id}/relations`, options);
  }
}

export interface BpoAddResponse {
  code?: number;

  status?: string;
}

export interface BpoRemoveResponse {
  code?: number;

  status?: string;
}

export interface BpoViewRelationsResponse {
  /**
   * Bundle Price Option ID
   */
  id?: number;

  /**
   * Bundle ID
   */
  bundle_id?: number;

  /**
   * Name
   */
  name?: string;

  pages?: BpoViewRelationsResponse.Pages;

  /**
   * Slug
   */
  slug?: string;

  /**
   * Bundle Price Option Unique ID
   */
  unique_id?: string;
}

export namespace BpoViewRelationsResponse {
  export interface Pages {
    all?: Array<Pages.All>;

    will_unpublish?: Array<Pages.WillUnpublish>;
  }

  export namespace Pages {
    export interface All {
      /**
       * Page ID
       */
      id?: number;

      business?: All.Business;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export namespace All {
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

    export interface WillUnpublish {
      /**
       * Page ID
       */
      id?: number;

      business?: WillUnpublish.Business;

      /**
       * Name of the page
       */
      name?: string;

      /**
       * Slug for the page URL
       */
      slug?: string;

      /**
       * Unique identifier for the page
       */
      unique_id?: string;
    }

    export namespace WillUnpublish {
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

export interface BpoAddParams {
  /**
   * List of Bundle Price Option IDs to associate with the store
   */
  bpo_ids: Array<number>;
}

export interface BpoRemoveParams {
  /**
   * ID of the store from which the Bundle Price Option will be removed
   */
  store_id: number;
}

export interface BpoViewRelationsParams {
  /**
   * ID of the store containing the Bundle Price Option
   */
  store_id: number;
}

export declare namespace Bpos {
  export {
    type BpoAddResponse as BpoAddResponse,
    type BpoRemoveResponse as BpoRemoveResponse,
    type BpoViewRelationsResponse as BpoViewRelationsResponse,
    type BpoAddParams as BpoAddParams,
    type BpoRemoveParams as BpoRemoveParams,
    type BpoViewRelationsParams as BpoViewRelationsParams,
  };
}
