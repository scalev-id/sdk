# Bundles

Types:

- <code><a href="./src/resources/bundles/bundles.ts">BundleCreateResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleRetrieveResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleUpdateResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleListResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleDeleteResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleCountResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleListSimplifiedResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleShowRelationsResponse</a></code>
- <code><a href="./src/resources/bundles/bundles.ts">BundleUpdateSharingResponse</a></code>

Methods:

- <code title="post /v2/bundles">client.bundles.<a href="./src/resources/bundles/bundles.ts">create</a>({ ...params }) -> BundleCreateResponse</code>
- <code title="get /v2/bundles/{id}">client.bundles.<a href="./src/resources/bundles/bundles.ts">retrieve</a>(id) -> BundleRetrieveResponse</code>
- <code title="patch /v2/bundles/{id}">client.bundles.<a href="./src/resources/bundles/bundles.ts">update</a>(id, { ...params }) -> BundleUpdateResponse</code>
- <code title="get /v2/bundles">client.bundles.<a href="./src/resources/bundles/bundles.ts">list</a>({ ...params }) -> BundleListResponse</code>
- <code title="delete /v2/bundles/{id}">client.bundles.<a href="./src/resources/bundles/bundles.ts">delete</a>(id) -> BundleDeleteResponse</code>
- <code title="get /v2/bundles/count">client.bundles.<a href="./src/resources/bundles/bundles.ts">count</a>({ ...params }) -> BundleCountResponse</code>
- <code title="get /v2/bundles/simplified">client.bundles.<a href="./src/resources/bundles/bundles.ts">listSimplified</a>({ ...params }) -> BundleListSimplifiedResponse</code>
- <code title="get /v2/bundles/{bundle_id}/relations">client.bundles.<a href="./src/resources/bundles/bundles.ts">showRelations</a>(bundleID) -> BundleShowRelationsResponse</code>
- <code title="patch /v2/bundles/{bundle_id}/sharing">client.bundles.<a href="./src/resources/bundles/bundles.ts">updateSharing</a>(bundleID, { ...params }) -> BundleUpdateSharingResponse</code>

## Bpos

Types:

- <code><a href="./src/resources/bundles/bpos.ts">BpoCreateResponse</a></code>
- <code><a href="./src/resources/bundles/bpos.ts">BpoUpdateResponse</a></code>
- <code><a href="./src/resources/bundles/bpos.ts">BpoListResponse</a></code>
- <code><a href="./src/resources/bundles/bpos.ts">BpoDeleteResponse</a></code>
- <code><a href="./src/resources/bundles/bpos.ts">BpoShowRelationsResponse</a></code>

Methods:

- <code title="post /v2/bundles/{bundle_id}/bpos">client.bundles.bpos.<a href="./src/resources/bundles/bpos.ts">create</a>(bundleID, { ...params }) -> BpoCreateResponse</code>
- <code title="patch /v2/bundles/{bundle_id}/bpos/{id}">client.bundles.bpos.<a href="./src/resources/bundles/bpos.ts">update</a>(id, { ...params }) -> BpoUpdateResponse</code>
- <code title="get /v2/bundles/{bundle_id}/bpos">client.bundles.bpos.<a href="./src/resources/bundles/bpos.ts">list</a>(bundleID, { ...params }) -> BpoListResponse</code>
- <code title="delete /v2/bundles/{bundle_id}/bpos/{id}">client.bundles.bpos.<a href="./src/resources/bundles/bpos.ts">delete</a>(id, { ...params }) -> BpoDeleteResponse</code>
- <code title="get /v2/bundles/{bundle_id}/bpos/{id}/relations">client.bundles.bpos.<a href="./src/resources/bundles/bpos.ts">showRelations</a>(id, { ...params }) -> BpoShowRelationsResponse</code>

## FollowUpChats

Types:

- <code><a href="./src/resources/bundles/follow-up-chats.ts">FollowUpChatCreateResponse</a></code>
- <code><a href="./src/resources/bundles/follow-up-chats.ts">FollowUpChatRetrieveResponse</a></code>
- <code><a href="./src/resources/bundles/follow-up-chats.ts">FollowUpChatUpdateResponse</a></code>
- <code><a href="./src/resources/bundles/follow-up-chats.ts">FollowUpChatListResponse</a></code>
- <code><a href="./src/resources/bundles/follow-up-chats.ts">FollowUpChatDeleteResponse</a></code>
- <code><a href="./src/resources/bundles/follow-up-chats.ts">FollowUpChatGenerateResponse</a></code>

