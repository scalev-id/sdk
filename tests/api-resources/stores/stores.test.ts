// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ScalevAPI from 'scalev-api';

const client = new ScalevAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource stores', () => {
  // Prism doesn't support callbacks yet
  test.skip('create: only required params', async () => {
    const responsePromise = client.stores.create({ name: 'name' });
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
    const response = await client.stores.create({ name: 'name' });
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve', async () => {
    const responsePromise = client.stores.retrieve(1);
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
    const responsePromise = client.stores.update(1);
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
      client.stores.update(
        1,
        {
          auto_expire_days: 0,
          auto_other_income: 'auto_other_income',
          blocked_message: 'blocked_message',
          capi_purchase_value_type: 'gross_revenue',
          cod_purchase_triggers: ['public_upload'],
          days_of_payment_processing: 0,
          digital_only_complete_type: 'auto',
          dynamic_other_income_cod_default_amount: 0,
          dynamic_other_income_cod_default_percentage: 0,
          dynamic_other_income_cod_type: 'fixed',
          dynamic_other_income_epayment_default_amount: 0,
          dynamic_other_income_epayment_default_percentage: 0,
          dynamic_other_income_epayment_type: 'fixed',
          email_notification_statuses: ['string'],
          email_reply_to_assignment: 'fixed',
          email_reply_to_id: 0,
          fixed_auto_other_income: 0,
          greeting_message: 'greeting_message',
          inactivity_period: 0,
          is_advanced_validation: true,
          is_auto_expire: true,
          is_customer_otp_required: true,
          is_customer_spam_filter: true,
          is_discount_editable: true,
          is_dropshipping_allowed: true,
          is_email_new_order: true,
          is_email_notifications: true,
          is_fuc_bundle_enabled: true,
          is_fuc_product_enabled: true,
          is_greeting_message_enabled: true,
          is_ip_spam_filter: true,
          is_manual_shipping_cost: true,
          is_moota_enabled: true,
          is_postal_code: true,
          is_show_download_invoice: true,
          is_show_whatsapp: true,
          is_spam_filter: true,
          is_transferproof_required: true,
          is_unique_code: true,
          is_use_waba: true,
          max_per_ip: 0,
          max_per_phone: 0,
          max_unique_code_amount: 0,
          min_address_length: 0,
          min_name_length: 0,
          name: 'name',
          non_cod_purchase_triggers: ['public_upload'],
          other_income_name: 'other_income_name',
          postal_code_requirement: 'autofill',
          store_courier_other_incomes: [{ courier_id: 0, type: 'fixed', amount: 0, percentage: 0 }],
          store_custom_audiences: [{ custom_audience_id: 0, order_status: 'draft' }],
          store_method_other_incomes: [
            {
              payment_method: 'payment_method',
              type: 'fixed',
              amount: 0,
              percentage: 0,
              sub_payment_method: 'sub_payment_method',
            },
          ],
          store_sales_people: [
            {
              business_user_id: 0,
              percentage: 0,
              weekly_schedule: {
                friday: { end_time: 'end_time', is_active: true, start_time: 'start_time' },
                monday: { end_time: 'end_time', is_active: true, start_time: 'start_time' },
                saturday: { end_time: 'end_time', is_active: true, start_time: 'start_time' },
                sunday: { end_time: 'end_time', is_active: true, start_time: 'start_time' },
                thursday: { end_time: 'end_time', is_active: true, start_time: 'start_time' },
                tuesday: { end_time: 'end_time', is_active: true, start_time: 'start_time' },
                wednesday: { end_time: 'end_time', is_active: true, start_time: 'start_time' },
              },
            },
          ],
          waba_account_id: 0,
          warehouse_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('list', async () => {
    const responsePromise = client.stores.list();
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
      client.stores.list(
        { domain: 'domain', has_domain: true, last_id: 0, page_size: 25, search: 'search' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('delete', async () => {
    const responsePromise = client.stores.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listCustomAudiences', async () => {
    const responsePromise = client.stores.listCustomAudiences(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listPages', async () => {
    const responsePromise = client.stores.listPages(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listPages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stores.listPages(
        1,
        { is_pinned: true, last_id: 0, page_size: 25, search: 'search', tags: 'announcement,update' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('listPaymentAccounts', async () => {
    const responsePromise = client.stores.listPaymentAccounts(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listPaymentAccounts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stores.listPaymentAccounts(
        1,
        { last_id: 0, method: 'card', order_id: 1, page_size: 25, search: 'My PayPal' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('listSalesPeople', async () => {
    const responsePromise = client.stores.listSalesPeople(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('listSalesPeople: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stores.listSalesPeople(1, { last_id: 0, page_size: 25 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });

  // Prism doesn't support callbacks yet
  test.skip('listSimplified', async () => {
    const responsePromise = client.stores.listSimplified();
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
      client.stores.listSimplified(
        { domain: 'domain', has_domain: true, last_id: 0, page_size: 25, search: 'search' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ScalevAPI.NotFoundError);
  });
});
