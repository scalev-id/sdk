// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource storeAdmins', () => {
  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.stores.storeAdmins.list(1);
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
      client.stores.storeAdmins.list(1, { last_id: 0, page_size: 25 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('add: only required params', async () => {
    const responsePromise = client.stores.storeAdmins.add(1, { store_admin_ids: [1, 2, 3] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('add: required and optional params', async () => {
    const response = await client.stores.storeAdmins.add(1, { store_admin_ids: [1, 2, 3] });
  });

  // Prism doesn't support callbacks yet
  test.skip('remove: only required params', async () => {
    const responsePromise = client.stores.storeAdmins.remove(1, { store_id: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('remove: required and optional params', async () => {
    const response = await client.stores.storeAdmins.remove(1, { store_id: 1 });
  });
});
