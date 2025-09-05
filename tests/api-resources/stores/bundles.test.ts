// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource bundles', () => {
  // Prism doesn't support callbacks yet
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.stores.bundles.retrieve(1, { store_id: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.stores.bundles.retrieve(1, { store_id: 1, order_id: 1 });
  });

  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.stores.bundles.list(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stores.bundles.list(
        1,
        {
          is_bundle_sharing: true,
          label: 'Summer Sale',
          last_id: 0,
          order_id: 1,
          page_size: 25,
          search: 'search',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });
});
