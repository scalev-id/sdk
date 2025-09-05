// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource bundles', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.bundles.create({ name: 'name' });
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
    const response = await client.bundles.create({
      name: 'name',
      bundle_price_options: [{ name: 'name', price: 0, slug: 'slug' }],
      bundlelines: [{ quantity: 0, variant_id: 0 }],
      custom_id: 'custom_id',
      description: 'description',
      images: ['https://example.com'],
      meta_thumbnail: 'https://example.com',
      public_name: 'public_name',
      rich_description: 'rich_description',
      weight_bump: 0,
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve', async () => {
    const responsePromise = client.bundles.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('update', async () => {
    const responsePromise = client.bundles.update(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bundles.update(
        0,
        {
          bundlelines: [{ quantity: 0, variant_id: 0 }],
          custom_id: 'custom_id',
          description: 'description',
          images: ['https://example.com'],
          meta_thumbnail: 'https://example.com',
          name: 'name',
          public_name: 'public_name',
          rich_description: 'rich_description',
          weight_bump: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.bundles.list();
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
      client.bundles.list(
        { is_bundle_sharing: true, label: 'label', last_id: 0, page_size: 25, search: 'search', store_id: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('delete', async () => {
    const responsePromise = client.bundles.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('count', async () => {
    const responsePromise = client.bundles.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('count: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bundles.count(
        { is_bundle_sharing: true, label: 'label', last_id: 0, page_size: 25, search: 'search', store_id: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('listSimplified', async () => {
    const responsePromise = client.bundles.listSimplified();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listSimplified: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bundles.listSimplified(
        {
          for_store_id: 0,
          is_bundle_sharing: true,
          label: 'label',
          last_id: 0,
          page_size: 25,
          search: 'search',
          store_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('showRelations', async () => {
    const responsePromise = client.bundles.showRelations(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateSharing: only required params', async () => {
    const responsePromise = client.bundles.updateSharing(0, { is_bundle_sharing: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateSharing: required and optional params', async () => {
    const response = await client.bundles.updateSharing(0, { is_bundle_sharing: true });
  });
});