Methods:

- <code title="post /v2/bundles/{bundle_id}/follow-up-chats">client.bundles.followUpChats.<a href="./src/resources/bundles/follow-up-chats.ts">create</a>(bundleID, { ...params }) -> FollowUpChatCreateResponse</code>
- <code title="get /v2/bundles/{bundle_id}/follow-up-chats/{id}">client.bundles.followUpChats.<a href="./src/resources/bundles/follow-up-chats.ts">retrieve</a>(id, { ...params }) -> FollowUpChatRetrieveResponse</code>
- <code title="patch /v2/bundles/{bundle_id}/follow-up-chats/{id}">client.bundles.followUpChats.<a href="./src/resources/bundles/follow-up-chats.ts">update</a>(id, { ...params }) -> FollowUpChatUpdateResponse</code>
- <code title="get /v2/bundles/{bundle_id}/follow-up-chats">client.bundles.followUpChats.<a href="./src/resources/bundles/follow-up-chats.ts">list</a>(bundleID, { ...params }) -> FollowUpChatListResponse</code>
- <code title="delete /v2/bundles/{bundle_id}/follow-up-chats/{id}">client.bundles.followUpChats.<a href="./src/resources/bundles/follow-up-chats.ts">delete</a>(id, { ...params }) -> FollowUpChatDeleteResponse</code>
- <code title="post /v2/bundles/{bundle_id}/follow-up-chats/generate">client.bundles.followUpChats.<a href="./src/resources/bundles/follow-up-chats.ts">generate</a>(bundleID) -> FollowUpChatGenerateResponse</code>

## Partners

Types:

- <code><a href="./src/resources/bundles/partners.ts">PartnerListResponse</a></code>
- <code><a href="./src/resources/bundles/partners.ts">PartnerAddResponse</a></code>
- <code><a href="./src/resources/bundles/partners.ts">PartnerRemoveResponse</a></code>

Methods:

- <code title="get /v2/bundles/{bundle_id}/partners">client.bundles.partners.<a href="./src/resources/bundles/partners.ts">list</a>(bundleID, { ...params }) -> PartnerListResponse</code>
- <code title="post /v2/bundles/{bundle_id}/partners">client.bundles.partners.<a href="./src/resources/bundles/partners.ts">add</a>(bundleID, { ...params }) -> PartnerAddResponse</code>
- <code title="delete /v2/bundles/{bundle_id}/partners/{id}">client.bundles.partners.<a href="./src/resources/bundles/partners.ts">remove</a>(id, { ...params }) -> PartnerRemoveResponse</code>

# Businesses

Types:

- <code><a href="./src/resources/businesses.ts">BusinessRetrieveEnabledEpaymentsResponse</a></code>

Methods:

- <code title="get /v2/businesses/enabled-epayments">client.businesses.<a href="./src/resources/businesses.ts">retrieveEnabledEpayments</a>() -> BusinessRetrieveEnabledEpaymentsResponse</code>

# Locations

Types:

- <code><a href="./src/resources/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /v2/locations">client.locations.<a href="./src/resources/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

# Order

Types:

- <code><a href="./src/resources/order/order.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUpdateResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderDeleteResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderCancelAwbResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderChangeStatusResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderCheckPaymentResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderCheckSettlementResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderCreatePaymentResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderCreateShipmentStatusHistoryResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderDuplicateResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderGenerateAwbResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderGetActionsResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderGetChatResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderGetChatsResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderListEmailsResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderListTagsResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderMarkNotSpamResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderRetrieveByPgReferenceIDResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderRetrieveByPgReferenceIDsResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderSendLmsAccessResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderSendProductDigitalResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderStatisticsResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderTriggerPurchaseResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUpdateCustomerResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUpdateShipmentResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUpdateShipmentReceiptResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUpdateTagsResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUploadResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUploadChangeStatusResponse</a></code>
- <code><a href="./src/resources/order/order.ts">OrderUploadReceiptResponse</a></code>

