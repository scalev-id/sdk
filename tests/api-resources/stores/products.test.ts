// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource products', () => {
  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.stores.products.list(1);
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
      client.stores.products.list(
        1,
        {
          is_checked: true,
          is_inventory: true,
          is_owned: true,
          is_product_sharing: true,
          item_type: 'physical',
          label: 'label',
          last_id: 0,
          order_id: 1,
          page_size: 25,
          qty_type: 'available_qty',
          search: 'search',
          warehouse_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('add: only required params', async () => {
    const responsePromise = client.stores.products.add(1, { product_ids: [1, 2, 3] });
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
    const response = await client.stores.products.add(1, { product_ids: [1, 2, 3] });
  });

  // Prism doesn't support callbacks yet
  test.skip('remove: only required params', async () => {
    const responsePromise = client.stores.products.remove(1, { store_id: 1 });
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
    const response = await client.stores.products.remove(1, { store_id: 1 });
  });

  // Prism doesn't support callbacks yet
  test.skip('viewRelations: only required params', async () => {
    const responsePromise = client.stores.products.viewRelations(1, { store_id: 1 });
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
    const response = await client.stores.products.viewRelations(1, { store_id: 1 });
  });
});
