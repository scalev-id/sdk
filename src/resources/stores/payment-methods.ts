// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * Retrieves a list of payment methods associated with a specific store.
   *
   * @example
   * ```ts
   * const paymentMethods =
   *   await client.stores.paymentMethods.list(1);
   * ```
   */
  list(
    storeID: number,
    query: PaymentMethodListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentMethodListResponse> {
    return this._client.get(path`/v2/stores/${storeID}/payment-methods`, { query, ...options });
  }

  /**
   * Associates one or more payment methods with a specific store.
   *
   * @example
   * ```ts
   * const response = await client.stores.paymentMethods.add(1, {
   *   payment_account_ids: [0],
   * });
   * ```
   */
  add(
    storeID: number,
    body: PaymentMethodAddParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodAddResponse> {
    return this._client.post(path`/v2/stores/${storeID}/payment-methods`, { body, ...options });
  }

  /**
   * Dissociates a specific payment method from a store.
   *
   * @example
   * ```ts
   * const paymentMethod =
   *   await client.stores.paymentMethods.remove(1, {
   *     payment_account_id: 0,
   *   });
   * ```
   */
  remove(
    storeID: number,
    body: PaymentMethodRemoveParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodRemoveResponse> {
    return this._client.delete(path`/v2/stores/${storeID}/payment-methods`, { body, ...options });
  }
}

export interface PaymentMethodListResponse {
  code?: number;

  data?: Array<
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
    | 'cod'
  >;

  status?: string;
}

export interface PaymentMethodAddResponse {
  code?: number;

  status?: string;
}

export interface PaymentMethodRemoveResponse {
  code?: number;

  status?: string;
}

export interface PaymentMethodListParams {
  /**
   * Primary key of the order to validate if the payment methods are applicable for
   * that order
   */
  order_id?: number;
}

export interface PaymentMethodAddParams {
  /**
   * List of payment account IDs to add to the store
   */
  payment_account_ids: Array<number>;

  /**
   * Payment methods to add to the store
   */
  payment_methods?: Array<
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
    | 'cod'
  >;

  /**
   * Xendit VA bank codes to add to the store
   */
  sub_payment_methods?: Array<
    'BCA' | 'BNI' | 'BRI' | 'MANDIRI' | 'PERMATA' | 'BSI' | 'BJB' | 'CIMB' | 'SAHABAT_SAMPOERNA' | 'ARTAJASA'
  >;
}

export type PaymentMethodRemoveParams =
  | PaymentMethodRemoveParams.Variant0
  | PaymentMethodRemoveParams.Variant1
  | PaymentMethodRemoveParams.Variant2;

export declare namespace PaymentMethodRemoveParams {
  export interface Variant0 {
    /**
     * Payment account ID to remove from the store
     */
    payment_account_id: number;
  }

  export interface Variant1 {
    /**
     * Xendit VA bank code
     */
    xendit_va_bank_code:
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA';
  }

  export interface Variant2 {
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
  }
}

export declare namespace PaymentMethods {
  export {
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodAddResponse as PaymentMethodAddResponse,
    type PaymentMethodRemoveResponse as PaymentMethodRemoveResponse,
    type PaymentMethodListParams as PaymentMethodListParams,
    type PaymentMethodAddParams as PaymentMethodAddParams,
    type PaymentMethodRemoveParams as PaymentMethodRemoveParams,
  };
}