Methods:

- <code title="post /v2/order">client.order.<a href="./src/resources/order/order.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /v2/order/{id}">client.order.<a href="./src/resources/order/order.ts">retrieve</a>(id) -> OrderRetrieveResponse</code>
- <code title="patch /v2/order/{id}">client.order.<a href="./src/resources/order/order.ts">update</a>(id, { ...params }) -> OrderUpdateResponse</code>
- <code title="get /v2/order">client.order.<a href="./src/resources/order/order.ts">list</a>({ ...params }) -> OrderListResponse</code>
- <code title="post /v2/order/delete">client.order.<a href="./src/resources/order/order.ts">delete</a>({ ...params }) -> OrderDeleteResponse</code>
- <code title="post /v2/order/cancel-awb">client.order.<a href="./src/resources/order/order.ts">cancelAwb</a>({ ...params }) -> OrderCancelAwbResponse</code>
- <code title="post /v2/order/change-status">client.order.<a href="./src/resources/order/order.ts">changeStatus</a>({ ...params }) -> OrderChangeStatusResponse</code>
- <code title="post /v2/order/{id}/check-payment">client.order.<a href="./src/resources/order/order.ts">checkPayment</a>(id) -> OrderCheckPaymentResponse</code>
- <code title="post /v2/order/{id}/check-settlement">client.order.<a href="./src/resources/order/order.ts">checkSettlement</a>(id) -> OrderCheckSettlementResponse</code>
- <code title="post /v2/order/{id}/payment">client.order.<a href="./src/resources/order/order.ts">createPayment</a>(id) -> OrderCreatePaymentResponse</code>
- <code title="post /v2/order/{id}/shipment-status-history">client.order.<a href="./src/resources/order/order.ts">createShipmentStatusHistory</a>(id, { ...params }) -> OrderCreateShipmentStatusHistoryResponse</code>
- <code title="post /v2/order/{id}/duplicate">client.order.<a href="./src/resources/order/order.ts">duplicate</a>(id, { ...params }) -> OrderDuplicateResponse</code>
- <code title="post /v2/order/generate-awb">client.order.<a href="./src/resources/order/order.ts">generateAwb</a>({ ...params }) -> OrderGenerateAwbResponse</code>
- <code title="get /v2/order/{id}/actions">client.order.<a href="./src/resources/order/order.ts">getActions</a>(id) -> OrderGetActionsResponse</code>
- <code title="get /v2/order/{id}/chat/{chat_id}">client.order.<a href="./src/resources/order/order.ts">getChat</a>(chatID, { ...params }) -> OrderGetChatResponse</code>
- <code title="get /v2/order/{id}/chats">client.order.<a href="./src/resources/order/order.ts">getChats</a>(id) -> OrderGetChatsResponse</code>
- <code title="get /v2/order/{id}/emails">client.order.<a href="./src/resources/order/order.ts">listEmails</a>(id) -> OrderListEmailsResponse</code>
- <code title="get /v2/order/tags">client.order.<a href="./src/resources/order/order.ts">listTags</a>({ ...params }) -> OrderListTagsResponse</code>
- <code title="post /v2/order/mark-not-spam">client.order.<a href="./src/resources/order/order.ts">markNotSpam</a>({ ...params }) -> OrderMarkNotSpamResponse</code>
- <code title="get /v2/order/pg-reference-id/{pg_reference_id}">client.order.<a href="./src/resources/order/order.ts">retrieveByPgReferenceID</a>(pgReferenceID) -> OrderRetrieveByPgReferenceIDResponse</code>
- <code title="get /v2/order/pg-reference-ids">client.order.<a href="./src/resources/order/order.ts">retrieveByPgReferenceIDs</a>({ ...params }) -> OrderRetrieveByPgReferenceIDsResponse</code>
- <code title="post /v2/order/{id}/send-lms-access">client.order.<a href="./src/resources/order/order.ts">sendLmsAccess</a>(id) -> OrderSendLmsAccessResponse</code>
- <code title="post /v2/order/{id}/send-product-digital">client.order.<a href="./src/resources/order/order.ts">sendProductDigital</a>(id) -> OrderSendProductDigitalResponse</code>
- <code title="get /v2/order/statistics">client.order.<a href="./src/resources/order/order.ts">statistics</a>({ ...params }) -> OrderStatisticsResponse</code>
- <code title="post /v2/order/{id}/trigger-purchase">client.order.<a href="./src/resources/order/order.ts">triggerPurchase</a>(id) -> OrderTriggerPurchaseResponse</code>
- <code title="patch /v2/order/{id}/customer">client.order.<a href="./src/resources/order/order.ts">updateCustomer</a>(id, { ...params }) -> OrderUpdateCustomerResponse</code>
- <code title="patch /v2/order/{id}/shipment">client.order.<a href="./src/resources/order/order.ts">updateShipment</a>(id, { ...params }) -> OrderUpdateShipmentResponse</code>
- <code title="patch /v2/order/{id}/shipment-receipt">client.order.<a href="./src/resources/order/order.ts">updateShipmentReceipt</a>(id, { ...params }) -> OrderUpdateShipmentReceiptResponse</code>
- <code title="post /v2/order/{id}/update-tags">client.order.<a href="./src/resources/order/order.ts">updateTags</a>(id, { ...params }) -> OrderUpdateTagsResponse</code>
- <code title="post /v2/order/upload">client.order.<a href="./src/resources/order/order.ts">upload</a>({ ...params }) -> OrderUploadResponse</code>
- <code title="post /v2/order/upload-change-status">client.order.<a href="./src/resources/order/order.ts">uploadChangeStatus</a>({ ...params }) -> OrderUploadChangeStatusResponse</code>
- <code title="post /v2/order/upload-receipt">client.order.<a href="./src/resources/order/order.ts">uploadReceipt</a>({ ...params }) -> OrderUploadReceiptResponse</code>

