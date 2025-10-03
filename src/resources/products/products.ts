// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FollowUpChatsAPI from './follow-up-chats';
import {
  FollowUpChatCreateParams,
  FollowUpChatCreateResponse,
  FollowUpChatDeleteParams,
  FollowUpChatDeleteResponse,
  FollowUpChatGenerateResponse,
  FollowUpChatListParams,
  FollowUpChatListResponse,
  FollowUpChatListResponsesCursorPagination,
  FollowUpChatRetrieveParams,
  FollowUpChatRetrieveResponse,
  FollowUpChatUpdateParams,
  FollowUpChatUpdateResponse,
  FollowUpChats,
} from './follow-up-chats';
import * as PartnersAPI from './partners';
import {
  PartnerCreateParams,
  PartnerCreateResponse,
  PartnerDeleteParams,
  PartnerDeleteResponse,
  PartnerListParams,
  PartnerListResponse,
  PartnerListResponsesCursorPagination,
  Partners,
} from './partners';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Products extends APIResource {
  followUpChats: FollowUpChatsAPI.FollowUpChats = new FollowUpChatsAPI.FollowUpChats(this._client);
  partners: PartnersAPI.Partners = new PartnersAPI.Partners(this._client);

  /**
   * Creates a new product with the provided data.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/v2/products', { body, ...options });
  }

  /**
   * Retrieves the details of a single product, including its variants and other
   * associated data.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/v2/products/${id}`, options);
  }

  /**
   * Updates the details of a product, including its variants.
   */
  update(id: number, body: ProductUpdateParams, options?: RequestOptions): APIPromise<ProductUpdateResponse> {
    return this._client.patch(path`/v2/products/${id}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of products with optional filtering. The data is
   * sorted by id in descending order and cannot be changed. Uses cursor-based
   * pagination with default page size of 25 and maximum of 25.
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListResponsesCursorPagination, ProductListResponse> {
    return this._client.getAPIList('/v2/products', CursorPagination<ProductListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a product and all its associated data.
   */
  delete(id: number, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/v2/products/${id}`, options);
  }

  /**
   * Returns the total count of products.
   */
  count(
    query: ProductCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductCountResponse> {
    return this._client.get('/v2/products/count', { query, ...options });
  }

  /**
   * Retrieves a simplified paginated list of products with optional filtering. The
   * data is sorted by id in descending order and cannot be changed. Uses
   * cursor-based pagination with default page size of 25 and maximum of 25.
   */
  listSimplified(
    query: ProductListSimplifiedParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListSimplifiedResponsesCursorPagination, ProductListSimplifiedResponse> {
    return this._client.getAPIList(
      '/v2/products/simplified',
      CursorPagination<ProductListSimplifiedResponse>,
      { query, ...options },
    );
  }

  /**
   * Shows the relations of a product, including variants, stores, bundles, and
   * pages.
   */
  showRelations(productID: number, options?: RequestOptions): APIPromise<ProductShowRelationsResponse> {
    return this._client.get(path`/v2/products/${productID}/relations`, options);
  }

  /**
   * Updates the product sharing settings for a given product.
   */
  updateSharing(
    productID: number,
    body: ProductUpdateSharingParams,
    options?: RequestOptions,
  ): APIPromise<ProductUpdateSharingResponse> {
    return this._client.patch(path`/v2/products/${productID}/sharing`, { body, ...options });
  }
}

export type ProductListResponsesCursorPagination = CursorPagination<ProductListResponse>;

export type ProductListSimplifiedResponsesCursorPagination = CursorPagination<ProductListSimplifiedResponse>;

export interface ProductCreateResponse {
  code?: number;

  data?: ProductCreateResponse.Data;

  status?: string;
}

export namespace ProductCreateResponse {
  export interface Data {
    /**
     * Product ID
     */
    id?: number;

    business?: Data.Business;

    created_at?: string;

    created_by?: Data.CreatedBy;

    /**
     * Description
     */
    description?: string;

    /**
     * Product name for display
     */
    display?: string;

    images?: Array<string>;

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

    labels?: Array<Data.Label>;

    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Meta Thumbnail
     */
    meta_thumbnail?: string;

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

    product_birdsend_sequences?: Array<Data.ProductBirdsendSequence>;

    product_mailketing_lists?: Array<Data.ProductMailketingList>;

    /**
     * Product Public Name
     */
    public_name?: string;

    /**
     * Rich Description
     */
    rich_description?: string;

    /**
     * Product Slug
     */
    slug?: string;

    stores?: Array<Data.Store>;

    taxonomy?: Data.Taxonomy;

    /**
     * Product UUID
     */
    uuid?: string;

    variants?: Array<Data.Variant>;

    /**
     * Variants Count
     */
    variants_count?: number;

    warehouses?: Array<Data.Warehouse>;
  }

  export namespace Data {
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

    export interface CreatedBy {
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

    export interface Label {
      /**
       * Label name
       */
      name?: string;
    }

    export interface LastUpdatedBy {
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

    export interface ProductBirdsendSequence {
      birdsend_sequence?: ProductBirdsendSequence.BirdsendSequence;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductBirdsendSequence {
      export interface BirdsendSequence {
        /**
         * Birdsend sequence primary key
         */
        id?: number;

        /**
         * Indicates if the Birdsend sequence is active
         */
        active?: boolean;

        /**
         * Identifier of the associated form
         */
        form_id?: number;

        /**
         * Name of the Birdsend sequence
         */
        name?: string;

        /**
         * Identifier of the associated sequence
         */
        sequence_id?: number;

        /**
         * Type of the Birdsend sequence (either 'sequence' or 'form')
         */
        type?: 'sequence' | 'form';
      }
    }

    export interface ProductMailketingList {
      mailketing_list?: ProductMailketingList.MailketingList;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductMailketingList {
      export interface MailketingList {
        /**
         * Mailketing List ID
         */
        id?: number;

        /**
         * Mailketing List Name
         */
        list?: string;

        /**
         * Mailketing List Name
         */
        list_name?: string;
      }
    }

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

    export interface Taxonomy {
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

    export interface Variant {
      /**
       * Variant ID
       */
      id?: number;

      /**
       * Cost of Goods Sold
       */
      cogs?: number;

      /**
       * Cost of Goods Sold Before Tax
       */
      cogs_bt?: number;

      created_at?: string;

      /**
       * Variant Description
       */
      description?: string;

      digital_product_files?: Array<Variant.DigitalProductFile>;

      form_displays?: Array<Variant.FormDisplay>;

      /**
       * Variant Fullname
       */
      fullname?: string;

      images?: Array<string>;

      /**
       * Mark variant as sellable
       */
      is_checked?: boolean;

      /**
       * Is Editable
       */
      is_editable?: boolean;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      last_updated_at?: string;

      metadata?: { [key: string]: unknown };

      /**
       * Variant Name
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

      /**
       * Price Before Tax
       */
      price_bt?: number;

      /**
       * Product ID
       */
      product_id?: number;

      /**
       * Product Name
       */
      product_name?: string;

      /**
       * Reseller Price
       */
      reseller_price?: number;

      /**
       * Reseller Price Before Tax
       */
      reseller_price_bt?: number;

      /**
       * Variant Rich Description
       */
      rich_description?: string;

      self_file_urls?: Array<string>;

      /**
       * SKU
       */
      sku?: string;

      /**
       * Variant Unique ID
       */
      unique_id?: string;

      upsell_form_displays?: Array<Variant.UpsellFormDisplay>;

      /**
       * Variant UUID
       */
      uuid?: string;

      /**
       * Weight
       */
      weight?: number;
    }

    export namespace Variant {
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

      export interface FormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: FormDisplay.PageDisplay;
      }

      export namespace FormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }

      export interface UpsellFormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: UpsellFormDisplay.PageDisplay;
      }

      export namespace UpsellFormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      /**
       * Name of the warehouse
       */
      name?: string;
    }
  }
}

export interface ProductRetrieveResponse {
  code?: number;

  data?: ProductRetrieveResponse.Data;

  status?: string;
}

export namespace ProductRetrieveResponse {
  export interface Data {
    /**
     * Product ID
     */
    id?: number;

    business?: Data.Business;

    created_at?: string;

    created_by?: Data.CreatedBy;

    /**
     * Description
     */
    description?: string;

    /**
     * Product name for display
     */
    display?: string;

    images?: Array<string>;

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

    labels?: Array<Data.Label>;

    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Meta Thumbnail
     */
    meta_thumbnail?: string;

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

    product_birdsend_sequences?: Array<Data.ProductBirdsendSequence>;

    product_mailketing_lists?: Array<Data.ProductMailketingList>;

    /**
     * Product Public Name
     */
    public_name?: string;

    /**
     * Rich Description
     */
    rich_description?: string;

    /**
     * Product Slug
     */
    slug?: string;

    stores?: Array<Data.Store>;

    taxonomy?: Data.Taxonomy;

    /**
     * Product UUID
     */
    uuid?: string;

    variants?: Array<Data.Variant>;

    /**
     * Variants Count
     */
    variants_count?: number;

    warehouses?: Array<Data.Warehouse>;
  }

  export namespace Data {
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

    export interface CreatedBy {
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

    export interface Label {
      /**
       * Label name
       */
      name?: string;
    }

    export interface LastUpdatedBy {
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

    export interface ProductBirdsendSequence {
      birdsend_sequence?: ProductBirdsendSequence.BirdsendSequence;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductBirdsendSequence {
      export interface BirdsendSequence {
        /**
         * Birdsend sequence primary key
         */
        id?: number;

        /**
         * Indicates if the Birdsend sequence is active
         */
        active?: boolean;

        /**
         * Identifier of the associated form
         */
        form_id?: number;

        /**
         * Name of the Birdsend sequence
         */
        name?: string;

        /**
         * Identifier of the associated sequence
         */
        sequence_id?: number;

        /**
         * Type of the Birdsend sequence (either 'sequence' or 'form')
         */
        type?: 'sequence' | 'form';
      }
    }

    export interface ProductMailketingList {
      mailketing_list?: ProductMailketingList.MailketingList;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductMailketingList {
      export interface MailketingList {
        /**
         * Mailketing List ID
         */
        id?: number;

        /**
         * Mailketing List Name
         */
        list?: string;

        /**
         * Mailketing List Name
         */
        list_name?: string;
      }
    }

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

    export interface Taxonomy {
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

    export interface Variant {
      /**
       * Variant ID
       */
      id?: number;

      /**
       * Cost of Goods Sold
       */
      cogs?: number;

      /**
       * Cost of Goods Sold Before Tax
       */
      cogs_bt?: number;

      created_at?: string;

      /**
       * Variant Description
       */
      description?: string;

      digital_product_files?: Array<Variant.DigitalProductFile>;

      form_displays?: Array<Variant.FormDisplay>;

      /**
       * Variant Fullname
       */
      fullname?: string;

      images?: Array<string>;

      /**
       * Mark variant as sellable
       */
      is_checked?: boolean;

      /**
       * Is Editable
       */
      is_editable?: boolean;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      last_updated_at?: string;

      metadata?: { [key: string]: unknown };

      /**
       * Variant Name
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

      /**
       * Price Before Tax
       */
      price_bt?: number;

      /**
       * Product ID
       */
      product_id?: number;

      /**
       * Product Name
       */
      product_name?: string;

      /**
       * Reseller Price
       */
      reseller_price?: number;

      /**
       * Reseller Price Before Tax
       */
      reseller_price_bt?: number;

      /**
       * Variant Rich Description
       */
      rich_description?: string;

      self_file_urls?: Array<string>;

      /**
       * SKU
       */
      sku?: string;

      /**
       * Variant Unique ID
       */
      unique_id?: string;

      upsell_form_displays?: Array<Variant.UpsellFormDisplay>;

      /**
       * Variant UUID
       */
      uuid?: string;

      /**
       * Weight
       */
      weight?: number;
    }

    export namespace Variant {
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

      export interface FormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: FormDisplay.PageDisplay;
      }

      export namespace FormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }

      export interface UpsellFormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: UpsellFormDisplay.PageDisplay;
      }

      export namespace UpsellFormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      /**
       * Name of the warehouse
       */
      name?: string;
    }
  }
}

export interface ProductUpdateResponse {
  code?: number;

  data?: ProductUpdateResponse.Data;

  status?: string;
}

export namespace ProductUpdateResponse {
  export interface Data {
    /**
     * Product ID
     */
    id?: number;

    business?: Data.Business;

    created_at?: string;

    created_by?: Data.CreatedBy;

    /**
     * Description
     */
    description?: string;

    /**
     * Product name for display
     */
    display?: string;

    images?: Array<string>;

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

    labels?: Array<Data.Label>;

    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Meta Thumbnail
     */
    meta_thumbnail?: string;

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

    product_birdsend_sequences?: Array<Data.ProductBirdsendSequence>;

    product_mailketing_lists?: Array<Data.ProductMailketingList>;

    /**
     * Product Public Name
     */
    public_name?: string;

    /**
     * Rich Description
     */
    rich_description?: string;

    /**
     * Product Slug
     */
    slug?: string;

    stores?: Array<Data.Store>;

    taxonomy?: Data.Taxonomy;

    /**
     * Product UUID
     */
    uuid?: string;

    variants?: Array<Data.Variant>;

    /**
     * Variants Count
     */
    variants_count?: number;

    warehouses?: Array<Data.Warehouse>;
  }

  export namespace Data {
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

    export interface CreatedBy {
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

    export interface Label {
      /**
       * Label name
       */
      name?: string;
    }

    export interface LastUpdatedBy {
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

    export interface ProductBirdsendSequence {
      birdsend_sequence?: ProductBirdsendSequence.BirdsendSequence;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductBirdsendSequence {
      export interface BirdsendSequence {
        /**
         * Birdsend sequence primary key
         */
        id?: number;

        /**
         * Indicates if the Birdsend sequence is active
         */
        active?: boolean;

        /**
         * Identifier of the associated form
         */
        form_id?: number;

        /**
         * Name of the Birdsend sequence
         */
        name?: string;

        /**
         * Identifier of the associated sequence
         */
        sequence_id?: number;

        /**
         * Type of the Birdsend sequence (either 'sequence' or 'form')
         */
        type?: 'sequence' | 'form';
      }
    }

    export interface ProductMailketingList {
      mailketing_list?: ProductMailketingList.MailketingList;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductMailketingList {
      export interface MailketingList {
        /**
         * Mailketing List ID
         */
        id?: number;

        /**
         * Mailketing List Name
         */
        list?: string;

        /**
         * Mailketing List Name
         */
        list_name?: string;
      }
    }

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

    export interface Taxonomy {
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

    export interface Variant {
      /**
       * Variant ID
       */
      id?: number;

      /**
       * Cost of Goods Sold
       */
      cogs?: number;

      /**
       * Cost of Goods Sold Before Tax
       */
      cogs_bt?: number;

      created_at?: string;

      /**
       * Variant Description
       */
      description?: string;

      digital_product_files?: Array<Variant.DigitalProductFile>;

      form_displays?: Array<Variant.FormDisplay>;

      /**
       * Variant Fullname
       */
      fullname?: string;

      images?: Array<string>;

      /**
       * Mark variant as sellable
       */
      is_checked?: boolean;

      /**
       * Is Editable
       */
      is_editable?: boolean;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      last_updated_at?: string;

      metadata?: { [key: string]: unknown };

      /**
       * Variant Name
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

      /**
       * Price Before Tax
       */
      price_bt?: number;

      /**
       * Product ID
       */
      product_id?: number;

      /**
       * Product Name
       */
      product_name?: string;

      /**
       * Reseller Price
       */
      reseller_price?: number;

      /**
       * Reseller Price Before Tax
       */
      reseller_price_bt?: number;

      /**
       * Variant Rich Description
       */
      rich_description?: string;

      self_file_urls?: Array<string>;

      /**
       * SKU
       */
      sku?: string;

      /**
       * Variant Unique ID
       */
      unique_id?: string;

      upsell_form_displays?: Array<Variant.UpsellFormDisplay>;

      /**
       * Variant UUID
       */
      uuid?: string;

      /**
       * Weight
       */
      weight?: number;
    }

    export namespace Variant {
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

      export interface FormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: FormDisplay.PageDisplay;
      }

      export namespace FormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }

      export interface UpsellFormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: UpsellFormDisplay.PageDisplay;
      }

      export namespace UpsellFormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      /**
       * Name of the warehouse
       */
      name?: string;
    }
  }
}

export interface ProductListResponse {
  /**
   * Product primary key
   */
  id?: number;

  business?: ProductListResponse.Business;

  /**
   * Timestamp when the product was created
   */
  created_at?: string;

  created_by?: ProductListResponse.CreatedBy;

  /**
   * Detailed description of the product
   */
  description?: string;

  /**
   * Display name of the product
   */
  display?: string;

  /**
   * List of image URLs associated with the product
   */
  images?: Array<string>;

  /**
   * Indicates if the product is tracked in inventory
   */
  is_inventory?: boolean;

  /**
   * Indicates if the product has multiple variants
   */
  is_multiple?: boolean;

  /**
   * Indicates if the product is shared across businesses
   */
  is_product_sharing?: boolean;

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
   * Timestamp when the product was last updated
   */
  last_updated_at?: string;

  last_updated_by?: ProductListResponse.LastUpdatedBy;

  /**
   * Product name
   */
  name?: string;

  /**
   * Name of the first product option
   */
  option1_name?: string;

  /**
   * Name of the second product option
   */
  option2_name?: string;

  /**
   * Name of the third product option
   */
  option3_name?: string;

  /**
   * Product UUID
   */
  uuid?: string;

  /**
   * List of variants associated with the product
   */
  variants?: Array<ProductListResponse.Variant>;
}

export namespace ProductListResponse {
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

  export interface CreatedBy {
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

  export interface Label {
    /**
     * Label name
     */
    name?: string;
  }

  export interface LastUpdatedBy {
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

  export interface Variant {
    /**
     * Variant primary key
     */
    id?: number;

    /**
     * List of digital product files associated with the variant
     */
    digital_product_files?: Array<Variant.DigitalProductFile>;

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
     * Name of the associated product
     */
    product_name?: string;

    /**
     * List of self file URLs associated with the variant
     */
    self_file_urls?: Array<string>;

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

  export namespace Variant {
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
  }
}

export interface ProductDeleteResponse {
  code?: number;

  status?: string;
}

export interface ProductCountResponse {
  code?: number;

  data?: ProductCountResponse.Data;

  status?: string;
}

export namespace ProductCountResponse {
  export interface Data {
    /**
     * Total number of products
     */
    count?: number;
  }
}

export interface ProductListSimplifiedResponse {
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
   * If the request is made including `for_store_id` param, it shows
   * `is_owned_by_store` field in the response, indicating if the product is included
   * in the store.
   */
  is_owned_by_store?: boolean;

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
  labels?: Array<ProductListSimplifiedResponse.Label>;

  /**
   * Product name
   */
  name?: string;

  /**
   * Product UUID
   */
  uuid?: string;

  /**
   * List of variants associated with the product
   */
  variants?: Array<ProductListSimplifiedResponse.Variant>;
}

export namespace ProductListSimplifiedResponse {
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
     * List of digital product files associated with the variant
     */
    digital_product_files?: Array<Variant.DigitalProductFile>;

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
     * Name of the associated product
     */
    product_name?: string;

    /**
     * List of self file URLs associated with the variant
     */
    self_file_urls?: Array<string>;

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

  export namespace Variant {
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
  }
}

export interface ProductShowRelationsResponse {
  code?: number;

  data?: ProductShowRelationsResponse.Data;

  status?: string;
}

export namespace ProductShowRelationsResponse {
  export interface Data {
    /**
     * Product ID
     */
    id?: number;

    bundles?: Array<Data.Bundle>;

    /**
     * Product Name
     */
    name?: string;

    pages?: Data.Pages;

    stores?: Array<Data.Store>;

    variants?: Array<Data.Variant>;
  }

  export namespace Data {
    export interface Bundle {
      /**
       * Bundle ID
       */
      id?: number;

      /**
       * List of bundle price options
       */
      bundle_price_options?: Array<Bundle.BundlePriceOption>;

      business?: Bundle.Business;

      /**
       * Name
       */
      name?: string;

      /**
       * Pages associated with the bundle
       */
      pages?: Bundle.Pages;

      /**
       * List of stores associated with the bundle
       */
      stores?: Array<Bundle.Store>;
    }

    export namespace Bundle {
      export interface BundlePriceOption {
        /**
         * Bundle Price Option ID
         */
        id?: number;

        /**
         * Name
         */
        name?: string;

        /**
         * Bundle Price Option Unique ID
         */
        unique_id?: string;
      }

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

      /**
       * Pages associated with the bundle
       */
      export interface Pages {
        /**
         * All pages associated with the bundle
         */
        all?: Array<Pages.All>;

        /**
         * Pages that will be unpublished
         */
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

    export interface Variant {
      /**
       * Variant ID
       */
      id?: number;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      /**
       * Variant Name
       */
      name?: string;

      /**
       * Product Name
       */
      product_name?: string;
    }
  }
}

export interface ProductUpdateSharingResponse {
  code?: number;

  data?: ProductUpdateSharingResponse.Data;

  status?: string;
}

export namespace ProductUpdateSharingResponse {
  export interface Data {
    /**
     * Product ID
     */
    id?: number;

    business?: Data.Business;

    created_at?: string;

    created_by?: Data.CreatedBy;

    /**
     * Description
     */
    description?: string;

    /**
     * Product name for display
     */
    display?: string;

    images?: Array<string>;

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

    labels?: Array<Data.Label>;

    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Meta Thumbnail
     */
    meta_thumbnail?: string;

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

    product_birdsend_sequences?: Array<Data.ProductBirdsendSequence>;

    product_mailketing_lists?: Array<Data.ProductMailketingList>;

    /**
     * Product Public Name
     */
    public_name?: string;

    /**
     * Rich Description
     */
    rich_description?: string;

    /**
     * Product Slug
     */
    slug?: string;

    stores?: Array<Data.Store>;

    taxonomy?: Data.Taxonomy;

    /**
     * Product UUID
     */
    uuid?: string;

    variants?: Array<Data.Variant>;

    /**
     * Variants Count
     */
    variants_count?: number;

    warehouses?: Array<Data.Warehouse>;
  }

  export namespace Data {
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

    export interface CreatedBy {
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

    export interface Label {
      /**
       * Label name
       */
      name?: string;
    }

    export interface LastUpdatedBy {
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

    export interface ProductBirdsendSequence {
      birdsend_sequence?: ProductBirdsendSequence.BirdsendSequence;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductBirdsendSequence {
      export interface BirdsendSequence {
        /**
         * Birdsend sequence primary key
         */
        id?: number;

        /**
         * Indicates if the Birdsend sequence is active
         */
        active?: boolean;

        /**
         * Identifier of the associated form
         */
        form_id?: number;

        /**
         * Name of the Birdsend sequence
         */
        name?: string;

        /**
         * Identifier of the associated sequence
         */
        sequence_id?: number;

        /**
         * Type of the Birdsend sequence (either 'sequence' or 'form')
         */
        type?: 'sequence' | 'form';
      }
    }

    export interface ProductMailketingList {
      mailketing_list?: ProductMailketingList.MailketingList;

      /**
       * Order status
       */
      order_status?:
        | 'draft'
        | 'pending'
        | 'confirmed'
        | 'in_process'
        | 'ready'
        | 'shipped'
        | 'completed'
        | 'canceled'
        | 'rts'
        | 'closed';
    }

    export namespace ProductMailketingList {
      export interface MailketingList {
        /**
         * Mailketing List ID
         */
        id?: number;

        /**
         * Mailketing List Name
         */
        list?: string;

        /**
         * Mailketing List Name
         */
        list_name?: string;
      }
    }

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

    export interface Taxonomy {
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

    export interface Variant {
      /**
       * Variant ID
       */
      id?: number;

      /**
       * Cost of Goods Sold
       */
      cogs?: number;

      /**
       * Cost of Goods Sold Before Tax
       */
      cogs_bt?: number;

      created_at?: string;

      /**
       * Variant Description
       */
      description?: string;

      digital_product_files?: Array<Variant.DigitalProductFile>;

      form_displays?: Array<Variant.FormDisplay>;

      /**
       * Variant Fullname
       */
      fullname?: string;

      images?: Array<string>;

      /**
       * Mark variant as sellable
       */
      is_checked?: boolean;

      /**
       * Is Editable
       */
      is_editable?: boolean;

      /**
       * Type of the product item
       */
      item_type?: 'physical' | 'digital' | 'course';

      last_updated_at?: string;

      metadata?: { [key: string]: unknown };

      /**
       * Variant Name
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

      /**
       * Price Before Tax
       */
      price_bt?: number;

      /**
       * Product ID
       */
      product_id?: number;

      /**
       * Product Name
       */
      product_name?: string;

      /**
       * Reseller Price
       */
      reseller_price?: number;

      /**
       * Reseller Price Before Tax
       */
      reseller_price_bt?: number;

      /**
       * Variant Rich Description
       */
      rich_description?: string;

      self_file_urls?: Array<string>;

      /**
       * SKU
       */
      sku?: string;

      /**
       * Variant Unique ID
       */
      unique_id?: string;

      upsell_form_displays?: Array<Variant.UpsellFormDisplay>;

      /**
       * Variant UUID
       */
      uuid?: string;

      /**
       * Weight
       */
      weight?: number;
    }

    export namespace Variant {
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

      export interface FormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: FormDisplay.PageDisplay;
      }

      export namespace FormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }

      export interface UpsellFormDisplay {
        /**
         * Form Display ID
         */
        id?: number;

        page_display?: UpsellFormDisplay.PageDisplay;
      }

      export namespace UpsellFormDisplay {
        export interface PageDisplay {
          /**
           * Page Display ID
           */
          id?: number;

          page?: PageDisplay.Page;
        }

        export namespace PageDisplay {
          export interface Page {
            /**
             * Page ID
             */
            id?: number;

            /**
             * Is the page published?
             */
            is_published?: boolean;

            /**
             * Name of the page
             */
            name?: string;

            /**
             * Publication date of the page
             */
            published_at?: string;

            /**
             * Slug for the page URL
             */
            slug?: string;

            /**
             * ID of the store the page belongs to
             */
            store_id?: number;

            /**
             * Unique identifier for the page
             */
            unique_id?: string;
          }
        }
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      /**
       * Name of the warehouse
       */
      name?: string;
    }
  }
}

export interface ProductCreateParams {
  /**
   * Type of the product item
   */
  item_type: 'physical' | 'digital' | 'course';

  /**
   * Product Name
   */
  name: string;

  /**
   * Description
   */
  description?: string;

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
   * Meta Thumbnail
   */
  meta_thumbnail?: string;

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
   * Product Public Name
   */
  public_name?: string;

  /**
   * Rich Description
   */
  rich_description?: string;

  /**
   * Product Slug
   */
  slug?: string;

  /**
   * Taxonomy ID
   */
  taxonomy_id?: number;

  /**
   * List of variants associated with the product
   */
  variants?: Array<ProductCreateParams.Variant>;
}

export namespace ProductCreateParams {
  export interface Variant {
    /**
     * Price
     */
    price: number;

    /**
     * Weight in grams
     */
    weight: number;

    /**
     * Cost of Goods Sold
     */
    cogs?: number;

    /**
     * Variant Description
     */
    description?: string;

    /**
     * List of image URLs
     */
    images?: Array<string>;

    /**
     * Mark variant as sellable
     */
    is_checked?: boolean;

    /**
     * Additional metadata
     */
    metadata?: { [key: string]: unknown };

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
     * Reseller Price
     */
    reseller_price?: number;

    /**
     * Variant Rich Description
     */
    rich_description?: string;

    /**
     * List of self file URLs
     */
    self_file_urls?: Array<string>;

    /**
     * SKU
     */
    sku?: string;
  }
}

export interface ProductUpdateParams {
  /**
   * Type of the product item
   */
  item_type: 'physical' | 'digital' | 'course';

  /**
   * Product Name
   */
  name: string;

  /**
   * Description
   */
  description?: string;

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
   * Meta Thumbnail
   */
  meta_thumbnail?: string;

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
   * Product Public Name
   */
  public_name?: string;

  /**
   * Rich Description
   */
  rich_description?: string;

  /**
   * Product Slug
   */
  slug?: string;

  /**
   * Taxonomy ID
   */
  taxonomy_id?: number;

  /**
   * List of variants associated with the product
   */
  variants?: Array<ProductUpdateParams.Variant>;
}

export namespace ProductUpdateParams {
  export interface Variant {
    /**
     * Price
     */
    price: number;

    /**
     * Weight in grams
     */
    weight: number;

    /**
     * Cost of Goods Sold
     */
    cogs?: number;

    /**
     * Variant Description
     */
    description?: string;

    /**
     * List of image URLs
     */
    images?: Array<string>;

    /**
     * Mark variant as sellable
     */
    is_checked?: boolean;

    /**
     * Mark variant as deleted
     */
    is_deleted?: boolean;

    /**
     * Additional metadata
     */
    metadata?: { [key: string]: unknown };

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
     * Reseller Price
     */
    reseller_price?: number;

    /**
     * Variant Rich Description
     */
    rich_description?: string;

    /**
     * List of self file URLs
     */
    self_file_urls?: Array<string>;

    /**
     * SKU
     */
    sku?: string;

    /**
     * Variant ID for update; leave empty for create
     */
    variant_id?: number;
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
   * Type of quantity to filter by. Options are 'available_qty' (only products with
   * variants that have available quantity > 0)
   */
  qty_type?: 'available_qty';

  /**
   * Search term to filter products by name (case-insensitive, partial match)
   */
  search?: string;

  /**
   * Filter products associated with a specific store ID
   */
  store_id?: number;

  /**
   * Filter products associated with a specific warehouse ID
   */
  warehouse_id?: number;
}

export interface ProductCountParams {
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
   * Last order ID for cursor-based pagination
   */
  last_id?: number;

  /**
   * Number of items per page (default: 25, max: 25)
   */
  page_size?: number;

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
   * Filter products associated with a specific store ID
   */
  store_id?: number;

  /**
   * Filter products associated with a specific warehouse ID
   */
  warehouse_id?: number;
}

export interface ProductListSimplifiedParams extends CursorPaginationParams {
  /**
   * If provided, includes `is_owned_by_store` field in the bundle price options to
   * indicate if the option is already included in the specified store.
   */
  for_store_id?: number;

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
   * Type of quantity to filter by. Options are 'available_qty' (only products with
   * variants that have available quantity > 0)
   */
  qty_type?: 'available_qty';

  /**
   * Search term to filter products by name (case-insensitive, partial match)
   */
  search?: string;

  /**
   * Filter products associated with a specific store ID
   */
  store_id?: number;

  /**
   * Filter products associated with a specific warehouse ID
   */
  warehouse_id?: number;
}

export interface ProductUpdateSharingParams {
  /**
   * Is Product Sharing
   */
  is_product_sharing: boolean;
}

Products.FollowUpChats = FollowUpChats;
Products.Partners = Partners;

export declare namespace Products {
  export {
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductCountResponse as ProductCountResponse,
    type ProductListSimplifiedResponse as ProductListSimplifiedResponse,
    type ProductShowRelationsResponse as ProductShowRelationsResponse,
    type ProductUpdateSharingResponse as ProductUpdateSharingResponse,
    type ProductListResponsesCursorPagination as ProductListResponsesCursorPagination,
    type ProductListSimplifiedResponsesCursorPagination as ProductListSimplifiedResponsesCursorPagination,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductCountParams as ProductCountParams,
    type ProductListSimplifiedParams as ProductListSimplifiedParams,
    type ProductUpdateSharingParams as ProductUpdateSharingParams,
  };

  export {
    FollowUpChats as FollowUpChats,
    type FollowUpChatCreateResponse as FollowUpChatCreateResponse,
    type FollowUpChatRetrieveResponse as FollowUpChatRetrieveResponse,
    type FollowUpChatUpdateResponse as FollowUpChatUpdateResponse,
    type FollowUpChatListResponse as FollowUpChatListResponse,
    type FollowUpChatDeleteResponse as FollowUpChatDeleteResponse,
    type FollowUpChatGenerateResponse as FollowUpChatGenerateResponse,
    type FollowUpChatListResponsesCursorPagination as FollowUpChatListResponsesCursorPagination,
    type FollowUpChatCreateParams as FollowUpChatCreateParams,
    type FollowUpChatRetrieveParams as FollowUpChatRetrieveParams,
    type FollowUpChatUpdateParams as FollowUpChatUpdateParams,
    type FollowUpChatListParams as FollowUpChatListParams,
    type FollowUpChatDeleteParams as FollowUpChatDeleteParams,
  };

  export {
    Partners as Partners,
    type PartnerCreateResponse as PartnerCreateResponse,
    type PartnerListResponse as PartnerListResponse,
    type PartnerDeleteResponse as PartnerDeleteResponse,
    type PartnerListResponsesCursorPagination as PartnerListResponsesCursorPagination,
    type PartnerCreateParams as PartnerCreateParams,
    type PartnerListParams as PartnerListParams,
    type PartnerDeleteParams as PartnerDeleteParams,
  };
}
