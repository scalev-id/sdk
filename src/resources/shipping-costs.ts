// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ShippingCosts extends APIResource {
  /**
   * Retrieve available courier services based on warehouse, destination, payment
   * method, and package weight.
   */
  getCourierServices(
    body: ShippingCostGetCourierServicesParams,
    options?: RequestOptions,
  ): APIPromise<ShippingCostGetCourierServicesResponse> {
    return this._client.post('/v2/shipping-costs/search-courier-service', { body, ...options });
  }

  /**
   * Retrieve shipping cost estimates based on origin, destination, courier services,
   * and package weight.
   */
  getEstimates(
    body: ShippingCostGetEstimatesParams,
    options?: RequestOptions,
  ): APIPromise<ShippingCostGetEstimatesResponse> {
    return this._client.post('/v2/shipping-costs', { body, ...options });
  }

  /**
   * Search for warehouses based on order details, store, destination, and product
   * variants.
   */
  searchWarehouses(
    body: ShippingCostSearchWarehousesParams,
    options?: RequestOptions,
  ): APIPromise<ShippingCostSearchWarehousesResponse> {
    return this._client.post('/v2/shipping-costs/search-warehouse', { body, ...options });
  }
}

export interface ShippingCostGetCourierServicesResponse {
  code?: number;

  /**
   * List of courier services
   */
  data?: Array<ShippingCostGetCourierServicesResponse.Data>;

  status?: string;
}

export namespace ShippingCostGetCourierServicesResponse {
  export interface Data {
    /**
     * Cost of the shipment
     */
    cost?: number;

    /**
     * Source of the cost
     */
    cost_source?: string;

    courier_service?: Data.CourierService;

    /**
     * Estimated time of delivery
     */
    etd?: string;

    /**
     * Is Cash on Delivery available
     */
    is_cod?: boolean;

    /**
     * Is Pickup available
     */
    is_pickup?: boolean;

    /**
     * Code of the shipment provider
     */
    shipment_provider_code?: string;

    warehouse?: Data.Warehouse;

    /**
     * Weight of the shipment in grams
     */
    weight?: number;
  }

  export namespace Data {
    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'instant' | 'cashless' | 'standard';

        /**
         * Courier name
         */
        name?: string;
      }
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      /**
       * Address of the warehouse
       */
      address?: string;

      /**
       * City name of the warehouse location
       */
      city_name?: string;

      /**
       * Lincah origin ID for the warehouse
       */
      lincah_origin_id?: string;

      /**
       * Mengantar origin ID for the warehouse
       */
      mengantar_origin_id?: string;

      /**
       * Name of the warehouse
       */
      name?: string;

      /**
       * Province name of the warehouse location
       */
      province_name?: string;

      /**
       * Subdistrict name of the warehouse location
       */
      subdistrict_name?: string;

      /**
       * Unique identifier of the warehouse
       */
      unique_id?: string;
    }
  }
}

export interface ShippingCostGetEstimatesResponse {
  code?: number;

  /**
   * List of shipping cost results
   */
  data?: Array<ShippingCostGetEstimatesResponse.Data>;

  status?: string;
}

export namespace ShippingCostGetEstimatesResponse {
  /**
   * Schema for a single shipping cost result
   */
  export interface Data {
    /**
     * Cost of the shipment
     */
    cost: number;

    /**
     * Source of the cost
     */
    cost_source: string;

    courier_service: Data.CourierService;

    /**
     * Estimated time of delivery
     */
    etd: string;

    /**
     * Weight of the shipment in grams
     */
    weight: number;
  }

  export namespace Data {
    export interface CourierService {
      /**
       * Courier Service ID
       */
      id?: number;

      /**
       * Code for the courier service
       */
      code?: string;

      courier?: CourierService.Courier;

      /**
       * Name of the courier service
       */
      name?: string;
    }

    export namespace CourierService {
      export interface Courier {
        /**
         * Courier ID
         */
        id?: number;

        /**
         * Courier code
         */
        code?: string;

        /**
         * Type of the courier
         */
        courier_type?: 'instant' | 'cashless' | 'standard';

        /**
         * Courier name
         */
        name?: string;
      }
    }
  }
}

export interface ShippingCostSearchWarehousesResponse {
  code?: number;

  data?: Array<ShippingCostSearchWarehousesResponse.Data>;

  status?: string;
}

export namespace ShippingCostSearchWarehousesResponse {
  export interface Data {
    destination?: Data.Destination;

    /**
     * Distance in kilometers
     */
    distance_km?: number;

    warehouse?: Data.Warehouse;

    warehouse_partner?: Data.WarehousePartner;
  }

  export namespace Data {
    export interface Destination {
      /**
       * Location ID
       */
      id?: number;

      /**
       * City Name
       */
      city_name?: string;

      /**
       * Display Name
       */
      display?: string;

      /**
       * JNE Destination ID
       */
      jne_destination_id?: number;

      /**
       * JNE Origin ID
       */
      jne_origin_id?: number;

      /**
       * Kargo Aman District ID
       */
      ka_district_id?: number;

      /**
       * Lincah Code
       */
      lincah_code?: string;

      /**
       * Lion Code
       */
      lion_code?: string;

      /**
       * Mengantar Code
       */
      mengantar_code?: string;