## MessageHistory

Types:

- <code><a href="./src/resources/order/message-history.ts">MessageHistoryAddResponse</a></code>
- <code><a href="./src/resources/order/message-history.ts">MessageHistoryShowResponse</a></code>

Methods:

- <code title="post /v2/order/{id}/message-history">client.order.messageHistory.<a href="./src/resources/order/message-history.ts">add</a>(id, { ...params }) -> MessageHistoryAddResponse</code>
- <code title="get /v2/order/{id}/message-history">client.order.messageHistory.<a href="./src/resources/order/message-history.ts">show</a>(id) -> MessageHistoryShowResponse</code>

# ProductTaxonomies

Types:

- <code><a href="./src/resources/product-taxonomies.ts">ProductTaxonomyRetrieveResponse</a></code>
- <code><a href="./src/resources/product-taxonomies.ts">ProductTaxonomyListResponse</a></code>

Methods:

- <code title="get /v2/product-taxonomies/{id}">client.productTaxonomies.<a href="./src/resources/product-taxonomies.ts">retrieve</a>(id) -> ProductTaxonomyRetrieveResponse</code>
- <code title="get /v2/product-taxonomies">client.productTaxonomies.<a href="./src/resources/product-taxonomies.ts">list</a>({ ...params }) -> ProductTaxonomyListResponse</code>

# Products

Types:

- <code><a href="./src/resources/products/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductDeleteResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductCountResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductListSimplifiedResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductShowRelationsResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductUpdateSharingResponse</a></code>

Methods:

- <code title="post /v2/products">client.products.<a href="./src/resources/products/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /v2/products/{id}">client.products.<a href="./src/resources/products/products.ts">retrieve</a>(id) -> ProductRetrieveResponse</code>
- <code title="patch /v2/products/{id}">client.products.<a href="./src/resources/products/products.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /v2/products">client.products.<a href="./src/resources/products/products.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="delete /v2/products/{id}">client.products.<a href="./src/resources/products/products.ts">delete</a>(id) -> ProductDeleteResponse</code>
- <code title="get /v2/products/count">client.products.<a href="./src/resources/products/products.ts">count</a>({ ...params }) -> ProductCountResponse</code>
- <code title="get /v2/products/simplified">client.products.<a href="./src/resources/products/products.ts">listSimplified</a>({ ...params }) -> ProductListSimplifiedResponse</code>
- <code title="get /v2/products/{product_id}/relations">client.products.<a href="./src/resources/products/products.ts">showRelations</a>(productID) -> ProductShowRelationsResponse</code>
- <code title="patch /v2/products/{product_id}/sharing">client.products.<a href="./src/resources/products/products.ts">updateSharing</a>(productID, { ...params }) -> ProductUpdateSharingResponse</code>

