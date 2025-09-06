# Scalev API TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/scalev-api-typescript.git
cd scalev-api-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export SCALEV_API_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y scalev-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "scalev_api_api": {
      "command": "node",
      "args": [
        "/path/to/local/scalev-api-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "SCALEV_API_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ---------------------- | ------------------------ | --------------- |
| `x-scalev-api-api-key` | `apiKey` | bearerApiKey |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "scalev_api_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "scalev-mcp/server";

// import a specific tool
import createBundles from "scalev-mcp/tools/bundles/create-bundles";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createBundles, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `bundles`:

- `create_bundles` (`write`): Creates a new bundle with the provided data.
- `retrieve_bundles` (`read`): Retrieves a bundle by its ID.
- `update_bundles` (`write`): Updates an existing bundle with the provided data.
- `list_bundles` (`read`): Retrieves a paginated list of bundles with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `delete_bundles` (`write`): Deletes a bundle by its ID.
- `count_bundles` (`read`): Retrieves the total count of bundles for the authenticated business. This endpoint does not support any filtering or pagination.
- `list_simplified_bundles` (`read`): Retrieves a paginated list of bundles with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25. This endpoint returns a simplified version of the bundle data, including only essential fields and active bundle price options.
- `show_relations_bundles` (`read`): Retrieves a bundle along with its related entities such as active bundle price options and their associated stores and form displays.
- `update_sharing_bundles` (`write`): Updates the sharing setting of an existing bundle.

### Resource `bundles.bpos`:

- `create_bundles_bpos` (`write`): Creates a new bundle price option associated with a specific bundle using the provided data.
- `update_bundles_bpos` (`write`): Updates an existing bundle price option associated with a specific bundle using the provided data.
- `list_bundles_bpos` (`read`): Retrieves a paginated list of bundle price options associated with a specific bundle. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `delete_bundles_bpos` (`write`): Deletes a bundle price option associated with a specific bundle by its ID.
- `show_relations_bundles_bpos` (`read`): Retrieves a bundle price option along with its related entities such as associated stores and form displays.

### Resource `bundles.follow_up_chats`:

- `create_bundles_follow_up_chats` (`write`): Create a follow up chat template for a bundle.
- `retrieve_bundles_follow_up_chats` (`read`): Retrieves a follow up chat template by its ID.
- `update_bundles_follow_up_chats` (`write`): Updates a follow up chat template.
- `list_bundles_follow_up_chats` (`read`): Retrieves a paginated list of follow up chats for a bundle.
- `delete_bundles_follow_up_chats` (`write`): Deletes a follow up chat template.
- `generate_bundles_follow_up_chats` (`write`): Generates a new follow up chat for a bundle.

### Resource `bundles.partners`:

- `list_bundles_partners` (`read`): Retrieves a paginated list of partners associated with a specific bundle. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `add_bundles_partners` (`write`): Associates a partner with a specific bundle using the provided unique identifier.
- `remove_bundles_partners` (`write`): Dissociates a partner from a specific bundle by its ID.

### Resource `businesses`:

- `retrieve_enabled_epayments_businesses` (`read`): Fetches the list of enabled e-payment methods for a specified business.

### Resource `locations`:

- `list_locations` (`read`): Retrieve a list of locations with search and pagination.

### Resource `order`:

- `create_order` (`write`): Create a new order with the provided details.
- `retrieve_order` (`read`): Retrieve detailed information about a specific order.
- `update_order` (`write`): Update order details by ID.
- `list_order` (`read`): Retrieves a paginated list of orders with optional filtering. The data is sorted by created_at in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `delete_order` (`write`): Delete multiple orders by IDs.
- `cancel_awb_order` (`write`): Cancel Air Waybill for multiple orders.
- `change_status_order` (`write`): Change the status of multiple orders.
- `check_payment_order` (`write`): Check the payment status of an order.
- `check_settlement_order` (`write`): Check the settlement status of an order.
- `create_payment_order` (`write`): Create a payment request / intent for an order.
- `create_shipment_status_history_order` (`write`): Create a new shipment status history entry for an order.
- `duplicate_order` (`write`): Create a duplicate of an order and cancel the original.
- `generate_awb_order` (`write`): Generate Air Waybill for multiple orders.
- `get_actions_order` (`read`): Retrieve flags to determine available actions for an order.
- `get_chat_order` (`read`): Retrieve a specific chat text message.
- `get_chats_order` (`read`): Retrieve chat text messages associated with an order.
- `list_emails_order` (`read`): Get list of emails sent for an order.
- `list_tags_order` (`read`): Retrieve a list of tags associated with orders.
- `mark_not_spam_order` (`write`): Mark multiple orders as not spam.
- `retrieve_by_pg_reference_id_order` (`read`): Retrieve order details using payment gateway reference ID.
- `retrieve_by_pg_reference_ids_order` (`read`): Retrieve orders using multiple payment gateway reference IDs.
- `send_lms_access_order` (`write`): Send LMS access email to customer.
- `send_product_digital_order` (`write`): Send email containing links to download digital products to customer.
- `statistics_order` (`read`): Retrieves descriptive statistics about orders, such as total orders, total revenue, and other aggregated data. Can be filtered using the same parameters as the orders list endpoint.
- `trigger_purchase_order` (`write`): Trigger purchase event for analytics and tracking.
- `update_customer_order` (`write`): Update the customer associated with an order.
- `update_shipment_order` (`write`): Update shipment-related data for an order.
- `update_shipment_receipt_order` (`write`): Update shipment receipt / tracking ID for an order.
- `update_tags_order` (`write`): Update tags for an order.
- `upload_order` (`write`): Upload orders from CSV file. (1) Archive mode. Choose this mode if you want to import old data from another platform you've been using. You can directly create products that you made on your previous platform. Orders that are created will immediately have 'Completed' status. Download template for Archive mode here: https://app.scalev.id/example/template_archive.csv. (2) Regular mode. Choose this mode if you want to enter current data that you wish to input in bulk, not one by one via order input. It will take inventory into account if your products have inventory enabled. Successfully created orders will have 'Created', 'Pending', or 'Confirmed' status, depending on the completeness of the data. Download template for Regular mode here: https://app.scalev.id/example/template_regular.csv.
- `upload_change_status_order` (`write`): Upload a CSV file to change status of multiple orders. Template file can be downloaded from the link here: https://app.scalev.id/example/update_status_template.csv. (1) Leave blank the 'shipment_receipt' field if you don't want to change the receipt/tracking number. Note: this will not change receipts/tracking numbers that are automatically generated by Scalev through the 'Request Pickup' menu. (2) Leave blank the 'day', 'month', and 'year' fields if you want to use the time of upload.
- `upload_receipt_order` (`write`): Upload file to update shipment receipts (tracking IDs) for multiple orders. Template file can be downloaded from the link here: https://app.scalev.id/example/receipt_template.csv.

### Resource `order.message_history`:

- `add_order_message_history` (`write`): Add a new message to order message history.
- `show_order_message_history` (`read`): Get message history for an order.

### Resource `product_taxonomies`:

- `retrieve_product_taxonomies` (`read`): Shows a single product taxonomy by ID.
- `list_product_taxonomies` (`read`): Retrieves a paginated list of product taxonomies.

### Resource `products`:

- `create_products` (`write`): Creates a new product with the provided data.
- `retrieve_products` (`read`): Retrieves the details of a single product, including its variants and other associated data.
- `update_products` (`write`): Updates the details of a product, including its variants.
- `list_products` (`read`): Retrieves a paginated list of products with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `delete_products` (`write`): Deletes a product and all its associated data.
- `count_products` (`read`): Returns the total count of products.
- `list_simplified_products` (`read`): Retrieves a simplified paginated list of products with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `show_relations_products` (`read`): Shows the relations of a product, including variants, stores, bundles, and pages.
- `update_sharing_products` (`write`): Updates the product sharing settings for a given product.

### Resource `products.follow_up_chats`:

- `create_products_follow_up_chats` (`write`): Create a follow up chat template for a product.
- `retrieve_products_follow_up_chats` (`read`): Shows a single follow up chat template by ID.
- `update_products_follow_up_chats` (`write`): Updates a follow up chat template.
- `list_products_follow_up_chats` (`read`): Retrieves a paginated list of follow up chats for a product.
- `delete_products_follow_up_chats` (`write`): Deletes a follow up chat template.
- `generate_products_follow_up_chats` (`write`): Generates a new follow up chat for a product.

### Resource `products.partners`:

- `create_products_partners` (`write`): Creates a new product partner.
- `list_products_partners` (`read`): Retrieves a paginated list of product partners.
- `delete_products_partners` (`write`): Deletes a product partner.

### Resource `shipping_costs`:

- `get_courier_services_shipping_costs` (`write`): Retrieve available courier services based on warehouse, destination, payment method, and package weight.
- `get_estimates_shipping_costs` (`write`): Retrieve shipping cost estimates based on origin, destination, courier services, and package weight.
- `search_warehouses_shipping_costs` (`write`): Search for warehouses based on order details, store, destination, and product variants.

### Resource `stores`:

- `create_stores` (`write`): Creates a new store with the provided details.
- `retrieve_stores` (`read`): Retrieves detailed information about a specific store identified by its ID.
- `update_stores` (`write`): Updates the details of an existing store identified by its ID.
- `list_stores` (`read`): Retrieves a paginated list of stores with optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `delete_stores` (`write`): Deletes a store and all its associated data.
- `list_custom_audiences_stores` (`read`): Retrieves a list of custom audiences associated with a specific store.
- `list_pages_stores` (`read`): Retrieves a paginated list of pages associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `list_payment_accounts_stores` (`read`): Retrieves a paginated list of payment accounts associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `list_sales_people_stores` (`read`): Retrieves a paginated list of sales persons associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `list_simplified_stores` (`read`): Retrieves a paginated list of stores with simplified fields and optional filtering. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.

### Resource `stores.bpos`:

- `add_stores_bpos` (`write`): Associates one or more bundle price options with a specific store.
- `remove_stores_bpos` (`write`): Dissociates a specific Bundle Price Option from a store.
- `view_relations_stores_bpos` (`read`): Retrieves detailed relation of a specific Bundle Price Option associated with a store.

### Resource `stores.bundles`:

- `retrieve_stores_bundles` (`read`): Retrieves detailed information about a specific bundle in a store.
- `list_stores_bundles` (`read`): Retrieves a paginated list of bundles available in a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.

### Resource `stores.courier_services`:

- `add_stores_courier_services` (`write`): Associates one or more courier services with a specific store.
- `remove_stores_courier_services` (`write`): Dissociates one or more courier services from a specific store.

### Resource `stores.follow_up_chats`:

- `create_stores_follow_up_chats` (`write`): Create a follow up chat template for a store.
- `retrieve_stores_follow_up_chats` (`read`): Retrieves a follow up chat template by its ID.
- `update_stores_follow_up_chats` (`write`): Updates a follow up chat template.
- `list_stores_follow_up_chats` (`read`): Retrieves a paginated list of follow up chats for a store.
- `delete_stores_follow_up_chats` (`write`): Deletes a follow up chat template.

### Resource `stores.payment_methods`:

- `list_stores_payment_methods` (`read`): Retrieves a list of payment methods associated with a specific store.
- `add_stores_payment_methods` (`write`): Associates one or more payment methods with a specific store.
- `remove_stores_payment_methods` (`write`): Dissociates a specific payment method from a store.

### Resource `stores.products`:

- `list_stores_products` (`read`): Retrieves a paginated list of products available in a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `add_stores_products` (`write`): Associates one or more products with a specific store.
- `remove_stores_products` (`write`): Dissociates a specific Product from a store.
- `view_relations_stores_products` (`read`): Retrieves detailed relation of a specific Product associated with a store.

### Resource `stores.store_admins`:

- `list_stores_store_admins` (`read`): Retrieves a paginated list of store admins associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `add_stores_store_admins` (`write`): Associates one or more business users as store admins to a specific store.
- `remove_stores_store_admins` (`write`): Dissociates a specific business user as a store admin from a store.

### Resource `stores.store_advertisers`:

- `list_stores_store_advertisers` (`read`): Retrieves a paginated list of store advertisers associated with a specific store. The data is sorted by id in descending order and cannot be changed. Uses cursor-based pagination with default page size of 25 and maximum of 25.
- `add_stores_store_advertisers` (`write`): Associates one or more business users as store advertisers to a specific store.
- `remove_stores_store_advertisers` (`write`): Dissociates a specific business user as a store advertiser from a store.

### Resource `variants`:

- `retrieve_variants` (`read`): Shows a single product variant by ID.

### Resource `variants.digital_product_files`:

- `create_variants_digital_product_files` (`write`): Creates a new digital product file.
- `retrieve_variants_digital_product_files` (`read`): Shows a single digital product file by ID.
- `list_variants_digital_product_files` (`read`): Retrieves a paginated list of digital product files for a variant.
- `delete_variants_digital_product_files` (`write`): Deletes a digital product file.
