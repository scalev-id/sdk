// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bundles extends APIResource {
  /**
   * Retrieves detailed information about a specific bundle in a store.
   *
   * @example
   * ```ts
   * const bundle = await client.stores.bundles.retrieve(1, {
   *   store_id: 1,
   * });
   * ```
   */
  retrieve(
    bundleID: number,
    params: BundleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BundleRetrieveResponse> {
    const { store_id, ...query } = params;
    return this._client.get(path`/v2/stores/${store_id}/bundles/${bundleID}`, { query, ...options });
  }

  /**
   * Retrieves a paginated list of bundles available in a specific store. The data is
   * sorted by id in descending order and cannot be changed. Uses cursor-based
   * pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * const bundles = await client.stores.bundles.list(1);
   * ```
   */
  list(
    storeID: number,
    query: BundleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleListResponse> {
    return this._client.get(path`/v2/stores/${storeID}/bundles`, { query, ...options });
  }
}

export interface BundleRetrieveResponse {
  /**
   * Bundle ID
   */
  id?: number;

  /**
   * Available Quantity
   */
  available_qty?: number;

  /**
   * List of Bundle Price Options
   */
  bundle_price_options?: Array<BundleRetrieveResponse.BundlePriceOption>;

  /**
   * List of Bundle Lines with Product details
   */
  bundlelines?: Array<BundleRetrieveResponse.Bundleline>;

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

export namespace BundleRetrieveResponse {
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

  export interface Bundleline {
    /**
     * Bundle Line ID
     */
    id?: number;

    /**
     * Quantity of the variant in the bundle line
     */
    quantity?: number;

    variant?: Bundleline.Variant;
  }

  export namespace Bundleline {
    export interface Variant {
      /**
       * Variant ID
       */
      id?: number;

      /**
       * Variant Description
       */
      description?: string;

      images?: Array<string>;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      metadata?: unknown;

      /**
       * Variant Fullname
       */
      name?: string;

      /**
       * Option 1 Value
       */
      option1_value?: string;

      /**
       * Option 2 Value
       */
      option2_value?: string;

      /**
       * Option 3 Value
       */
      option3_value?: string;

      /**
       * Price
       */
      price?: number;

      product?: Variant.Product;

      /**
       * Product ID
       */
      product_id?: number;

      /**
       * Product Name
       */
      product_name?: string;

      /**
       * Variant Rich Description
       */
      rich_description?: string;

      /**
       * SKU
       */
      sku?: string;

      /**
       * Variant Unique ID
       */
      unique_id?: string;

      /**
       * Weight
       */
      weight?: number;
    }

    export namespace Variant {
      export interface Product {
        /**
         * Product ID
         */
        id?: number;

        /**
         * Type of the product item
         */
        item_type?: 'physical' | 'digital' | 'course';

        /**
         * Product Name
         */
        name?: string;
      }
    }
  }
}

export interface BundleListResponse {
  code?: number;

  data?: BundleListResponse.Data;

  status?: string;
}

export namespace BundleListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * Bundle ID
       */
      id?: number;

      /**
       * Available Quantity
       */
      available_qty?: number;

      /**
       * List of Bundle Price Options
       */
      bundle_price_options?: Array<Result.BundlePriceOption>;

      /**
       * List of Bundle Lines with Product details
       */
      bundlelines?: Array<Result.Bundleline>;

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

    export namespace Result {
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

      export interface Bundleline {
        /**
         * Bundle Line ID
         */
        id?: number;

        /**
         * Quantity of the variant in the bundle line
         */
        quantity?: number;

        variant?: Bundleline.Variant;
      }

      export namespace Bundleline {
        export interface Variant {
          /**
           * Variant ID
           */
          id?: number;

          /**
           * Variant Description
           */
          description?: string;

          images?: Array<string>;

          /**
           * Type of the product item
           */
          item_type?: 'physical' | 'digital' | 'course';

          metadata?: unknown;

          /**
           * Variant Fullname
           */
          name?: string;

          /**
           * Option 1 Value
           */
          option1_value?: string;

          /**
           * Option 2 Value
           */
          option2_value?: string;

          /**
           * Option 3 Value
           */
          option3_value?: string;

          /**
           * Price
           */
          price?: number;

          product?: Variant.Product;

          /**
           * Product ID
           */
          product_id?: number;

          /**
           * Product Name
           */
          product_name?: string;

          /**
           * Variant Rich Description
           */
          rich_description?: string;

          /**
           * SKU
           */
          sku?: string;

          /**
           * Variant Unique ID
           */
          unique_id?: string;

          /**
           * Weight
           */
          weight?: number;
        }

        export namespace Variant {
          export interface Product {
            /**
             * Product ID
             */
            id?: number;

            /**
             * Type of the product item
             */
            item_type?: 'physical' | 'digital' | 'course';

            /**
             * Product Name
             */
            name?: string;
          }
        }
      }
    }
  }
}

export interface BundleRetrieveParams {
  /**
   * Path param: ID of the store containing the bundle
   */
  store_id: number;

  /**
   * Query param: Primary key of the order to validate if the bundle are applicable
   * for that order
   */
  order_id?: number;
}

export interface BundleListParams {
  /**
   * Filter bundles that are shared across businesses (true/false)
   */
  is_bundle_sharing?: boolean;

  /**
   * Filter bundles by a specific label
   */
  label?: string;

  /**
   * Last bundle ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Primary key of the order to validate if the bundles are applicable for that
   * order
   */
  order_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;

  /**
   * Search term to filter bundles by name or description (case-insensitive, partial
   * match)
   */
  search?: string;
}

export declare namespace Bundles {
  export {
    type BundleRetrieveResponse as BundleRetrieveResponse,
    type BundleListResponse as BundleListResponse,
    type BundleRetrieveParams as BundleRetrieveParams,
    type BundleListParams as BundleListParams,
  };
}
