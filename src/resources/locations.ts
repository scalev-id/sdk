// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Locations extends APIResource {
  /**
   * Retrieve a list of locations with search and pagination.
   */
  list(
    query: LocationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationListResponse> {
    return this._client.get('/v2/locations', { query, ...options });
  }
}

export interface LocationListResponse {
  code?: number;

  data?: LocationListResponse.Data;

  status?: string;
}

export namespace LocationListResponse {
  export interface Data {
    has_next?: boolean;

    last_id?: number;

    page_size?: number;

    results?: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
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
  }
}

export interface LocationListParams {
  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page
   */
  page_size?: number;

  /**
   * Search term for location names
   */
  search?: string;
}

export declare namespace Locations {
  export { type LocationListResponse as LocationListResponse, type LocationListParams as LocationListParams };
}
