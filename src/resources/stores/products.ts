// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Products extends APIResource {
  /**
   * Retrieves a paginated list of products available in a specific store. The data
   * is sorted by id in descending order and cannot be changed. Uses cursor-based
   * pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const productListResponse of client.stores.products.list(
   *   1,
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    storeID: number,
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListResponsesCursorPagination, ProductListResponse> {
    return this._client.getAPIList(
      path`/v2/stores/${storeID}/products`,
      CursorPagination<ProductListResponse>,
      { query, ...options },
    );
  }

  /**
   * Associates one or more products with a specific store.
   *
   * @example
   * ```ts
   * const response = await client.stores.products.add(1, {
   *   product_ids: [1, 2, 3],
   * });
   * ```
   */
  add(storeID: number, body: ProductAddParams, options?: RequestOptions): APIPromise<ProductAddResponse> {
    return this._client.post(path`/v2/stores/${storeID}/products`, { body, ...options });
  }

  /**
   * Dissociates a specific Product from a store.
   *
   * @example
   * ```ts
   * const product = await client.stores.products.remove(1, {
   *   store_id: 1,
   * });
   * ```
   */
  remove(
    id: number,
    params: ProductRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ProductRemoveResponse> {
    const { store_id } = params;
    return this._client.delete(path`/v2/stores/${store_id}/products/${id}`, options);
  }

  /**
   * Retrieves detailed relation of a specific Product associated with a store.
   *
   * @example
   * ```ts
   * const response = await client.stores.products.viewRelations(
   *   1,
   *   { store_id: 1 },
   * );
   * ```
   */
  viewRelations(
    id: number,
    params: ProductViewRelationsParams,
    options?: RequestOptions,
  ): APIPromise<ProductViewRelationsResponse> {
    const { store_id } = params;
    return this._client.get(path`/v2/stores/${store_id}/products/${id}/relations`, options);
  }
}

export type ProductListResponsesCursorPagination = CursorPagination<ProductListResponse>;

export interface ProductListResponse {
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
  labels?: Array<ProductListResponse.Label>;

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
  variants?: Array<ProductListResponse.Variant>;
}

export namespace ProductListResponse {
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

export interface ProductAddResponse {
  code?: number;

  status?: string;
}

export interface ProductRemoveResponse {
  code?: number;

  status?: string;
}

export interface ProductViewRelationsResponse {
  /**
   * Product ID
   */
  id?: number;

  /**
   * Product Name
   */
  name?: string;

  pages?: ProductViewRelationsResponse.Pages;
}

export namespace ProductViewRelationsResponse {
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

export interface ProductListParams extends CursorPaginationParams {
  /**
   * Show variants in products where is_checked is true or false
   */
  is_checked?: boolean;

  /**
   * Filter products by inventory tracking status (true or false)
   */
  is_inventory?: boolean;

  /**
   * Filter products by ownership. 'true' returns products owned by the business,
   * 'false' returns shared products
   */
  is_owned?: boolean;

  /**
   * Filter products by product sharing status (true or false)
   */
  is_product_sharing?: boolean;

  /**
   * Filter products by item type (physical, digital, course)
   */
  item_type?: 'physical' | 'digital' | 'course';

  /**
   * Filter products associated with a specific label name
   */
  label?: string;

  /**
   * Primary key of the order to validate if the products are applicable for that
   * order
   */
  order_id?: number;

  /**
   * Type of quantity to filter by. Options are 'available_qty' (only products with
   * variants that have available quantity > 0)
   */
  qty_type?: 'available_qty';

  /**
   * Search term to filter products by name (case-insensitive, partial match)
   */
  search?: string;

  /**
   * Filter products associated with a specific warehouse ID
   */
  warehouse_id?: number;
}

export interface ProductAddParams {
  /**
   * List of Product IDs to associate with the store
   */
  product_ids: Array<number>;
}

export interface ProductRemoveParams {
  /**
   * ID of the store from which the Product will be removed
   */
  store_id: number;
}

export interface ProductViewRelationsParams {
  /**
   * ID of the store containing the Product
   */
  store_id: number;
}

export declare namespace Products {
  export {
    type ProductListResponse as ProductListResponse,
    type ProductAddResponse as ProductAddResponse,
    type ProductRemoveResponse as ProductRemoveResponse,
    type ProductViewRelationsResponse as ProductViewRelationsResponse,
    type ProductListResponsesCursorPagination as ProductListResponsesCursorPagination,
    type ProductListParams as ProductListParams,
    type ProductAddParams as ProductAddParams,
    type ProductRemoveParams as ProductRemoveParams,
    type ProductViewRelationsParams as ProductViewRelationsParams,
  };
}
