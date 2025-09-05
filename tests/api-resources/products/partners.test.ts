// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource partners', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.partners.create(0, { partner_unique_id: 'partner_unique_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('create: required and optional params', async () => {
    const response = await client.products.partners.create(0, { partner_unique_id: 'partner_unique_id' });
  });

  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.products.partners.list(0);
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
      client.products.partners.list(0, { last_id: 0, page_size: 25 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('delete: only required params', async () => {
    const responsePromise = client.products.partners.delete(0, { product_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('delete: required and optional params', async () => {
    const response = await client.products.partners.delete(0, { product_id: 0 });
  });
});
