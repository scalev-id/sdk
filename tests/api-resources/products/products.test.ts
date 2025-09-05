// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({ item_type: 'physical', name: 'name' });
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
    const response = await client.products.create({
      item_type: 'physical',
      name: 'name',
      description: 'description',
      is_inventory: true,
      is_multiple: true,
      is_product_sharing: true,
      meta_thumbnail: 'https://example.com',
      option1_name: 'option1_name',
      option2_name: 'option2_name',
      option3_name: 'option3_name',
      public_name: 'public_name',
      rich_description: 'rich_description',
      slug: 'slug',
      taxonomy_id: 0,
      variants: [
        {
          price: 0,
          weight: 0,
          cogs: 0,
          description: 'description',
          images: ['https://example.com'],
          is_checked: true,
          metadata: {},
          option1_value: 'option1_value',
          option2_value: 'option2_value',
          option3_value: 'option3_value',
          reseller_price: 0,
          rich_description: 'rich_description',
          self_file_urls: ['https://example.com'],
          sku: 'sku',
        },
      ],
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve', async () => {
    const responsePromise = client.products.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('update: only required params', async () => {
    const responsePromise = client.products.update(0, { item_type: 'physical', name: 'name' });
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
    const response = await client.products.update(0, {
      item_type: 'physical',
      name: 'name',
      description: 'description',
      is_inventory: true,
      is_multiple: true,
      is_product_sharing: true,
      meta_thumbnail: 'https://example.com',
      option1_name: 'option1_name',
      option2_name: 'option2_name',
      option3_name: 'option3_name',
      public_name: 'public_name',
      rich_description: 'rich_description',
      slug: 'slug',
      taxonomy_id: 0,
      variants: [
        {
          price: 0,
          weight: 0,
          cogs: 0,
          description: 'description',
          images: ['https://example.com'],
          is_checked: true,
          is_deleted: true,
          metadata: {},
          option1_value: 'option1_value',
          option2_value: 'option2_value',
          option3_value: 'option3_value',
          reseller_price: 0,
          rich_description: 'rich_description',
          self_file_urls: ['https://example.com'],
          sku: 'sku',
          variant_id: 0,
        },
      ],
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.products.list();
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
      client.products.list(
        {
          is_checked: true,
          is_inventory: true,
          is_owned: true,
          is_product_sharing: true,
          item_type: 'physical',
          label: 'label',
          last_id: 0,
          page_size: 25,
          qty_type: 'available_qty',
          search: 'search',
          store_id: 0,
          warehouse_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('delete', async () => {
    const responsePromise = client.products.delete(0);
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
    const responsePromise = client.products.count();
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
      client.products.count(
        {
          is_checked: true,
          is_inventory: true,
          is_owned: true,
          is_product_sharing: true,
          item_type: 'physical',
          label: 'label',
          last_id: 0,
          page_size: 25,
          qty_type: 'available_qty',
          search: 'search',
          store_id: 0,
          warehouse_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('listSimplified', async () => {
    const responsePromise = client.products.listSimplified();
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
      client.products.listSimplified(
        {
          for_store_id: 0,
          is_checked: true,
          is_inventory: true,
          is_owned: true,
          is_product_sharing: true,
          item_type: 'physical',
          label: 'label',
          last_id: 0,
          page_size: 25,
          qty_type: 'available_qty',
          search: 'search',
          store_id: 0,
          warehouse_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('showRelations', async () => {
    const responsePromise = client.products.showRelations(0);
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
    const responsePromise = client.products.updateSharing(0, { is_product_sharing: true });
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
    const response = await client.products.updateSharing(0, { is_product_sharing: true });
  });
});