## FollowUpChats

Types:

- <code><a href="./src/resources/products/follow-up-chats.ts">FollowUpChatCreateResponse</a></code>
- <code><a href="./src/resources/products/follow-up-chats.ts">FollowUpChatRetrieveResponse</a></code>
- <code><a href="./src/resources/products/follow-up-chats.ts">FollowUpChatUpdateResponse</a></code>
- <code><a href="./src/resources/products/follow-up-chats.ts">FollowUpChatListResponse</a></code>
- <code><a href="./src/resources/products/follow-up-chats.ts">FollowUpChatDeleteResponse</a></code>
- <code><a href="./src/resources/products/follow-up-chats.ts">FollowUpChatGenerateResponse</a></code>

Methods:

- <code title="post /v2/products/{product_id}/follow-up-chats">client.products.followUpChats.<a href="./src/resources/products/follow-up-chats.ts">create</a>(productID, { ...params }) -> FollowUpChatCreateResponse</code>
- <code title="get /v2/products/{product_id}/follow-up-chats/{id}">client.products.followUpChats.<a href="./src/resources/products/follow-up-chats.ts">retrieve</a>(id, { ...params }) -> FollowUpChatRetrieveResponse</code>
- <code title="patch /v2/products/{product_id}/follow-up-chats/{id}">client.products.followUpChats.<a href="./src/resources/products/follow-up-chats.ts">update</a>(id, { ...params }) -> FollowUpChatUpdateResponse</code>
- <code title="get /v2/products/{product_id}/follow-up-chats">client.products.followUpChats.<a href="./src/resources/products/follow-up-chats.ts">list</a>(productID, { ...params }) -> FollowUpChatListResponse</code>
- <code title="delete /v2/products/{product_id}/follow-up-chats/{id}">client.products.followUpChats.<a href="./src/resources/products/follow-up-chats.ts">delete</a>(id, { ...params }) -> FollowUpChatDeleteResponse</code>
- <code title="post /v2/products/{product_id}/follow-up-chats/generate">client.products.followUpChats.<a href="./src/resources/products/follow-up-chats.ts">generate</a>(productID) -> FollowUpChatGenerateResponse</code>

## Partners

Types:

- <code><a href="./src/resources/products/partners.ts">PartnerCreateResponse</a></code>
- <code><a href="./src/resources/products/partners.ts">PartnerListResponse</a></code>
- <code><a href="./src/resources/products/partners.ts">PartnerDeleteResponse</a></code>

Methods:

- <code title="post /v2/products/{product_id}/partners">client.products.partners.<a href="./src/resources/products/partners.ts">create</a>(productID, { ...params }) -> PartnerCreateResponse</code>
- <code title="get /v2/products/{product_id}/partners">client.products.partners.<a href="./src/resources/products/partners.ts">list</a>(productID, { ...params }) -> PartnerListResponse</code>
- <code title="delete /v2/products/{product_id}/partners/{id}">client.products.partners.<a href="./src/resources/products/partners.ts">delete</a>(id, { ...params }) -> PartnerDeleteResponse</code>

# ShippingCosts

Types:

- <code><a href="./src/resources/shipping-costs.ts">ShippingCostGetCourierServicesResponse</a></code>
- <code><a href="./src/resources/shipping-costs.ts">ShippingCostGetEstimatesResponse</a></code>
- <code><a href="./src/resources/shipping-costs.ts">ShippingCostSearchWarehousesResponse</a></code>

Methods:

- <code title="post /v2/shipping-costs/search-courier-service">client.shippingCosts.<a href="./src/resources/shipping-costs.ts">getCourierServices</a>() -> ShippingCostGetCourierServicesResponse</code>
- <code title="post /v2/shipping-costs">client.shippingCosts.<a href="./src/resources/shipping-costs.ts">getEstimates</a>() -> ShippingCostGetEstimatesResponse</code>
- <code title="post /v2/shipping-costs/search-warehouse">client.shippingCosts.<a href="./src/resources/shipping-costs.ts">searchWarehouses</a>() -> ShippingCostSearchWarehousesResponse</code>

# Stores

