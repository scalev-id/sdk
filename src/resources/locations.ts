// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PagePagination, type PagePaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Locations extends APIResource {
  /**
   * Retrieve a list of locations with search and pagination.
   */
  list(
    query: LocationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LocationListResponsesPagePagination, LocationListResponse> {
    return this._client.getAPIList('/v2/locations', PagePagination<LocationListResponse>, {
      query,
      ...options,
    });
  }
}

export type LocationListResponsesPagePagination = PagePagination<LocationListResponse>;

export interface LocationListResponse {
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

export interface LocationListParams extends PagePaginationParams {
  /**
   * Search term for location names
   */
  search?: string;
}

export declare namespace Locations {
  export {
    type LocationListResponse as LocationListResponse,
    type LocationListResponsesPagePagination as LocationListResponsesPagePagination,
    type LocationListParams as LocationListParams,
  };
}
