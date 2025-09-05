// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_bundles from './bundles/create-bundles';
import retrieve_bundles from './bundles/retrieve-bundles';
import update_bundles from './bundles/update-bundles';
import list_bundles from './bundles/list-bundles';
import delete_bundles from './bundles/delete-bundles';
import count_bundles from './bundles/count-bundles';
import list_simplified_bundles from './bundles/list-simplified-bundles';
import show_relations_bundles from './bundles/show-relations-bundles';
import update_sharing_bundles from './bundles/update-sharing-bundles';
import create_bundles_bpos from './bundles/bpos/create-bundles-bpos';
import update_bundles_bpos from './bundles/bpos/update-bundles-bpos';
import list_bundles_bpos from './bundles/bpos/list-bundles-bpos';
import delete_bundles_bpos from './bundles/bpos/delete-bundles-bpos';
import show_relations_bundles_bpos from './bundles/bpos/show-relations-bundles-bpos';
import create_bundles_follow_up_chats from './bundles/follow-up-chats/create-bundles-follow-up-chats';
import retrieve_bundles_follow_up_chats from './bundles/follow-up-chats/retrieve-bundles-follow-up-chats';
import update_bundles_follow_up_chats from './bundles/follow-up-chats/update-bundles-follow-up-chats';
import list_bundles_follow_up_chats from './bundles/follow-up-chats/list-bundles-follow-up-chats';
import delete_bundles_follow_up_chats from './bundles/follow-up-chats/delete-bundles-follow-up-chats';
import generate_bundles_follow_up_chats from './bundles/follow-up-chats/generate-bundles-follow-up-chats';
import list_bundles_partners from './bundles/partners/list-bundles-partners';
import add_bundles_partners from './bundles/partners/add-bundles-partners';
import remove_bundles_partners from './bundles/partners/remove-bundles-partners';
import retrieve_enabled_epayments_businesses from './businesses/retrieve-enabled-epayments-businesses';
import list_locations from './locations/list-locations';
import create_order from './order/create-order';
import retrieve_order from './order/retrieve-order';
import update_order from './order/update-order';
import list_order from './order/list-order';
import delete_order from './order/delete-order';
import cancel_awb_order from './order/cancel-awb-order';
import change_status_order from './order/change-status-order';
import check_payment_order from './order/check-payment-order';
import check_settlement_order from './order/check-settlement-order';
import create_payment_order from './order/create-payment-order';
import create_shipment_status_history_order from './order/create-shipment-status-history-order';
import duplicate_order from './order/duplicate-order';
import generate_awb_order from './order/generate-awb-order';
import get_actions_order from './order/get-actions-order';
import get_chat_order from './order/get-chat-order';
import get_chats_order from './order/get-chats-order';
import list_emails_order from './order/list-emails-order';
import list_tags_order from './order/list-tags-order';
import mark_not_spam_order from './order/mark-not-spam-order';
import retrieve_by_pg_reference_id_order from './order/retrieve-by-pg-reference-id-order';
import retrieve_by_pg_reference_ids_order from './order/retrieve-by-pg-reference-ids-order';
import send_lms_access_order from './order/send-lms-access-order';
import send_product_digital_order from './order/send-product-digital-order';
import statistics_order from './order/statistics-order';
import trigger_purchase_order from './order/trigger-purchase-order';
import update_customer_order from './order/update-customer-order';
import update_shipment_order from './order/update-shipment-order';
import update_shipment_receipt_order from './order/update-shipment-receipt-order';
import update_tags_order from './order/update-tags-order';
import upload_order from './order/upload-order';
import upload_change_status_order from './order/upload-change-status-order';
import upload_receipt_order from './order/upload-receipt-order';
import add_order_message_history from './order/message-history/add-order-message-history';
import show_order_message_history from './order/message-history/show-order-message-history';
import retrieve_product_taxonomies from './product-taxonomies/retrieve-product-taxonomies';
import list_product_taxonomies from './product-taxonomies/list-product-taxonomies';
import create_products from './products/create-products';
import retrieve_products from './products/retrieve-products';
import update_products from './products/update-products';
import list_products from './products/list-products';
import delete_products from './products/delete-products';
import count_products from './products/count-products';
import list_simplified_products from './products/list-simplified-products';
import show_relations_products from './products/show-relations-products';
import update_sharing_products from './products/update-sharing-products';
import create_products_follow_up_chats from './products/follow-up-chats/create-products-follow-up-chats';
import retrieve_products_follow_up_chats from './products/follow-up-chats/retrieve-products-follow-up-chats';
import update_products_follow_up_chats from './products/follow-up-chats/update-products-follow-up-chats';
import list_products_follow_up_chats from './products/follow-up-chats/list-products-follow-up-chats';
import delete_products_follow_up_chats from './products/follow-up-chats/delete-products-follow-up-chats';
import generate_products_follow_up_chats from './products/follow-up-chats/generate-products-follow-up-chats';
import create_products_partners from './products/partners/create-products-partners';
import list_products_partners from './products/partners/list-products-partners';
import delete_products_partners from './products/partners/delete-products-partners';
import get_courier_services_shipping_costs from './shipping-costs/get-courier-services-shipping-costs';
import get_estimates_shipping_costs from './shipping-costs/get-estimates-shipping-costs';
import search_warehouses_shipping_costs from './shipping-costs/search-warehouses-shipping-costs';
import create_stores from './stores/create-stores';
import retrieve_stores from './stores/retrieve-stores';
import update_stores from './stores/update-stores';
import list_stores from './stores/list-stores';
import delete_stores from './stores/delete-stores';
import list_custom_audiences_stores from './stores/list-custom-audiences-stores';
import list_pages_stores from './stores/list-pages-stores';
import list_payment_accounts_stores from './stores/list-payment-accounts-stores';
import list_sales_people_stores from './stores/list-sales-people-stores';
import list_simplified_stores from './stores/list-simplified-stores';
import add_stores_bpos from './stores/bpos/add-stores-bpos';
import remove_stores_bpos from './stores/bpos/remove-stores-bpos';
import view_relations_stores_bpos from './stores/bpos/view-relations-stores-bpos';
import retrieve_stores_bundles from './stores/bundles/retrieve-stores-bundles';
import list_stores_bundles from './stores/bundles/list-stores-bundles';
import add_stores_courier_services from './stores/courier-services/add-stores-courier-services';
import remove_stores_courier_services from './stores/courier-services/remove-stores-courier-services';
import create_stores_follow_up_chats from './stores/follow-up-chats/create-stores-follow-up-chats';
import retrieve_stores_follow_up_chats from './stores/follow-up-chats/retrieve-stores-follow-up-chats';
import update_stores_follow_up_chats from './stores/follow-up-chats/update-stores-follow-up-chats';
import list_stores_follow_up_chats from './stores/follow-up-chats/list-stores-follow-up-chats';
import delete_stores_follow_up_chats from './stores/follow-up-chats/delete-stores-follow-up-chats';
import list_stores_payment_methods from './stores/payment-methods/list-stores-payment-methods';
import add_stores_payment_methods from './stores/payment-methods/add-stores-payment-methods';
import remove_stores_payment_methods from './stores/payment-methods/remove-stores-payment-methods';
import list_stores_products from './stores/products/list-stores-products';
import add_stores_products from './stores/products/add-stores-products';
import remove_stores_products from './stores/products/remove-stores-products';
import view_relations_stores_products from './stores/products/view-relations-stores-products';
import list_stores_store_admins from './stores/store-admins/list-stores-store-admins';
import add_stores_store_admins from './stores/store-admins/add-stores-store-admins';
import remove_stores_store_admins from './stores/store-admins/remove-stores-store-admins';
import list_stores_store_advertisers from './stores/store-advertisers/list-stores-store-advertisers';
import add_stores_store_advertisers from './stores/store-advertisers/add-stores-store-advertisers';
import remove_stores_store_advertisers from './stores/store-advertisers/remove-stores-store-advertisers';
import retrieve_variants from './variants/retrieve-variants';
import create_variants_digital_product_files from './variants/digital-product-files/create-variants-digital-product-files';
import retrieve_variants_digital_product_files from './variants/digital-product-files/retrieve-variants-digital-product-files';
import list_variants_digital_product_files from './variants/digital-product-files/list-variants-digital-product-files';
import delete_variants_digital_product_files from './variants/digital-product-files/delete-variants-digital-product-files';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_bundles);
addEndpoint(retrieve_bundles);
addEndpoint(update_bundles);
addEndpoint(list_bundles);
addEndpoint(delete_bundles);
addEndpoint(count_bundles);
addEndpoint(list_simplified_bundles);
addEndpoint(show_relations_bundles);
addEndpoint(update_sharing_bundles);
addEndpoint(create_bundles_bpos);
addEndpoint(update_bundles_bpos);
addEndpoint(list_bundles_bpos);
addEndpoint(delete_bundles_bpos);
addEndpoint(show_relations_bundles_bpos);
addEndpoint(create_bundles_follow_up_chats);
addEndpoint(retrieve_bundles_follow_up_chats);
addEndpoint(update_bundles_follow_up_chats);
addEndpoint(list_bundles_follow_up_chats);
addEndpoint(delete_bundles_follow_up_chats);
addEndpoint(generate_bundles_follow_up_chats);
addEndpoint(list_bundles_partners);
addEndpoint(add_bundles_partners);
addEndpoint(remove_bundles_partners);
addEndpoint(retrieve_enabled_epayments_businesses);
addEndpoint(list_locations);
addEndpoint(create_order);
addEndpoint(retrieve_order);
addEndpoint(update_order);
addEndpoint(list_order);
addEndpoint(delete_order);
addEndpoint(cancel_awb_order);
addEndpoint(change_status_order);
addEndpoint(check_payment_order);
addEndpoint(check_settlement_order);
addEndpoint(create_payment_order);
addEndpoint(create_shipment_status_history_order);
addEndpoint(duplicate_order);
addEndpoint(generate_awb_order);
addEndpoint(get_actions_order);
addEndpoint(get_chat_order);
addEndpoint(get_chats_order);
addEndpoint(list_emails_order);
addEndpoint(list_tags_order);
addEndpoint(mark_not_spam_order);
addEndpoint(retrieve_by_pg_reference_id_order);
addEndpoint(retrieve_by_pg_reference_ids_order);
addEndpoint(send_lms_access_order);
addEndpoint(send_product_digital_order);
addEndpoint(statistics_order);
addEndpoint(trigger_purchase_order);
addEndpoint(update_customer_order);
addEndpoint(update_shipment_order);
addEndpoint(update_shipment_receipt_order);
addEndpoint(update_tags_order);
addEndpoint(upload_order);
addEndpoint(upload_change_status_order);
addEndpoint(upload_receipt_order);
addEndpoint(add_order_message_history);
addEndpoint(show_order_message_history);
addEndpoint(retrieve_product_taxonomies);
addEndpoint(list_product_taxonomies);
addEndpoint(create_products);
addEndpoint(retrieve_products);
addEndpoint(update_products);
addEndpoint(list_products);
addEndpoint(delete_products);
addEndpoint(count_products);
addEndpoint(list_simplified_products);
addEndpoint(show_relations_products);
addEndpoint(update_sharing_products);
addEndpoint(create_products_follow_up_chats);
addEndpoint(retrieve_products_follow_up_chats);
addEndpoint(update_products_follow_up_chats);
addEndpoint(list_products_follow_up_chats);
addEndpoint(delete_products_follow_up_chats);
addEndpoint(generate_products_follow_up_chats);
addEndpoint(create_products_partners);
addEndpoint(list_products_partners);
addEndpoint(delete_products_partners);
addEndpoint(get_courier_services_shipping_costs);
addEndpoint(get_estimates_shipping_costs);
addEndpoint(search_warehouses_shipping_costs);
addEndpoint(create_stores);
addEndpoint(retrieve_stores);
addEndpoint(update_stores);
addEndpoint(list_stores);
addEndpoint(delete_stores);
addEndpoint(list_custom_audiences_stores);
addEndpoint(list_pages_stores);
addEndpoint(list_payment_accounts_stores);
addEndpoint(list_sales_people_stores);
addEndpoint(list_simplified_stores);
addEndpoint(add_stores_bpos);
addEndpoint(remove_stores_bpos);
addEndpoint(view_relations_stores_bpos);
addEndpoint(retrieve_stores_bundles);
addEndpoint(list_stores_bundles);
addEndpoint(add_stores_courier_services);
addEndpoint(remove_stores_courier_services);
addEndpoint(create_stores_follow_up_chats);
addEndpoint(retrieve_stores_follow_up_chats);
addEndpoint(update_stores_follow_up_chats);
addEndpoint(list_stores_follow_up_chats);
addEndpoint(delete_stores_follow_up_chats);
addEndpoint(list_stores_payment_methods);
addEndpoint(add_stores_payment_methods);
addEndpoint(remove_stores_payment_methods);
addEndpoint(list_stores_products);
addEndpoint(add_stores_products);
addEndpoint(remove_stores_products);
addEndpoint(view_relations_stores_products);
addEndpoint(list_stores_store_admins);
addEndpoint(add_stores_store_admins);
addEndpoint(remove_stores_store_admins);
addEndpoint(list_stores_store_advertisers);
addEndpoint(add_stores_store_advertisers);
addEndpoint(remove_stores_store_advertisers);
addEndpoint(retrieve_variants);
addEndpoint(create_variants_digital_product_files);
addEndpoint(retrieve_variants_digital_product_files);
addEndpoint(list_variants_digital_product_files);
addEndpoint(delete_variants_digital_product_files);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
