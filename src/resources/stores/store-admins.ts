// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class StoreAdmins extends APIResource {
  /**
   * Retrieves a paginated list of store admins associated with a specific store. The
   * data is sorted by id in descending order and cannot be changed. Uses
   * cursor-based pagination with default page size of 25 and maximum of 25.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const storeAdminListResponse of client.stores.storeAdmins.list(
   *   1,
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    storeID: number,
    query: StoreAdminListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StoreAdminListResponsesCursorPagination, StoreAdminListResponse> {
    return this._client.getAPIList(
      path`/v2/stores/${storeID}/store-admins`,
      CursorPagination<StoreAdminListResponse>,
      { query, ...options },
    );
  }

  /**
   * Associates one or more business users as store admins to a specific store.
   *
   * @example
   * ```ts
   * const response = await client.stores.storeAdmins.add(1, {
   *   store_admin_ids: [1, 2, 3],
   * });
   * ```
   */
  add(
    storeID: number,
    body: StoreAdminAddParams,
    options?: RequestOptions,
  ): APIPromise<StoreAdminAddResponse> {
    return this._client.post(path`/v2/stores/${storeID}/store-admins`, { body, ...options });
  }

  /**
   * Dissociates a specific business user as a store admin from a store.
   *
   * @example
   * ```ts
   * const storeAdmin = await client.stores.storeAdmins.remove(
   *   1,
   *   { store_id: 1 },
   * );
   * ```
   */
  remove(
    buID: number,
    params: StoreAdminRemoveParams,
    options?: RequestOptions,
  ): APIPromise<StoreAdminRemoveResponse> {
    const { store_id } = params;
    return this._client.delete(path`/v2/stores/${store_id}/store-admins/${buID}`, options);
  }
}

export type StoreAdminListResponsesCursorPagination = CursorPagination<StoreAdminListResponse>;

export interface StoreAdminListResponse {
  /**
   * The business user ID
   */
  id: number;

  /**
   * The business phone number
   */
  business_phone: string;

  role: StoreAdminListResponse.Role;

  user: StoreAdminListResponse.User;
}

export namespace StoreAdminListResponse {
  export interface Role {
    /**
     * The role ID
     */
    id: number;

    /**
     * The name of the role
     */
    name: string;
  }

  export interface User {
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

export interface StoreAdminAddResponse {
  code?: number;

  status?: string;
}

export interface StoreAdminRemoveResponse {
  code?: number;

  status?: string;
}

export interface StoreAdminListParams extends CursorPaginationParams {}

export interface StoreAdminAddParams {
  /**
   * List of Business User IDs to associate as store admins with the store
   */
  store_admin_ids: Array<number>;
}

export interface StoreAdminRemoveParams {
  /**
   * ID of the store from which the store admin will be removed
   */
  store_id: number;
}

export declare namespace StoreAdmins {
  export {
    type StoreAdminListResponse as StoreAdminListResponse,
    type StoreAdminAddResponse as StoreAdminAddResponse,
    type StoreAdminRemoveResponse as StoreAdminRemoveResponse,
    type StoreAdminListResponsesCursorPagination as StoreAdminListResponsesCursorPagination,
    type StoreAdminListParams as StoreAdminListParams,
    type StoreAdminAddParams as StoreAdminAddParams,
    type StoreAdminRemoveParams as StoreAdminRemoveParams,
  };
}
