// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DigitalProductFilesAPI from './digital-product-files';
import {
  DigitalProductFileCreateParams,
  DigitalProductFileCreateResponse,
  DigitalProductFileDeleteParams,
  DigitalProductFileDeleteResponse,
  DigitalProductFileListParams,
  DigitalProductFileListResponse,
  DigitalProductFileRetrieveParams,
  DigitalProductFileRetrieveResponse,
  DigitalProductFiles,
} from './digital-product-files';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Variants extends APIResource {
  digitalProductFiles: DigitalProductFilesAPI.DigitalProductFiles =
    new DigitalProductFilesAPI.DigitalProductFiles(this._client);

  /**
   * Shows a single product variant by ID.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<VariantRetrieveResponse> {
    return this._client.get(path`/v2/variants/${id}`, options);
  }
}

export interface VariantRetrieveResponse {
  code?: number;

  data?: VariantRetrieveResponse.Data;

  status?: string;
}

export namespace VariantRetrieveResponse {
  export interface Data {
    /**
     * Variant primary key
     */
    id?: number;

    /**
     * Cost of Goods Sold
     */
    cogs?: number;

    /**
     * Cost of Goods Sold before tax
     */
    cogs_bt?: number;

    /**
     * Timestamp when the variant was created
     */
    created_at?: string;

    /**
     * List of digital product files associated with the variant
     */
    digital_product_files?: Array<Data.DigitalProductFile>;

    /**
     * Display name for the variant
     */
    display?: string;

    /**
     * Full name of the variant
     */
    fullname?: string;

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
     * Timestamp when the variant was last updated
     */
    last_updated_at?: string;

    /**
     * Additional metadata associated with the variant
     */
    metadata?: { [key: string]: unknown };

    /**
     * Full name of the variant
     */
    name?: string;

    /**
     * Value of the first product option
     */
    option1_value?: string;

    /**
     * Value of the second product option
     */
    option2_value?: string;

    /**
     * Value of the third product option
     */
    option3_value?: string;

    /**
     * Price of the variant
     */
    price?: number;

    /**
     * Price before tax
     */
    price_bt?: number;

    product?: Data.Product;

    /**
     * Name of the associated product
     */
    product_name?: string;

    /**
     * Reseller price of the variant
     */
    reseller_price?: number;

    /**
     * Reseller price before tax
     */
    reseller_price_bt?: number;

    /**
     * List of self file URLs associated with the variant
     */
    self_file_urls?: Array<string>;

    /**
     * Stock Keeping Unit
     */
    sku?: string;

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

  export namespace Data {
    export interface DigitalProductFile {
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

    export interface Product {
      /**
       * Product ID
       */
      id?: number;

      business?: Product.Business;

      /**
       * Description
       */
      description?: string;

      /**
       * Product name for display
       */
      display?: string;

      /**
       * Is Inventory
       */
      is_inventory?: boolean;

      /**
       * Is Multiple
       */
      is_multiple?: boolean;

      /**
       * Is Product Sharing
       */
      is_product_sharing?: boolean;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      /**
       * Item Type Name
       */
      item_type_name?: string;

      /**
       * Product Name
       */
      name?: string;

      /**
       * Option 1 Name
       */
      option1_name?: string;

      /**
       * Option 2 Name
       */
      option2_name?: string;

      /**
       * Option 3 Name
       */
      option3_name?: string;

      /**
       * Product UUID
       */
      uuid?: string;
    }

    export namespace Product {
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

Variants.DigitalProductFiles = DigitalProductFiles;

export declare namespace Variants {
  export { type VariantRetrieveResponse as VariantRetrieveResponse };

  export {
    DigitalProductFiles as DigitalProductFiles,
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
