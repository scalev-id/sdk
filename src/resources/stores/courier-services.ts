// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CourierServices extends APIResource {
  /**
   * Associates one or more courier services with a specific store.
   *
   * @example
   * ```ts
   * const response = await client.stores.courierServices.add(
   *   1,
   *   { courier_service_ids: [1, 2, 3] },
   * );
   * ```
   */
  add(
    storeID: number,
    body: CourierServiceAddParams,
    options?: RequestOptions,
  ): APIPromise<CourierServiceAddResponse> {
    return this._client.post(path`/v2/stores/${storeID}/courier-services`, { body, ...options });
  }

  /**
   * Dissociates one or more courier services from a specific store.
   *
   * @example
   * ```ts
   * const courierService =
   *   await client.stores.courierServices.remove(1, {
   *     courier_service_ids: [1, 2, 3],
   *   });
   * ```
   */
  remove(
    storeID: number,
    body: CourierServiceRemoveParams,
    options?: RequestOptions,
  ): APIPromise<CourierServiceRemoveResponse> {
    return this._client.delete(path`/v2/stores/${storeID}/courier-services`, { body, ...options });
  }
}

export interface CourierServiceAddResponse {
  code?: number;

  status?: string;
}

export interface CourierServiceRemoveResponse {
  code?: number;

  status?: string;
}

export interface CourierServiceAddParams {
  /**
   * List of Courier Service IDs to associate with the store
   */
  courier_service_ids: Array<number>;
}

export interface CourierServiceRemoveParams {
  /**
   * List of Courier Service IDs to dissociate from the store
   */
  courier_service_ids: Array<number>;
}

export declare namespace CourierServices {
  export {
    type CourierServiceAddResponse as CourierServiceAddResponse,
    type CourierServiceRemoveResponse as CourierServiceRemoveResponse,
    type CourierServiceAddParams as CourierServiceAddParams,
    type CourierServiceRemoveParams as CourierServiceRemoveParams,
  };
}