Types:

- <code><a href="./src/resources/stores/stores.ts">StoreCreateResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreRetrieveResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreUpdateResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreListResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreDeleteResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreListCustomAudiencesResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreListPagesResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreListPaymentAccountsResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreListSalesPeopleResponse</a></code>
- <code><a href="./src/resources/stores/stores.ts">StoreListSimplifiedResponse</a></code>

Methods:

- <code title="post /v2/stores">client.stores.<a href="./src/resources/stores/stores.ts">create</a>({ ...params }) -> StoreCreateResponse</code>
- <code title="get /v2/stores/{id}">client.stores.<a href="./src/resources/stores/stores.ts">retrieve</a>(id) -> StoreRetrieveResponse</code>
- <code title="patch /v2/stores/{id}">client.stores.<a href="./src/resources/stores/stores.ts">update</a>(id, { ...params }) -> StoreUpdateResponse</code>
- <code title="get /v2/stores">client.stores.<a href="./src/resources/stores/stores.ts">list</a>({ ...params }) -> StoreListResponse</code>
- <code title="delete /v2/stores/{id}">client.stores.<a href="./src/resources/stores/stores.ts">delete</a>(id) -> StoreDeleteResponse</code>
- <code title="get /v2/stores/{store_id}/custom-audiences">client.stores.<a href="./src/resources/stores/stores.ts">listCustomAudiences</a>(storeID) -> StoreListCustomAudiencesResponse</code>
- <code title="get /v2/stores/{store_id}/pages">client.stores.<a href="./src/resources/stores/stores.ts">listPages</a>(storeID, { ...params }) -> StoreListPagesResponse</code>
- <code title="get /v2/stores/{store_id}/payment-accounts">client.stores.<a href="./src/resources/stores/stores.ts">listPaymentAccounts</a>(storeID, { ...params }) -> StoreListPaymentAccountsResponse</code>
- <code title="get /v2/stores/{store_id}/sales-people">client.stores.<a href="./src/resources/stores/stores.ts">listSalesPeople</a>(storeID, { ...params }) -> StoreListSalesPeopleResponse</code>
- <code title="get /v2/stores/simplified">client.stores.<a href="./src/resources/stores/stores.ts">listSimplified</a>({ ...params }) -> StoreListSimplifiedResponse</code>

## Bpos

Types:

- <code><a href="./src/resources/stores/bpos.ts">BpoAddResponse</a></code>
- <code><a href="./src/resources/stores/bpos.ts">BpoRemoveResponse</a></code>
- <code><a href="./src/resources/stores/bpos.ts">BpoViewRelationsResponse</a></code>

Methods:

- <code title="post /v2/stores/{store_id}/bpos">client.stores.bpos.<a href="./src/resources/stores/bpos.ts">add</a>(storeID, { ...params }) -> BpoAddResponse</code>
- <code title="delete /v2/stores/{store_id}/bpos/{id}">client.stores.bpos.<a href="./src/resources/stores/bpos.ts">remove</a>(id, { ...params }) -> BpoRemoveResponse</code>
- <code title="get /v2/stores/{store_id}/bpos/{id}/relations">client.stores.bpos.<a href="./src/resources/stores/bpos.ts">viewRelations</a>(id, { ...params }) -> BpoViewRelationsResponse</code>

## Bundles

Types:

- <code><a href="./src/resources/stores/bundles.ts">BundleRetrieveResponse</a></code>
- <code><a href="./src/resources/stores/bundles.ts">BundleListResponse</a></code>

Methods:

- <code title="get /v2/stores/{store_id}/bundles/{bundle_id}">client.stores.bundles.<a href="./src/resources/stores/bundles.ts">retrieve</a>(bundleID, { ...params }) -> BundleRetrieveResponse</code>
- <code title="get /v2/stores/{store_id}/bundles">client.stores.bundles.<a href="./src/resources/stores/bundles.ts">list</a>(storeID, { ...params }) -> BundleListResponse</code>

## CourierServices

Types:

- <code><a href="./src/resources/stores/courier-services.ts">CourierServiceAddResponse</a></code>
- <code><a href="./src/resources/stores/courier-services.ts">CourierServiceRemoveResponse</a></code>

Methods:

- <code title="post /v2/stores/{store_id}/courier-services">client.stores.courierServices.<a href="./src/resources/stores/courier-services.ts">add</a>(storeID, { ...params }) -> CourierServiceAddResponse</code>
- <code title="delete /v2/stores/{store_id}/courier-services">client.stores.courierServices.<a href="./src/resources/stores/courier-services.ts">remove</a>(storeID, { ...params }) -> CourierServiceRemoveResponse</code>

## FollowUpChats

Types:

- <code><a href="./src/resources/stores/follow-up-chats.ts">FollowUpChatCreateResponse</a></code>
- <code><a href="./src/resources/stores/follow-up-chats.ts">FollowUpChatRetrieveResponse</a></code>
- <code><a href="./src/resources/stores/follow-up-chats.ts">FollowUpChatUpdateResponse</a></code>
- <code><a href="./src/resources/stores/follow-up-chats.ts">FollowUpChatListResponse</a></code>
- <code><a href="./src/resources/stores/follow-up-chats.ts">FollowUpChatDeleteResponse</a></code>

Methods:

- <code title="post /v2/stores/{store_id}/follow-up-chats">client.stores.followUpChats.<a href="./src/resources/stores/follow-up-chats.ts">create</a>(storeID, { ...params }) -> FollowUpChatCreateResponse</code>
- <code title="get /v2/stores/{store_id}/follow-up-chats/{id}">client.stores.followUpChats.<a href="./src/resources/stores/follow-up-chats.ts">retrieve</a>(id, { ...params }) -> FollowUpChatRetrieveResponse</code>
- <code title="patch /v2/stores/{store_id}/follow-up-chats/{id}">client.stores.followUpChats.<a href="./src/resources/stores/follow-up-chats.ts">update</a>(id, { ...params }) -> FollowUpChatUpdateResponse</code>
- <code title="get /v2/stores/{store_id}/follow-up-chats">client.stores.followUpChats.<a href="./src/resources/stores/follow-up-chats.ts">list</a>(storeID, { ...params }) -> FollowUpChatListResponse</code>
- <code title="delete /v2/stores/{store_id}/follow-up-chats/{id}">client.stores.followUpChats.<a href="./src/resources/stores/follow-up-chats.ts">delete</a>(id, { ...params }) -> FollowUpChatDeleteResponse</code>

## PaymentMethods

Types:

- <code><a href="./src/resources/stores/payment-methods.ts">PaymentMethodListResponse</a></code>
- <code><a href="./src/resources/stores/payment-methods.ts">PaymentMethodAddResponse</a></code>
- <code><a href="./src/resources/stores/payment-methods.ts">PaymentMethodRemoveResponse</a></code>

Methods:

- <code title="get /v2/stores/{store_id}/payment-methods">client.stores.paymentMethods.<a href="./src/resources/stores/payment-methods.ts">list</a>(storeID, { ...params }) -> PaymentMethodListResponse</code>
- <code title="post /v2/stores/{store_id}/payment-methods">client.stores.paymentMethods.<a href="./src/resources/stores/payment-methods.ts">add</a>(storeID, { ...params }) -> PaymentMethodAddResponse</code>
- <code title="delete /v2/stores/{store_id}/payment-methods">client.stores.paymentMethods.<a href="./src/resources/stores/payment-methods.ts">remove</a>(storeID, { ...params }) -> PaymentMethodRemoveResponse</code>

## Products

Types:

- <code><a href="./src/resources/stores/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/stores/products.ts">ProductAddResponse</a></code>
- <code><a href="./src/resources/stores/products.ts">ProductRemoveResponse</a></code>
- <code><a href="./src/resources/stores/products.ts">ProductViewRelationsResponse</a></code>

Methods:

- <code title="get /v2/stores/{store_id}/products">client.stores.products.<a href="./src/resources/stores/products.ts">list</a>(storeID, { ...params }) -> ProductListResponse</code>
- <code title="post /v2/stores/{store_id}/products">client.stores.products.<a href="./src/resources/stores/products.ts">add</a>(storeID, { ...params }) -> ProductAddResponse</code>
- <code title="delete /v2/stores/{store_id}/products/{id}">client.stores.products.<a href="./src/resources/stores/products.ts">remove</a>(id, { ...params }) -> ProductRemoveResponse</code>
- <code title="get /v2/stores/{store_id}/products/{id}/relations">client.stores.products.<a href="./src/resources/stores/products.ts">viewRelations</a>(id, { ...params }) -> ProductViewRelationsResponse</code>

