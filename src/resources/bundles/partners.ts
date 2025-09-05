// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Partners extends APIResource {
  /**
   * Retrieves a paginated list of partners associated with a specific bundle. The
   * data is sorted by id in descending order and cannot be changed. Uses
   * cursor-based pagination with default page size of 25 and maximum of 25.
   */
  list(
    bundleID: number,
    query: PartnerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartnerListResponse> {
    return this._client.get(path`/v2/bundles/${bundleID}/partners`, { query, ...options });
  }

  /**
   * Associates a partner with a specific bundle using the provided unique
   * identifier.
   */
  add(bundleID: number, body: PartnerAddParams, options?: RequestOptions): APIPromise<PartnerAddResponse> {
    return this._client.post(path`/v2/bundles/${bundleID}/partners`, { body, ...options });
  }

  /**
   * Dissociates a partner from a specific bundle by its ID.
   */
  remove(
    id: number,
    params: PartnerRemoveParams,
    options?: RequestOptions,
  ): APIPromise<PartnerRemoveResponse> {
    const { bundle_id } = params;
    return this._client.delete(path`/v2/bundles/${bundle_id}/partners/${id}`, options);
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
    export interface Result {
      /**
       * Bundle Partner ID
       */
      id: number;

      /**
       * Creation timestamp
       */
      created_at: string;

      partner: Result.Partner;
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

export interface PartnerAddResponse {
  code?: number;

  data?: PartnerAddResponse.Data;

  status?: string;
}

export namespace PartnerAddResponse {
  export interface Data {
    /**
     * Bundle Partner ID
     */
    id: number;

    /**
     * Creation timestamp
     */
    created_at: string;

    partner: Data.Partner;
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

export interface PartnerRemoveResponse {
  code?: number;

  status?: string;
}

export interface PartnerListParams {
  /**
   * The ID of the last item from the previous page. Used for cursor-based
   * pagination.
   */
  last_id?: number;

  /**
   * Number of items to return per page. Default is 25, maximum is 25.
   */
  page_size?: number;
}

export interface PartnerAddParams {
  /**
   * Unique identifier of the partner to associate
   */
  partner_unique_id: string;
}

export interface PartnerRemoveParams {
  /**
   * Bundle ID
   */
  bundle_id: number;
}

export declare namespace Partners {
  export {
    type PartnerListResponse as PartnerListResponse,
    type PartnerAddResponse as PartnerAddResponse,
    type PartnerRemoveResponse as PartnerRemoveResponse,
    type PartnerListParams as PartnerListParams,
    type PartnerAddParams as PartnerAddParams,
    type PartnerRemoveParams as PartnerRemoveParams,
  };
}
