// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BposAPI from './bpos';
import {
  BpoCreateParams,
  BpoCreateResponse,
  BpoDeleteParams,
  BpoDeleteResponse,
  BpoListParams,
  BpoListResponse,
  BpoShowRelationsParams,
  BpoShowRelationsResponse,
  BpoUpdateParams,
  BpoUpdateResponse,
  Bpos,
} from './bpos';
import * as FollowUpChatsAPI from './follow-up-chats';
import {
  FollowUpChatCreateParams,
  FollowUpChatCreateResponse,
  FollowUpChatDeleteParams,
  FollowUpChatDeleteResponse,
  FollowUpChatGenerateResponse,
  FollowUpChatListParams,
  FollowUpChatListResponse,
  FollowUpChatRetrieveParams,
  FollowUpChatRetrieveResponse,
  FollowUpChatUpdateParams,
  FollowUpChatUpdateResponse,
  FollowUpChats,
} from './follow-up-chats';
import * as PartnersAPI from './partners';
import {
  PartnerAddParams,
  PartnerAddResponse,
  PartnerListParams,
  PartnerListResponse,
  PartnerRemoveParams,
  PartnerRemoveResponse,
  Partners,
} from './partners';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bundles extends APIResource {
  bpos: BposAPI.Bpos = new BposAPI.Bpos(this._client);
  followUpChats: FollowUpChatsAPI.FollowUpChats = new FollowUpChatsAPI.FollowUpChats(this._client);
  partners: PartnersAPI.Partners = new PartnersAPI.Partners(this._client);

  /**
   * Creates a new bundle with the provided data.
   */
  create(body: BundleCreateParams, options?: RequestOptions): APIPromise<BundleCreateResponse> {
    return this._client.post('/v2/bundles', { body, ...options });
  }

  /**
   * Retrieves a bundle by its ID.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<BundleRetrieveResponse> {
    return this._client.get(path`/v2/bundles/${id}`, options);
  }

  /**
   * Retrieves a paginated list of bundles with optional filtering. The data is
   * sorted by id in descending order and cannot be changed. Uses cursor-based
   * pagination with default page size of 25 and maximum of 25.
   */
  list(
    query: BundleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleListResponse> {
    return this._client.get('/v2/bundles', { query, ...options });
  }

  /**
   * Deletes a bundle by its ID.
   */
  delete(id: number, options?: RequestOptions): APIPromise<BundleDeleteResponse> {
    return this._client.delete(path`/v2/bundles/${id}`, options);
  }

  /**
   * Retrieves the total count of bundles for the authenticated business. This
   * endpoint does not support any filtering or pagination.
   */
  count(
    query: BundleCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleCountResponse> {
    return this._client.get('/v2/bundles/count', { query, ...options });
  }

  /**
   * Retrieves a paginated list of bundles with optional filtering. The data is
   * sorted by id in descending order and cannot be changed. Uses cursor-based
   * pagination with default page size of 25 and maximum of 25. This endpoint returns
   * a simplified version of the bundle data, including only essential fields and
   * active bundle price options.
   */
  listSimplified(
    query: BundleListSimplifiedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleListSimplifiedResponse> {
    return this._client.get('/v2/bundles/simplified', { query, ...options });
  }

  /**
   * Retrieves a bundle along with its related entities such as active bundle price
   * options and their associated stores and form displays.
   */
  showRelations(bundleID: number, options?: RequestOptions): APIPromise<BundleShowRelationsResponse> {
    return this._client.get(path`/v2/bundles/${bundleID}/relations`, options);
  }

  /**
   * Updates the sharing setting of an existing bundle.
   */
  updateSharing(
    bundleID: number,
    body: BundleUpdateSharingParams,
    options?: RequestOptions,
  ): APIPromise<BundleUpdateSharingResponse> {
    return this._client.patch(path`/v2/bundles/${bundleID}/sharing`, { body, ...options });
  }
}

export interface BundleCreateResponse {
  code?: number;

  data?: BundleCreateResponse.Data;

  status?: string;
}

export namespace BundleCreateResponse {
  export interface Data {
    /**
     * Bundle ID
     */
    id?: number;

    /**
     * List of Bundle Price Options
     */
    bundle_price_options?: Array<Data.BundlePriceOption>;

    /**
     * List of Bundle Lines with Product details
     */
    bundlelines?: Array<Data.Bundleline>;

    business?: Data.Business;

    /**
     * Creation timestamp
     */
    created_at?: string;

    created_by?: Data.CreatedBy;

    /**
     * Custom Identifier
     */
    custom_id?: string;

    /**
     * Description
     */
    description?: string;

    /**
     * List of Image URLs
     */
    images?: Array<string>;

    /**
     * Is Bundle Sharing Enabled
     */
    is_bundle_sharing?: boolean;

    /**
     * List of labels associated with the product
     */
    labels?: Array<Data.Label>;

    /**
     * Last update timestamp
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Meta Thumbnail URL
     */
    meta_thumbnail?: string;

    /**
     * Name
     */
    name?: string;

    /**
     * Public Name
     */
    public_name?: string;

    /**
     * Rich Description
     */
    rich_description?: string;

    /**
     * Weight Bump
     */
    weight_bump?: number;
  }

  export namespace Data {
    export interface BundlePriceOption {
      /**
       * Bundle Price Option ID
       */
      id?: number;

      /**
       * List of form displays associated with the bundle price option
       */
      form_displays?: Array<BundlePriceOption.FormDisplay>;

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
      stores?: Array<BundlePriceOption.Store>;

      /**
       * Bundle Price Option Unique ID
       */
      unique_id?: string;

      /**
       * sell form displays associated with the bundle price option
       */
      upsell_form_displays?: Array<BundlePriceOption.UpsellFormDisplay>;
    }

    export namespace BundlePriceOption {
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

    export interface Bundleline {
      /**
       * Bundle Line ID
       */
      id?: number;

      /**
       * Quantity of the variant in the bundle line
       */
      quantity?: number;

      /**
       * Subtotal price for the bundle line (variant price \* quantity)
       */
      subtotal?: string;

      variant?: Bundleline.Variant;
    }

    export namespace Bundleline {
      export interface Variant {
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
        digital_product_files?: Array<Variant.DigitalProductFile>;

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

        product?: Variant.Product;

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
  }
}

export interface BundleRetrieveResponse {
  code?: number;

  data?: BundleRetrieveResponse.Data;

  status?: string;
}

export namespace BundleRetrieveResponse {
  export interface Data {
    /**
     * Bundle ID
     */
    id?: number;

    /**
     * List of Bundle Price Options
     */
    bundle_price_options?: Array<Data.BundlePriceOption>;

    /**
     * List of Bundle Lines with Product details
     */
    bundlelines?: Array<Data.Bundleline>;

    business?: Data.Business;

    /**
     * Creation timestamp
     */
    created_at?: string;

    created_by?: Data.CreatedBy;

    /**
     * Custom Identifier
     */
    custom_id?: string;

    /**
     * Description
     */
    description?: string;

    /**
     * List of Image URLs
     */
    images?: Array<string>;

    /**
     * Is Bundle Sharing Enabled
     */
    is_bundle_sharing?: boolean;

    /**
     * List of labels associated with the product
     */
    labels?: Array<Data.Label>;

    /**
     * Last update timestamp
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Meta Thumbnail URL
     */
    meta_thumbnail?: string;

    /**
     * Name
     */
    name?: string;

    /**
     * Public Name
     */
    public_name?: string;

    /**
     * Rich Description
     */
    rich_description?: string;

    /**
     * Weight Bump
     */
    weight_bump?: number;
  }

  export namespace Data {
    export interface BundlePriceOption {
      /**
       * Bundle Price Option ID
       */
      id?: number;

      /**
       * List of form displays associated with the bundle price option
       */
      form_displays?: Array<BundlePriceOption.FormDisplay>;

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
      stores?: Array<BundlePriceOption.Store>;

      /**
       * Bundle Price Option Unique ID
       */
      unique_id?: string;

      /**
       * sell form displays associated with the bundle price option
       */
      upsell_form_displays?: Array<BundlePriceOption.UpsellFormDisplay>;
    }

    export namespace BundlePriceOption {
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

    export interface Bundleline {
      /**
       * Bundle Line ID
       */
      id?: number;

      /**
       * Quantity of the variant in the bundle line
       */
      quantity?: number;

      /**
       * Subtotal price for the bundle line (variant price \* quantity)
       */
      subtotal?: string;

      variant?: Bundleline.Variant;
    }

    export namespace Bundleline {
      export interface Variant {
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
        digital_product_files?: Array<Variant.DigitalProductFile>;

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

        product?: Variant.Product;

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

      business?: Result.Business;

      /**
       * Creation timestamp
       */
      created_at?: string;

      created_by?: Result.CreatedBy;

      /**
       * Custom Identifier
       */
      custom_id?: string;

      /**
       * Description
       */
      description?: string;

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
       * Last update timestamp
       */
      last_updated_at?: string;

      last_updated_by?: Result.LastUpdatedBy;

      /**
       * Name
       */
      name?: string;

      /**
       * Public Name
       */
      public_name?: string;

      /**
       * Number of variants in the bundle
       */
      variants_count?: number;

      /**
       * Weight Bump
       */
      weight_bump?: number;
    }

    export namespace Result {
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
    }
  }
}

export interface BundleDeleteResponse {
  code?: number;

  status?: string;
}

export interface BundleCountResponse {
  code?: number;

  data?: BundleCountResponse.Data;

  status?: string;
}

export namespace BundleCountResponse {
  export interface Data {
    /**
     * Total number of bundles
     */
    count?: number;
  }
}

export interface BundleListSimplifiedResponse {
  code?: number;

  data?: BundleListSimplifiedResponse.Data;

  status?: string;
}

export namespace BundleListSimplifiedResponse {
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
       * List of Bundle Price Options
       */
      bundle_price_options?: Array<Result.BundlePriceOption>;

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
    }
  }
}

export interface BundleShowRelationsResponse {
  code?: number;

  data?: BundleShowRelationsResponse.Data;

  status?: string;
}

export namespace BundleShowRelationsResponse {
  export interface Data {
    /**
     * Bundle ID
     */
    id?: number;

    /**
     * List of bundle price options
     */
    bundle_price_options?: Array<Data.BundlePriceOption>;

    business?: Data.Business;

    /**
     * Name
     */
    name?: string;

    /**
     * Pages associated with the bundle
     */
    pages?: Data.Pages;

    /**
     * List of stores associated with the bundle
     */
    stores?: Array<Data.Store>;
  }

  export namespace Data {
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
}

export interface BundleUpdateSharingResponse {
  code?: number;

  data?: BundleUpdateSharingResponse.Data;

  status?: string;
}

export namespace BundleUpdateSharingResponse {
  export interface Data {
    /**
     * Bundle ID
     */
    id?: number;

    /**
     * List of Bundle Price Options
     */
    bundle_price_options?: Array<Data.BundlePriceOption>;

    /**
     * List of Bundle Lines with Product details
     */
    bundlelines?: Array<Data.Bundleline>;

    business?: Data.Business;

    /**
     * Creation timestamp
     */
    created_at?: string;

    created_by?: Data.CreatedBy;

    /**
     * Custom Identifier
     */
    custom_id?: string;

    /**
     * Description
     */
    description?: string;

    /**
     * List of Image URLs
     */
    images?: Array<string>;

    /**
     * Is Bundle Sharing Enabled
     */
    is_bundle_sharing?: boolean;

    /**
     * List of labels associated with the product
     */
    labels?: Array<Data.Label>;

    /**
     * Last update timestamp
     */
    last_updated_at?: string;

    last_updated_by?: Data.LastUpdatedBy;

    /**
     * Meta Thumbnail URL
     */
    meta_thumbnail?: string;

    /**
     * Name
     */
    name?: string;

    /**
     * Public Name
     */
    public_name?: string;

    /**
     * Rich Description
     */
    rich_description?: string;

    /**
     * Weight Bump
     */
    weight_bump?: number;
  }

  export namespace Data {
    export interface BundlePriceOption {
      /**
       * Bundle Price Option ID
       */
      id?: number;

      /**
       * List of form displays associated with the bundle price option
       */
      form_displays?: Array<BundlePriceOption.FormDisplay>;

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
      stores?: Array<BundlePriceOption.Store>;

      /**
       * Bundle Price Option Unique ID
       */
      unique_id?: string;

      /**
       * sell form displays associated with the bundle price option
       */
      upsell_form_displays?: Array<BundlePriceOption.UpsellFormDisplay>;
    }

    export namespace BundlePriceOption {
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

    export interface Bundleline {
      /**
       * Bundle Line ID
       */
      id?: number;

      /**
       * Quantity of the variant in the bundle line
       */
      quantity?: number;

      /**
       * Subtotal price for the bundle line (variant price \* quantity)
       */
      subtotal?: string;

      variant?: Bundleline.Variant;
    }

    export namespace Bundleline {
      export interface Variant {
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
        digital_product_files?: Array<Variant.DigitalProductFile>;

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

        product?: Variant.Product;

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
  }
}

export interface BundleCreateParams {
  /**
   * Name
   */
  name: string;

  /**
   * List of Bundle Price Options
   */
  bundle_price_options?: Array<BundleCreateParams.BundlePriceOption>;

  /**
   * List of Bundle Lines
   */
  bundlelines?: Array<BundleCreateParams.Bundleline>;

  /**
   * Custom Identifier
   */
  custom_id?: string;

  /**
   * Description
   */
  description?: string;

  /**
   * List of Image URLs
   */
  images?: Array<string>;

  /**
   * Meta Thumbnail URL
   */
  meta_thumbnail?: string;

  /**
   * Public Name
   */
  public_name?: string;

  /**
   * Rich Description
   */
  rich_description?: string;

  /**
   * Weight Bump
   */
  weight_bump?: number;
}

export namespace BundleCreateParams {
  export interface BundlePriceOption {
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

  export interface Bundleline {
    /**
     * Quantity of the variant in the bundle line
     */
    quantity: number;

    /**
     * Variant ID
     */
    variant_id: number;
  }
}

export interface BundleListParams {
  /**
   * Filter bundles by their sharing status
   */
  is_bundle_sharing?: boolean;

  /**
   * Filter bundles that are associated with the specified label
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
   * Search term to filter bundles by name (case-insensitive, partial match)
   */
  search?: string;

  /**
   * Filter bundles that have price options available in the specified store ID
   */
  store_id?: number;
}

export interface BundleCountParams {
  /**
   * Filter bundles by their sharing status
   */
  is_bundle_sharing?: boolean;

  /**
   * Filter bundles that are associated with the specified label
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
   * Search term to filter bundles by name (case-insensitive, partial match)
   */
  search?: string;

  /**
   * Filter bundles that have price options available in the specified store ID
   */
  store_id?: number;
}

export interface BundleListSimplifiedParams {
  /**
   * If provided, includes `is_owned_by_store` field in the bundle price options to
   * indicate if the option is already included in the specified store.
   */
  for_store_id?: number;

  /**
   * Filter bundles by their sharing status
   */
  is_bundle_sharing?: boolean;

  /**
   * Filter bundles that are associated with the specified label
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
   * Search term to filter bundles by name (case-insensitive, partial match)
   */
  search?: string;

  /**
   * Filter bundles that have price options available in the specified store ID
   */
  store_id?: number;
}

export interface BundleUpdateSharingParams {
  /**
   * Is Bundle Sharing
   */
  is_bundle_sharing: boolean;
}

Bundles.Bpos = Bpos;
Bundles.FollowUpChats = FollowUpChats;
Bundles.Partners = Partners;

export declare namespace Bundles {
  export {
    type BundleCreateResponse as BundleCreateResponse,
    type BundleRetrieveResponse as BundleRetrieveResponse,
    type BundleListResponse as BundleListResponse,
    type BundleDeleteResponse as BundleDeleteResponse,
    type BundleCountResponse as BundleCountResponse,
    type BundleListSimplifiedResponse as BundleListSimplifiedResponse,
    type BundleShowRelationsResponse as BundleShowRelationsResponse,
    type BundleUpdateSharingResponse as BundleUpdateSharingResponse,
    type BundleCreateParams as BundleCreateParams,
    type BundleListParams as BundleListParams,
    type BundleCountParams as BundleCountParams,
    type BundleListSimplifiedParams as BundleListSimplifiedParams,
    type BundleUpdateSharingParams as BundleUpdateSharingParams,
  };

  export {
    Bpos as Bpos,
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

  export {
    FollowUpChats as FollowUpChats,
    type FollowUpChatCreateResponse as FollowUpChatCreateResponse,
    type FollowUpChatRetrieveResponse as FollowUpChatRetrieveResponse,
    type FollowUpChatUpdateResponse as FollowUpChatUpdateResponse,
    type FollowUpChatListResponse as FollowUpChatListResponse,
    type FollowUpChatDeleteResponse as FollowUpChatDeleteResponse,
    type FollowUpChatGenerateResponse as FollowUpChatGenerateResponse,
    type FollowUpChatCreateParams as FollowUpChatCreateParams,
    type FollowUpChatRetrieveParams as FollowUpChatRetrieveParams,
    type FollowUpChatUpdateParams as FollowUpChatUpdateParams,
    type FollowUpChatListParams as FollowUpChatListParams,
    type FollowUpChatDeleteParams as FollowUpChatDeleteParams,
  };

  export {
    Partners as Partners,
    type PartnerListResponse as PartnerListResponse,
    type PartnerAddResponse as PartnerAddResponse,
    type PartnerRemoveResponse as PartnerRemoveResponse,
    type PartnerListParams as PartnerListParams,
    type PartnerAddParams as PartnerAddParams,
    type PartnerRemoveParams as PartnerRemoveParams,
  };
}