## StoreAdmins

Types:

- <code><a href="./src/resources/stores/store-admins.ts">StoreAdminListResponse</a></code>
- <code><a href="./src/resources/stores/store-admins.ts">StoreAdminAddResponse</a></code>
- <code><a href="./src/resources/stores/store-admins.ts">StoreAdminRemoveResponse</a></code>

Methods:

- <code title="get /v2/stores/{store_id}/store-admins">client.stores.storeAdmins.<a href="./src/resources/stores/store-admins.ts">list</a>(storeID, { ...params }) -> StoreAdminListResponse</code>
- <code title="post /v2/stores/{store_id}/store-admins">client.stores.storeAdmins.<a href="./src/resources/stores/store-admins.ts">add</a>(storeID, { ...params }) -> StoreAdminAddResponse</code>
- <code title="delete /v2/stores/{store_id}/store-admins/{bu_id}">client.stores.storeAdmins.<a href="./src/resources/stores/store-admins.ts">remove</a>(buID, { ...params }) -> StoreAdminRemoveResponse</code>

## StoreAdvertisers

Types:

- <code><a href="./src/resources/stores/store-advertisers.ts">StoreAdvertiserListResponse</a></code>
- <code><a href="./src/resources/stores/store-advertisers.ts">StoreAdvertiserAddResponse</a></code>
- <code><a href="./src/resources/stores/store-advertisers.ts">StoreAdvertiserRemoveResponse</a></code>

Methods:

- <code title="get /v2/stores/{store_id}/store-advertisers">client.stores.storeAdvertisers.<a href="./src/resources/stores/store-advertisers.ts">list</a>(storeID, { ...params }) -> StoreAdvertiserListResponse</code>
- <code title="post /v2/stores/{store_id}/store-advertisers">client.stores.storeAdvertisers.<a href="./src/resources/stores/store-advertisers.ts">add</a>(storeID, { ...params }) -> StoreAdvertiserAddResponse</code>
- <code title="delete /v2/stores/{store_id}/store-advertisers/{bu_id}">client.stores.storeAdvertisers.<a href="./src/resources/stores/store-advertisers.ts">remove</a>(buID, { ...params }) -> StoreAdvertiserRemoveResponse</code>

# Variants

Types:

- <code><a href="./src/resources/variants/variants.ts">VariantRetrieveResponse</a></code>

Methods:

- <code title="get /v2/variants/{id}">client.variants.<a href="./src/resources/variants/variants.ts">retrieve</a>(id) -> VariantRetrieveResponse</code>

## DigitalProductFiles

Types:

- <code><a href="./src/resources/variants/digital-product-files.ts">DigitalProductFileCreateResponse</a></code>
- <code><a href="./src/resources/variants/digital-product-files.ts">DigitalProductFileRetrieveResponse</a></code>
- <code><a href="./src/resources/variants/digital-product-files.ts">DigitalProductFileListResponse</a></code>
- <code><a href="./src/resources/variants/digital-product-files.ts">DigitalProductFileDeleteResponse</a></code>

Methods:

- <code title="post /v2/variants/{variant_id}/digital-product-files">client.variants.digitalProductFiles.<a href="./src/resources/variants/digital-product-files.ts">create</a>(variantID, { ...params }) -> DigitalProductFileCreateResponse</code>
- <code title="get /v2/variants/{variant_id}/digital-product-files/{id}">client.variants.digitalProductFiles.<a href="./src/resources/variants/digital-product-files.ts">retrieve</a>(id, { ...params }) -> DigitalProductFileRetrieveResponse</code>
- <code title="get /v2/variants/{variant_id}/digital-product-files">client.variants.digitalProductFiles.<a href="./src/resources/variants/digital-product-files.ts">list</a>(variantID, { ...params }) -> DigitalProductFileListResponse</code>
- <code title="delete /v2/variants/{variant_id}/digital-product-files/{id}">client.variants.digitalProductFiles.<a href="./src/resources/variants/digital-product-files.ts">delete</a>(id, { ...params }) -> DigitalProductFileDeleteResponse</code>
