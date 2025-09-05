// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bpos extends APIResource {
  /**
   * Creates a new bundle price option associated with a specific bundle using the
   * provided data.
   */
  create(bundleID: number, body: BpoCreateParams, options?: RequestOptions): APIPromise<BpoCreateResponse> {
    return this._client.post(path`/v2/bundles/${bundleID}/bpos`, { body, ...options });
  }

  /**
   * Updates an existing bundle price option associated with a specific bundle using
   * the provided data.
   */
  update(id: number, params: BpoUpdateParams, options?: RequestOptions): APIPromise<BpoUpdateResponse> {
    const { bundle_id, ...body } = params;
    return this._client.patch(path`/v2/bundles/${bundle_id}/bpos/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of bundle price options associated with a specific
   * bundle. The data is sorted by id in descending order and cannot be changed. Uses
   * cursor-based pagination with default page size of 25 and maximum of 25.
   */
  list(
    bundleID: number,
    query: BpoListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BpoListResponse> {
    return this._client.get(path`/v2/bundles/${bundleID}/bpos`, { query, ...options });
  }

  /**
   * Deletes a bundle price option associated with a specific bundle by its ID.
   */
  delete(id: number, params: BpoDeleteParams, options?: RequestOptions): APIPromise<BpoDeleteResponse> {
    const { bundle_id } = params;
    return this._client.delete(path`/v2/bundles/${bundle_id}/bpos/${id}`, options);
  }

  /**
   * Retrieves a bundle price option along with its related entities such as
   * associated stores and form displays.
   */
  showRelations(
    id: number,
    params: BpoShowRelationsParams,
    options?: RequestOptions,
  ): APIPromise<BpoShowRelationsResponse> {
    const { bundle_id } = params;
    return this._client.get(path`/v2/bundles/${bundle_id}/bpos/${id}/relations`, options);
  }
}

export interface BpoCreateResponse {
  code?: number;

  data?: BpoCreateResponse.Data;

  status?: string;
}

export namespace BpoCreateResponse {
  export interface Data {
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
     * List of stores where the bundle price option is available
     */
    stores?: Array<Data.Store>;

    /**
     * Bundle Price Option Unique ID
     */
    unique_id?: string;
  }

  export namespace Data {
    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      custom_domain?: Store.CustomDomain;

      /**
       * Store name
       */
      name?: string;
    }

    export namespace Store {
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

export interface BpoUpdateResponse {
  code?: number;

  data?: BpoUpdateResponse.Data;

  status?: string;
}

export namespace BpoUpdateResponse {
  export interface Data {
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
     * List of stores where the bundle price option is available
     */
    stores?: Array<Data.Store>;

    /**
     * Bundle Price Option Unique ID
     */
    unique_id?: string;
  }

  export namespace Data {
    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      custom_domain?: Store.CustomDomain;

      /**
       * Store name
       */
      name?: string;
    }

    export namespace Store {
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

export interface BpoListResponse {
  code?: number;

  data?: BpoListResponse.Data;

  status?: string;
}

export namespace BpoListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
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
       * List of stores where the bundle price option is available
       */
      stores?: Array<Result.Store>;

      /**
       * Bundle Price Option Unique ID
       */
      unique_id?: string;
    }

    export namespace Result {
      export interface Store {
        /**
         * Store ID
         */
        id?: number;

        custom_domain?: Store.CustomDomain;

        /**
         * Store name
         */
        name?: string;
      }

      export namespace Store {
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
}

export interface BpoDeleteResponse {
  code?: number;

  status?: string;
}

export interface BpoShowRelationsResponse {
  code?: number;

  data?: BpoShowRelationsResponse.Data;

  status?: string;
}

export namespace BpoShowRelationsResponse {
  export interface Data {
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

    pages?: Data.Pages;

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
     * List of stores where the bundle price option is available
     */
    stores?: Array<Data.Store>;

    /**
     * Bundle Price Option Unique ID
     */
    unique_id?: string;
  }

  export namespace Data {
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

    export interface Store {
      /**
       * Store ID
       */
      id?: number;

      business?: Store.Business;

      /**
       * Store name
       */
      name?: string;

      /**
       * Unique identifier for the store
       */
      unique_id?: string;
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
  }
}

export interface BpoCreateParams {
  /**
   * Name
   */
  name: string;

  /**
   * Price (including tax)
   */
  price: number;

  /**
   * Slug
   */
  slug?: string;
}

export interface BpoUpdateParams {
  /**
   * Path param: Bundle ID
   */
  bundle_id: number;

  /**
   * Body param: Name
   */
  name: string;

  /**
   * Body param: Price (including tax)
   */
  price: number;

  /**
   * Body param: Slug
   */
  slug?: string;
}

export interface BpoListParams {
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

export interface BpoDeleteParams {
  /**
   * Bundle ID
   */
  bundle_id: number;
}

export interface BpoShowRelationsParams {
  /**
   * Bundle ID
   */
  bundle_id: number;
}

export declare namespace Bpos {
  export {
    type BpoCreateResponse as BpoCreateResponse,
    type BpoUpdateResponse as BpoUpdateResponse,
    type BpoListResponse as BpoListResponse,
    type BpoDeleteResponse as BpoDeleteResponse,
    type BpoShowRelationsResponse as BpoShowRelationsResponse,
    type BpoCreateParams as BpoCreateParams,
    type BpoUpdateParams as BpoUpdateParams,
    type BpoListParams as BpoListParams,
    type BpoDeleteParams as BpoDeleteParams,
    type BpoShowRelationsParams as BpoShowRelationsParams,
  };
}