      /**
       * Ninja L1 Code
       */
      ninja_l1?: string;

      /**
       * Ninja L2 Code
       */
      ninja_l2?: string;

      /**
       * Province Name
       */
      province_name?: string;

      /**
       * RajaOngkir City ID
       */
      ro_city_id?: number;

      /**
       * RajaOngkir Province ID
       */
      ro_province_id?: number;

      /**
       * RajaOngkir Subdistrict ID
       */
      ro_subdistrict_id?: number;

      /**
       * Subdistrict Name
       */
      subdistrict_name?: string;
    }

    export interface Warehouse {
      /**
       * Warehouse ID
       */
      id?: number;

      business?: Warehouse.Business;

      /**
       * Lincah origin ID for the warehouse
       */
      lincah_origin_id?: string;

      /**
       * Mengantar origin ID for the warehouse
       */
      mengantar_origin_id?: string;

      /**
       * Name of the warehouse
       */
      name?: string;

      /**
       * Unique identifier of the warehouse
       */
      unique_id?: string;

      warehouse_address?: Warehouse.WarehouseAddress;
    }

    export namespace Warehouse {
      export interface Business {
        /**
         * Business ID
         */
        id?: number;

        /**
         * Username of the business
         */
        username?: string;
      }

      export interface WarehouseAddress {
        /**
         * Warehouse Address ID
         */
        id?: number;

        /**
         * Full address of the warehouse
         */
        address?: string;

        /**
         * City of the warehouse address
         */
        city?: string;

        /**
         * Location ID for the address
         */
        location?: number;

        /**
         * Postal code of the warehouse address
         */
        postal_code?: string;

        /**
         * Province of the warehouse address
         */
        province?: string;

        /**
         * Subdistrict of the warehouse address
         */
        subdistrict?: string;
      }
    }

    export interface WarehousePartner {
      /**
       * Warehouse Partner ID
       */
      id?: number;

      /**
       * KA Origin ID
       */
      ka_origin_id?: string;

      /**
       * Lincah Origin ID
       */
      lincah_origin_id?: string;

      /**
       * Mengantar Origin ID
       */
      mengantar_origin_id?: string;

      /**
       * Partner Business ID
       */
      partner_id?: number;
    }
  }
}

export interface ShippingCostGetCourierServicesParams {
  /**
   * ID of the destination location
   */
  location_id: number;

  /**
   * Order payment method
   */
  payment_method:
    | 'gopay'
    | 'va'
    | 'qris'
    | 'card'
    | 'invoice'
    | 'alfamart'
    | 'ovo'
    | 'dana'
    | 'shopeepay'
    | 'linkaja'
    | 'no_payment'
    | 'bank_transfer'
    | 'marketplace'
    | 'cod';

  /**
   * ID of the store
   */
  store_id: number;

  /**
   * ID of the warehouse
   */
  warehouse_id: number;

  /**
   * Weight of the shipment in grams
   */
  weight: number;

  /**
   * Whether to show all courier services or only those available
   */
  is_show_all?: boolean;

  /**
   * Postal code of the destination
   */
  postal_code?: string;
}

export interface ShippingCostGetEstimatesParams {
  /**
   * List of courier codes
   */
  courier_codes: Array<
    | 'ninja'
    | 'ide'
    | 'sicepat'
    | 'sap'
    | 'ncs'
    | 'anteraja'
    | 'sentral'
    | 'jne'
    | 'jnt'
    | 'pos'
    | 'lion'
    | 'rex'
    | 'jtl'
    | 'tiki'
    | 'rpx'
    | 'pandu'
    | 'wahana'
    | 'pahala'
    | 'jet'
    | 'slis'
    | 'dse'
    | 'first'
    | 'star'
    | 'idl'
  >;

  /**
   * ID of the destination location
   */
  location_id: number;

  /**
   * ID of the warehouse
   */
  warehouse_id: number;

  /**
   * Weight of the shipment in grams
   */
  weight: number;

  /**
   * Postal code of the destination
   */
  postal_code?: string;
}

export interface ShippingCostSearchWarehousesParams {
  /**
   * ID of the destination location
   */
  destination_id: number;

  /**
   * ID of the store
   */
  store_id: number;

  /**
   * List of product variant ids and their quantities
   */
  variants: Array<ShippingCostSearchWarehousesParams.Variant>;

  /**
   * ID of the order (for update order)
   */
  order_id?: number;
}

export namespace ShippingCostSearchWarehousesParams {
  export interface Variant {
    /**
     * Quantity of the product variant
     */
    qty: number;

    /**
     * ID of the product variant
     */
    variant_id: number;
  }
}

export declare namespace ShippingCosts {
  export {
    type ShippingCostGetCourierServicesResponse as ShippingCostGetCourierServicesResponse,
    type ShippingCostGetEstimatesResponse as ShippingCostGetEstimatesResponse,
    type ShippingCostSearchWarehousesResponse as ShippingCostSearchWarehousesResponse,
    type ShippingCostGetCourierServicesParams as ShippingCostGetCourierServicesParams,
    type ShippingCostGetEstimatesParams as ShippingCostGetEstimatesParams,
    type ShippingCostSearchWarehousesParams as ShippingCostSearchWarehousesParams,
  };
}
