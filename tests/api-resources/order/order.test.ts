// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI, { toFile } from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource order', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.order.create({
      customer_name: 'customer_name',
      store_unique_id: 'store_unique_id',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.order.create({
      customer_name: 'customer_name',
      store_unique_id: 'store_unique_id',
      address: 'address',
      channel_unique_id: 'channel_unique_id',
      courier_service_id: 0,
      customer_email: 'dev@stainless.com',
      customer_phone: 'customer_phone',
      dropshipper_name: 'dropshipper_name',
      dropshipper_phone: 'dropshipper_phone',
      financial_entity_id: 0,
      is_dropshipping: true,
      is_probably_spam: true,
      location_id: 0,
      metadata: { foo: 'bar' },
      notes: 'notes',
      orderbundles: [{ bundle_price_option_unique_id: 'bundle_price_option_unique_id', quantity: 0 }],
      ordervariants: [{ quantity: 0, variant_unique_id: 'variant_unique_id' }],
      other_income: 0,
      other_income_name: 'other_income_name',
      page_unique_id: 'page_unique_id',
      payment_account_holder: 'payment_account_holder',
      payment_account_number: 'payment_account_number',
      payment_account_unique_id: 'payment_account_unique_id',
      payment_method: 'va',
      postal_code: 'postal_code',
      product_discount: 0,
      shipment_provider_code: 'mengantar',
      shipping_cost: 0,
      shipping_discount: 0,
      sub_payment_method: 'BCA',
      transferproof_url: 'transferproof_url',
      warehouse_unique_id: 'warehouse_unique_id',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve', async () => {
    const responsePromise = client.order.retrieve(0);
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
    const responsePromise = client.order.update(0);
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
      client.order.update(
        0,
        {
          address: 'address',
          channel_unique_id: 'channel_unique_id',
          courier_service_id: 0,
          customer_email: 'dev@stainless.com',
          customer_name: 'customer_name',
          customer_phone: 'customer_phone',
          dropshipper_name: 'dropshipper_name',
          dropshipper_phone: 'dropshipper_phone',
          financial_entity_id: 0,
          is_dropshipping: true,
          location_id: 0,
          notes: 'notes',
          orderbundles: [{ bundle_price_option_unique_id: 'bundle_price_option_unique_id', quantity: 0 }],
          ordervariants: [{ quantity: 0, variant_unique_id: 'variant_unique_id' }],
          other_income: 0,
          other_income_name: 'other_income_name',
          page_unique_id: 'page_unique_id',
          payment_account_holder: 'payment_account_holder',
          payment_account_number: 'payment_account_number',
          payment_account_unique_id: 'payment_account_unique_id',
          payment_method: 'va',
          postal_code: 'postal_code',
          product_discount: 0,
          shipment_provider_code: 'mengantar',
          shipping_cost: 0,
          shipping_discount: 0,
          sub_payment_method: 'BCA',
          transferproof_url: 'transferproof_url',
          warehouse_unique_id: 'warehouse_unique_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.order.list();
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
      client.order.list(
        {
          advertiser_id: 'advertiser_id',
          awb_ca_status: 'unavailable',
          business_id: 'business_id',
          business_role: 'retailer',
          columns: 'columns',
          completed_time_since: 'completed_time_since',
          completed_time_until: 'completed_time_until',
          confirmed_time_since: 'confirmed_time_since',
          confirmed_time_until: 'confirmed_time_until',
          courier_id: 'courier_id',
          draft_time_until: 'draft_time_until',
          external_id: 'external_id',
          financial_entity_id: 'financial_entity_id',
          handler_id: 'handler_id',
          is_from_form: 'true',
          is_probably_spam: 'true',
          is_repeat: 'true',
          is_transferproof_exist: 'true',
          last_id: 0,
          order_id: 'order_id',
          page_id: 'page_id',
          page_size: 25,
          payment_method: 'no_payment',
          payment_status: 'paid',
          platform: 'scalev',
          product_id: 'product_id',
          search: 'search',
          shipment_status: 'shipment_status',
          shipped_time_since: 'shipped_time_since',
          shipped_time_until: 'shipped_time_until',
          status: 'draft',
          store_id: 'store_id',
          tags: 'tags',
          utm_source: 'utm_source',
          warehouse_id: 'warehouse_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('delete: only required params', async () => {
    const responsePromise = client.order.delete({ ids: [0] });
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
    const response = await client.order.delete({ ids: [0] });
  });

  // Prism doesn't support callbacks yet
  test.skip('cancelAwb: only required params', async () => {
    const responsePromise = client.order.cancelAwb({ ids: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('cancelAwb: required and optional params', async () => {
    const response = await client.order.cancelAwb({ ids: [0] });
  });

  // Prism doesn't support callbacks yet
  test.skip('changeStatus', async () => {
    const responsePromise = client.order.changeStatus();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('changeStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.order.changeStatus(
        {
          by: 'by',
          financial_entity_id: 0,
          ids: [0],
          payment_account_holder: 'payment_account_holder',
          payment_account_number: 'payment_account_number',
          payment_method: 'va',
          payment_status: 'unpaid',
          rtsproof_url: 'rtsproof_url',
          status: 'draft',
          transfer_time: '2019-12-27T18:11:19.117Z',
          transferproof_url: 'transferproof_url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('checkPayment', async () => {
    const responsePromise = client.order.checkPayment(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('checkSettlement', async () => {
    const responsePromise = client.order.checkSettlement(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('createPayment', async () => {
    const responsePromise = client.order.createPayment(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('createShipmentStatusHistory: only required params', async () => {
    const responsePromise = client.order.createShipmentStatusHistory(0, {
      description: 'description',
      status: 'draft',
      timestamp: '2019-12-27T18:11:19.117Z',
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
  test.skip('createShipmentStatusHistory: required and optional params', async () => {
    const response = await client.order.createShipmentStatusHistory(0, {
      description: 'description',
      status: 'draft',
      timestamp: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('duplicate', async () => {
    const responsePromise = client.order.duplicate(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('duplicate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.order.duplicate(
        0,
        {
          financial_entity_id: 0,
          metadata: { foo: 'bar' },
          payment_account_holder: 'payment_account_holder',
          payment_account_number: 'payment_account_number',
          payment_method: 'va',
          sub_payment_method: 'BCA',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('generateAwb: only required params', async () => {
    const responsePromise = client.order.generateAwb({ ids: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('generateAwb: required and optional params', async () => {
    const response = await client.order.generateAwb({ ids: [0] });
  });

  // Prism doesn't support callbacks yet
  test.skip('getActions', async () => {
    const responsePromise = client.order.getActions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('getChat: only required params', async () => {
    const responsePromise = client.order.getChat(0, { id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('getChat: required and optional params', async () => {
    const response = await client.order.getChat(0, { id: 0 });
  });

  // Prism doesn't support callbacks yet
  test.skip('getChats', async () => {
    const responsePromise = client.order.getChats(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listEmails', async () => {
    const responsePromise = client.order.listEmails(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listTags', async () => {
    const responsePromise = client.order.listTags();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listTags: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.order.listTags({ search: 'search' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('markNotSpam: only required params', async () => {
    const responsePromise = client.order.markNotSpam({ ids: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('markNotSpam: required and optional params', async () => {
    const response = await client.order.markNotSpam({ ids: [0] });
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieveByPgReferenceID', async () => {
    const responsePromise = client.order.retrieveByPgReferenceID('pg_reference_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieveByPgReferenceIDs: only required params', async () => {
    const responsePromise = client.order.retrieveByPgReferenceIDs({ pg_reference_ids: 'pg_reference_ids' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieveByPgReferenceIDs: required and optional params', async () => {
    const response = await client.order.retrieveByPgReferenceIDs({ pg_reference_ids: 'pg_reference_ids' });
  });

  // Prism doesn't support callbacks yet
  test.skip('sendLmsAccess', async () => {
    const responsePromise = client.order.sendLmsAccess(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('sendProductDigital', async () => {
    const responsePromise = client.order.sendProductDigital(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('statistics', async () => {
    const responsePromise = client.order.statistics();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('statistics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.order.statistics(
        {
          breakdown_date: 'off',
          business_id: 'business_id',
          custom_breakdown_key: 'off',
          datetime_type: 'draft_time',
          is_breakdown_status: 'true',
          minimum_days: 0,
          payment_status: 'payment_status',
          shipped_time_since: 'shipped_time_since',
          shipped_time_until: 'shipped_time_until',
          status: 'status',
          store_id: 'store_id',
          tz: 'tz',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('triggerPurchase', async () => {
    const responsePromise = client.order.triggerPurchase(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateCustomer: only required params', async () => {
    const responsePromise = client.order.updateCustomer(0, { customer_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateCustomer: required and optional params', async () => {
    const response = await client.order.updateCustomer(0, { customer_id: 0 });
  });

  // Prism doesn't support callbacks yet
  test.skip('updateShipment', async () => {
    const responsePromise = client.order.updateShipment(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateShipment: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.order.updateShipment(
        0,
        {
          awb_ca_status: 'unavailable',
          courier_additional_info: 'courier_additional_info',
          is_shipment_completed: true,
          shipment_provider_code: 'mengantar',
          shipment_receipt: 'shipment_receipt',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateShipmentReceipt: only required params', async () => {
    const responsePromise = client.order.updateShipmentReceipt(0, { shipment_receipt: 'shipment_receipt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateShipmentReceipt: required and optional params', async () => {
    const response = await client.order.updateShipmentReceipt(0, { shipment_receipt: 'shipment_receipt' });
  });

  // Prism doesn't support callbacks yet
  test.skip('updateTags: only required params', async () => {
    const responsePromise = client.order.updateTags(0, { tags: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('updateTags: required and optional params', async () => {
    const response = await client.order.updateTags(0, { tags: ['string'] });
  });

  // Prism doesn't support callbacks yet
  test.skip('upload: only required params', async () => {
    const responsePromise = client.order.upload({
      create_type: 'archive',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      tz: 'tz',
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.order.upload({
      create_type: 'archive',
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      tz: 'tz',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('uploadChangeStatus: only required params', async () => {
    const responsePromise = client.order.uploadChangeStatus({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      tz: 'tz',
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
  test.skip('uploadChangeStatus: required and optional params', async () => {
    const response = await client.order.uploadChangeStatus({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      tz: 'tz',
    });
  });

  // Prism doesn't support callbacks yet
  test.skip('uploadReceipt: only required params', async () => {
    const responsePromise = client.order.uploadReceipt({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('uploadReceipt: required and optional params', async () => {
    const response = await client.order.uploadReceipt({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
