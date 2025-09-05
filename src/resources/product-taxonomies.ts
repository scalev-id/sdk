// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ProductTaxonomies extends APIResource {
  /**
   * Shows a single product taxonomy by ID.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ProductTaxonomyRetrieveResponse> {
    return this._client.get(path`/v2/product-taxonomies/${id}`, options);
  }

  /**
   * Retrieves a paginated list of product taxonomies.
   */
  list(
    query: ProductTaxonomyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductTaxonomyListResponse> {
    return this._client.get('/v2/product-taxonomies', { query, ...options });
  }
}

export interface ProductTaxonomyRetrieveResponse {
  code?: number;

  data?: ProductTaxonomyRetrieveResponse.Data;

  status?: string;
}

export namespace ProductTaxonomyRetrieveResponse {
  export interface Data {
    /**
     * Taxonomy ID
     */
    id?: number;

    /**
     * Full Path
     */
    full_path?: string;

    /**
     * Level 1
     */
    level_1?: string;

    /**
     * Level 2
     */
    level_2?: string;

    /**
     * Level 3
     */
    level_3?: string;

    /**
     * Level 4
     */
    level_4?: string;

    /**
     * Level 5
     */
    level_5?: string;

    /**
     * Level 6
     */
    level_6?: string;

    /**
     * Level 7
     */
    level_7?: string;
  }
}

export interface ProductTaxonomyListResponse {
  code?: number;

  data?: ProductTaxonomyListResponse.Data;

  status?: string;
}

export namespace ProductTaxonomyListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * Taxonomy ID
       */
      id?: number;

      /**
       * Full Path
       */
      full_path?: string;

      /**
       * Level 1
       */
      level_1?: string;

      /**
       * Level 2
       */
      level_2?: string;

      /**
       * Level 3
       */
      level_3?: string;

      /**
       * Level 4
       */
      level_4?: string;

      /**
       * Level 5
       */
      level_5?: string;

      /**
       * Level 6
       */
      level_6?: string;

      /**
       * Level 7
       */
      level_7?: string;
    }
  }
}

export interface ProductTaxonomyListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of items per page
   */
  page_size?: number;

  /**
   * Search term to filter taxonomies by name (case-insensitive, partial match)
   */
  search?: string;
}

export declare namespace ProductTaxonomies {
  export {
    type ProductTaxonomyRetrieveResponse as ProductTaxonomyRetrieveResponse,
    type ProductTaxonomyListResponse as ProductTaxonomyListResponse,
    type ProductTaxonomyListParams as ProductTaxonomyListParams,
  };
}
