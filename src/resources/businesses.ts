// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Businesses extends APIResource {
  /**
   * Fetches the list of enabled e-payment methods for a specified business.
   */
  retrieveEnabledEpayments(options?: RequestOptions): APIPromise<BusinessRetrieveEnabledEpaymentsResponse> {
    return this._client.get('/v2/businesses/enabled-epayments', options);
  }
}

export interface BusinessRetrieveEnabledEpaymentsResponse {
  code?: number;

  data?: BusinessRetrieveEnabledEpaymentsResponse.Data;

  status?: string;
}

export namespace BusinessRetrieveEnabledEpaymentsResponse {
  export interface Data {
    /**
     * List of enabled payment methods
     */
    payment_methods?: Array<
      'va' | 'qris' | 'card' | 'invoice' | 'alfamart' | 'ovo' | 'dana' | 'shopeepay' | 'linkaja' | 'gopay'
    >;

    /**
     * List of enabled bank virtual accounts
     */
    vas?: Array<
      | 'BCA'
      | 'BNI'
      | 'BRI'
      | 'MANDIRI'
      | 'PERMATA'
      | 'BSI'
      | 'BJB'
      | 'CIMB'
      | 'SAHABAT_SAMPOERNA'
      | 'ARTAJASA'
    >;
  }
}

export declare namespace Businesses {
  export { type BusinessRetrieveEnabledEpaymentsResponse as BusinessRetrieveEnabledEpaymentsResponse };
}
