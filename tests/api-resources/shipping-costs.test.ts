// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource shippingCosts', () => {
  // Prism doesn't support callbacks yet
  test.skip('getCourierServices: only required params', async () => {
    const responsePromise = client.shippingCosts.getCourierServices({
      location_id: 0,
      payment_method: 'gopay',
      store_id: 0,
      warehouse_id: 0,
      weight: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('getCourierServices: required and optional params', async () => {
    const response = await client.shippingCosts.getCourierServices({
      location_id: 0,
      payment_method: 'gopay',
      store_id: 0,
      warehouse_id: 0,
      weight: 0,
      is_show_all: true,
      postal_code: 'postal_code',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('getEstimates: only required params', async () => {
    const responsePromise = client.shippingCosts.getEstimates({
      courier_codes: ['jne'],
      location_id: 0,
      warehouse_id: 0,
      weight: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('getEstimates: required and optional params', async () => {
    const response = await client.shippingCosts.getEstimates({
      courier_codes: ['jne'],
      location_id: 0,
      warehouse_id: 0,
      weight: 0,
      postal_code: 'postal_code',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('searchWarehouses: only required params', async () => {
    const responsePromise = client.shippingCosts.searchWarehouses({
      destination_id: 0,
      store_id: 0,
      variants: [{ qty: 0, variant_id: 0 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('searchWarehouses: required and optional params', async () => {
    const response = await client.shippingCosts.searchWarehouses({
      destination_id: 0,
      store_id: 0,
      variants: [{ qty: 0, variant_id: 0 }],
      order_id: 0,
    });
  });
});
