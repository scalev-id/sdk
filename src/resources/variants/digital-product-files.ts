// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class DigitalProductFiles extends APIResource {
  /**
   * Creates a new digital product file.
   */
  create(
    variantID: number,
    body: DigitalProductFileCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DigitalProductFileCreateResponse> {
    return this._client.post(
      path`/v2/variants/${variantID}/digital-product-files`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Shows a single digital product file by ID.
   */
  retrieve(
    id: number,
    params: DigitalProductFileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DigitalProductFileRetrieveResponse> {
    const { variant_id } = params;
    return this._client.get(path`/v2/variants/${variant_id}/digital-product-files/${id}`, options);
  }

  /**
   * Retrieves a paginated list of digital product files for a variant.
   */
  list(
    variantID: number,
    query: DigitalProductFileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DigitalProductFileListResponse> {
    return this._client.get(path`/v2/variants/${variantID}/digital-product-files`, { query, ...options });
  }

  /**
   * Deletes a digital product file.
   */
  delete(
    id: number,
    params: DigitalProductFileDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DigitalProductFileDeleteResponse> {
    const { variant_id } = params;
    return this._client.delete(path`/v2/variants/${variant_id}/digital-product-files/${id}`, options);
  }
}

export interface DigitalProductFileCreateResponse {
  code?: number;

  data?: DigitalProductFileCreateResponse.Data;

  status?: string;
}

export namespace DigitalProductFileCreateResponse {
  export interface Data {
    /**
     * Digital product file primary key
     */
    id?: number;

    /**
     * MIME type of the digital product file
     */
    content_type?: string;

    /**
     * File name of the digital product file
     */
    name?: string;

    /**
     * Size of the digital product file in bytes
     */
    size_in_bytes?: number;

    /**
     * URL to access the digital product file
     */
    url?: string;
  }
}

export interface DigitalProductFileRetrieveResponse {
  code?: number;

  data?: DigitalProductFileRetrieveResponse.Data;

  status?: string;
}

export namespace DigitalProductFileRetrieveResponse {
  export interface Data {
    /**
     * Digital product file primary key
     */
    id?: number;

    /**
     * MIME type of the digital product file
     */
    content_type?: string;

    /**
     * File name of the digital product file
     */
    name?: string;

    /**
     * Size of the digital product file in bytes
     */
    size_in_bytes?: number;

    /**
     * URL to access the digital product file
     */
    url?: string;
  }
}

export interface DigitalProductFileListResponse {
  code?: number;

  data?: DigitalProductFileListResponse.Data;

  status?: string;
}

export namespace DigitalProductFileListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * Digital product file primary key
       */
      id?: number;

      /**
       * MIME type of the digital product file
       */
      content_type?: string;

      /**
       * File name of the digital product file
       */
      name?: string;

      /**
       * Size of the digital product file in bytes
       */
      size_in_bytes?: number;

      /**
       * URL to access the digital product file
       */
      url?: string;
    }
  }
}

export interface DigitalProductFileDeleteResponse {
  code?: number;

  data?: DigitalProductFileDeleteResponse.Data;

  status?: string;
}

export namespace DigitalProductFileDeleteResponse {
  export interface Data {
    /**
     * Digital product file primary key
     */
    id?: number;

    /**
     * MIME type of the digital product file
     */
    content_type?: string;

    /**
     * File name of the digital product file
     */
    name?: string;

    /**
     * Size of the digital product file in bytes
     */
    size_in_bytes?: number;

    /**
     * URL to access the digital product file
     */
    url?: string;
  }
}

export interface DigitalProductFileCreateParams {
  file?: Uploadable;
}

export interface DigitalProductFileRetrieveParams {
  /**
   * Variant ID
   */
  variant_id: number;
}

export interface DigitalProductFileListParams {
  /**
   * Last ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;
}

export interface DigitalProductFileDeleteParams {
  /**
   * Variant ID
   */
  variant_id: number;
}

export declare namespace DigitalProductFiles {
  export {
    type DigitalProductFileCreateResponse as DigitalProductFileCreateResponse,
    type DigitalProductFileRetrieveResponse as DigitalProductFileRetrieveResponse,
    type DigitalProductFileListResponse as DigitalProductFileListResponse,
    type DigitalProductFileDeleteResponse as DigitalProductFileDeleteResponse,
    type DigitalProductFileCreateParams as DigitalProductFileCreateParams,
    type DigitalProductFileRetrieveParams as DigitalProductFileRetrieveParams,
    type DigitalProductFileListParams as DigitalProductFileListParams,
    type DigitalProductFileDeleteParams as DigitalProductFileDeleteParams,
  };
}
