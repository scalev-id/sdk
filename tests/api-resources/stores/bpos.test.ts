// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource bpos', () => {
  // Prism doesn't support callbacks yet
  test.skip('add: only required params', async () => {
    const responsePromise = client.stores.bpos.add(1, { bpo_ids: [1, 2, 3] });
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
    const response = await client.stores.bpos.add(1, { bpo_ids: [1, 2, 3] });
  });

  // Prism doesn't support callbacks yet
  test.skip('remove: only required params', async () => {
    const responsePromise = client.stores.bpos.remove(1, { store_id: 1 });
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
    const response = await client.stores.bpos.remove(1, { store_id: 1 });
  });

  // Prism doesn't support callbacks yet
  test.skip('viewRelations: only required params', async () => {
    const responsePromise = client.stores.bpos.viewRelations(1, { store_id: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('viewRelations: required and optional params', async () => {
    const response = await client.stores.bpos.viewRelations(1, { store_id: 1 });
  });
});
