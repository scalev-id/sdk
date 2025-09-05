// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource followUpChats', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.bundles.followUpChats.create(0, { name: 'name', provider: 'provider' });
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
    const response = await client.bundles.followUpChats.create(0, {
      name: 'name',
      provider: 'provider',
      change_status: true,
      hours_after: 0,
      image: 'https://example.com',
      is_default: true,
      text_for_bank_transfer: 'text_for_bank_transfer',
      text_for_cod: 'text_for_cod',
      text_for_epayment: 'text_for_epayment',
      trigger: 'trigger',
      wa_gateway_assignation_type: 'wa_gateway_assignation_type',
      wa_integration_id: 0,
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.bundles.followUpChats.retrieve(0, { bundle_id: 0 });
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
    const response = await client.bundles.followUpChats.retrieve(0, { bundle_id: 0 });
  });

  // Prism doesn't support callbacks yet
  test.skip('update: only required params', async () => {
    const responsePromise = client.bundles.followUpChats.update(0, {
      bundle_id: 0,
      name: 'name',
      provider: 'provider',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.bundles.followUpChats.update(0, {
      bundle_id: 0,
      name: 'name',
      provider: 'provider',
      change_status: true,
      hours_after: 0,
      image: 'https://example.com',
      is_default: true,
      text_for_bank_transfer: 'text_for_bank_transfer',
      text_for_cod: 'text_for_cod',
      text_for_epayment: 'text_for_epayment',
      trigger: 'trigger',
      wa_gateway_assignation_type: 'wa_gateway_assignation_type',
      wa_integration_id: 0,
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.bundles.followUpChats.list(0);
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
      client.bundles.followUpChats.list(
        0,
        { last_id: 0, page_size: 25 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('delete: only required params', async () => {
    const responsePromise = client.bundles.followUpChats.delete(0, { bundle_id: 0 });
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
    const response = await client.bundles.followUpChats.delete(0, { bundle_id: 0 });
  });

  // Prism doesn't support callbacks yet
  test.skip('generate', async () => {
    const responsePromise = client.bundles.followUpChats.generate(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
