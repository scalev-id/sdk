// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ScalevAPI } from '../client';

export abstract class APIResource {
  protected _client: ScalevAPI;

  constructor(client: ScalevAPI) {
    this._client = client;
  }
}
