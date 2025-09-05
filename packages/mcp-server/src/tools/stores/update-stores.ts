// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'stores',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v2/stores/{id}',
  operationId: 'ScalevApiWeb.StoreController.update',
};

export const tool: Tool = {
  name: 'update_stores',
  description: 'Updates the details of an existing store identified by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      auto_expire_days: {
        type: 'integer',
        description: 'Days until auto-expire',
      },
      auto_other_income: {
        type: 'string',
        description: 'Type of auto other income',
      },
      blocked_message: {
        type: 'string',
        description: 'Blocked message for spam filter',
      },
      capi_purchase_value_type: {
        type: 'string',
        description: 'Type of CAPI purchase value',
        enum: ['gross_revenue', 'net_revenue', 'adj_gross_revenue'],
      },
      cod_purchase_triggers: {
        type: 'array',
        description: 'COD purchase triggers',
        items: {
          type: 'string',
          enum: ['public_upload', 'internal_upload', 'confirmed', 'shipped', 'completed'],
        },
      },
      days_of_payment_processing: {
        type: 'integer',
        description: 'Days of payment processing',
      },
      digital_only_complete_type: {
        type: 'string',
        description: 'Type of digital-only completion',
        enum: ['auto', 'when_settled', 'manual'],
      },
      dynamic_other_income_cod_default_amount: {
        type: 'number',
        description: 'Default amount for dynamic COD income',
      },
      dynamic_other_income_cod_default_percentage: {
        type: 'number',
        description: 'Default percentage for dynamic COD income',
      },
      dynamic_other_income_cod_type: {
        type: 'string',
        description: 'Type of amount (fixed or percentage)',
        enum: ['fixed', 'percentage'],
      },
      dynamic_other_income_epayment_default_amount: {
        type: 'number',
        description: 'Default amount for dynamic e-payment income',
      },
      dynamic_other_income_epayment_default_percentage: {
        type: 'number',
        description: 'Default percentage for dynamic e-payment income',
      },
      dynamic_other_income_epayment_type: {
        type: 'string',
        description: 'Type of amount (fixed or percentage)',
        enum: ['fixed', 'percentage'],
      },
      email_notification_statuses: {
        type: 'array',
        description: 'Email notification statuses',
        items: {
          type: 'string',
        },
      },
      email_reply_to_assignment: {
        type: 'string',
        description: 'Email reply-to assignment type',
        enum: ['fixed', 'rotator'],
      },
      email_reply_to_id: {
        type: 'integer',
        description: 'Email reply-to business user ID',
      },
      fixed_auto_other_income: {
        type: 'number',
        description: 'Fixed auto other income amount',
      },
      greeting_message: {
        type: 'string',
        description: 'Greeting message for WhatsApp',
      },
      inactivity_period: {
        type: 'integer',
        description: 'Inactivity period for WhatsApp',
      },
      is_advanced_validation: {
        type: 'boolean',
        description: 'Is advanced validation enabled?',
      },
      is_auto_expire: {
        type: 'boolean',
        description: 'Is auto-expire enabled',
      },
      is_customer_otp_required: {
        type: 'boolean',
        description: 'Is customer OTP required?',
      },
      is_customer_spam_filter: {
        type: 'boolean',
        description: 'Is customer spam filter enabled?',
      },
      is_discount_editable: {
        type: 'boolean',
        description: 'Is discount editable?',
      },
      is_dropshipping_allowed: {
        type: 'boolean',
        description: 'Is dropshipping allowed in this store?',
      },
      is_email_new_order: {
        type: 'boolean',
        description: 'Is email notification for new orders enabled?',
      },
      is_email_notifications: {
        type: 'boolean',
        description: 'Is email notifications enabled?',
      },
      is_fuc_bundle_enabled: {
        type: 'boolean',
        description: 'Is follow-up chat for bundles enabled?',
      },
      is_fuc_product_enabled: {
        type: 'boolean',
        description: 'Is follow-up chat for products enabled?',
      },
      is_greeting_message_enabled: {
        type: 'boolean',
        description: 'Is greeting message enabled?',
      },
      is_ip_spam_filter: {
        type: 'boolean',
        description: 'Is IP spam filter enabled?',
      },
      is_manual_shipping_cost: {
        type: 'boolean',
        description: 'Is manual shipping cost enabled?',
      },
      is_moota_enabled: {
        type: 'boolean',
        description: 'Is Moota integration enabled for this store?',
      },
      is_postal_code: {
        type: 'boolean',
        description: 'Is postal code required for orders?',
      },
      is_show_download_invoice: {
        type: 'boolean',
        description: 'Is show download invoice option enabled?',
      },
      is_show_whatsapp: {
        type: 'boolean',
        description: 'Is show WhatsApp option enabled?',
      },
      is_spam_filter: {
        type: 'boolean',
        description: 'Is spam filter enabled?',
      },
      is_transferproof_required: {
        type: 'boolean',
        description: 'Is transfer proof required for orders in this store?',
      },
      is_unique_code: {
        type: 'boolean',
        description: 'Is unique code required for orders?',
      },
      is_use_waba: {
        type: 'boolean',
        description: 'Is WABA integration enabled?',
      },
      max_per_ip: {
        type: 'integer',
        description: 'Maximum orders per IP address',
      },
      max_per_phone: {
        type: 'integer',
        description: 'Maximum orders per phone number',
      },
      max_unique_code_amount: {
        type: 'number',
        description: 'Maximum amount for unique code orders',
      },
      min_address_length: {
        type: 'integer',
        description: 'Minimum address length for validation',
      },
      min_name_length: {
        type: 'integer',
        description: 'Minimum name length for validation',
      },
      name: {
        type: 'string',
        description: 'Store name',
      },
      non_cod_purchase_triggers: {
        type: 'array',
        description: 'Non-COD purchase triggers',
        items: {
          type: 'string',
          enum: ['public_upload', 'internal_upload', 'confirmed', 'shipped', 'completed'],
        },
      },
      other_income_name: {
        type: 'string',
        description: 'Name of the other income',
      },
      postal_code_requirement: {
        type: 'string',
        description: 'Postal code requirement options',
        enum: ['autofill', 'manual'],
      },
      store_courier_other_incomes: {
        type: 'array',
        description: 'Other incomes for store couriers',
        items: {
          type: 'object',
          title: 'StoreCourierOtherIncome',
          description: 'Store Courier Other Income Schema',
          properties: {
            courier_id: {
              type: 'integer',
              description: 'Courier ID',
            },
            type: {
              type: 'string',
              description: 'Type of other income',
              enum: ['fixed', 'percentage'],
            },
            amount: {
              type: 'number',
              description: 'Amount of other income',
            },
            percentage: {
              type: 'number',
              description: 'Percentage of other income',
            },
          },
          required: ['courier_id', 'type'],
        },
      },
      store_custom_audiences: {
        type: 'array',
        description: 'Store custom audiences',
        items: {
          type: 'object',
          title: 'StoreCustomAudience',
          description: 'Store Custom Audience Schema',
          properties: {
            custom_audience_id: {
              type: 'integer',
              description: 'Custom Audience ID',
            },
            order_status: {
              type: 'string',
              description: 'Order status',
              enum: [
                'draft',
                'pending',
                'confirmed',
                'in_process',
                'ready',
                'shipped',
                'completed',
                'canceled',
                'rts',
                'closed',
              ],
            },
          },
          required: ['custom_audience_id', 'order_status'],
        },
      },
      store_method_other_incomes: {
        type: 'array',
        description: 'Other incomes for store methods',
        items: {
          type: 'object',
          title: 'StorePaymentMethodOtherIncome',
          description: 'Store Payment Method Other Income Schema',
          properties: {
            payment_method: {
              type: 'string',
              description: 'Payment Method',
            },
            type: {
              type: 'string',
              description: 'Type of amount (fixed or percentage)',
              enum: ['fixed', 'percentage'],
            },
            amount: {
              type: 'number',
              description: 'Amount of other income',
            },
            percentage: {
              type: 'number',
              description: 'Percentage of other income',
            },
            sub_payment_method: {
              type: 'string',
              description: 'Sub Payment Method',
            },
          },
          required: ['payment_method', 'type'],
        },
      },
      store_sales_people: {
        type: 'array',
        description: 'Store sales people',
        items: {
          type: 'object',
          title: 'RequestStoreCourierOtherIncome',
          description: 'Store Sales Person Request Schema',
          properties: {
            business_user_id: {
              type: 'integer',
              description: 'Business User ID',
            },
            percentage: {
              type: 'integer',
              description: 'Percentage of sales person',
            },
            weekly_schedule: {
              type: 'object',
              title: 'WeeklySchedule',
              description: 'Weekly Schedule Schema',
              properties: {
                friday: {
                  type: 'object',
                  title: 'DaySchedule',
                  description: 'Day Schedule Schema',
                  properties: {
                    end_time: {
                      type: 'string',
                      description: 'End time',
                      format: 'time',
                    },
                    is_active: {
                      type: 'boolean',
                      description: 'Is active',
                    },
                    start_time: {
                      type: 'string',
                      description: 'Start time',
                      format: 'time',
                    },
                  },
                  required: ['end_time', 'is_active', 'start_time'],
                },
                monday: {
                  type: 'object',
                  title: 'DaySchedule',
                  description: 'Day Schedule Schema',
                  properties: {
                    end_time: {
                      type: 'string',
                      description: 'End time',
                      format: 'time',
                    },
                    is_active: {
                      type: 'boolean',
                      description: 'Is active',
                    },
                    start_time: {
                      type: 'string',
                      description: 'Start time',
                      format: 'time',
                    },
                  },
                  required: ['end_time', 'is_active', 'start_time'],
                },
                saturday: {
                  type: 'object',
                  title: 'DaySchedule',
                  description: 'Day Schedule Schema',
                  properties: {
                    end_time: {
                      type: 'string',
                      description: 'End time',
                      format: 'time',
                    },
                    is_active: {
                      type: 'boolean',
                      description: 'Is active',
                    },
                    start_time: {
                      type: 'string',
                      description: 'Start time',
                      format: 'time',
                    },
                  },
                  required: ['end_time', 'is_active', 'start_time'],
                },
                sunday: {
                  type: 'object',
                  title: 'DaySchedule',
                  description: 'Day Schedule Schema',
                  properties: {
                    end_time: {
                      type: 'string',
                      description: 'End time',
                      format: 'time',
                    },
                    is_active: {
                      type: 'boolean',
                      description: 'Is active',
                    },
                    start_time: {
                      type: 'string',
                      description: 'Start time',
                      format: 'time',
                    },
                  },
                  required: ['end_time', 'is_active', 'start_time'],
                },
                thursday: {
                  type: 'object',
                  title: 'DaySchedule',
                  description: 'Day Schedule Schema',
                  properties: {
                    end_time: {
                      type: 'string',
                      description: 'End time',
                      format: 'time',
                    },
                    is_active: {
                      type: 'boolean',
                      description: 'Is active',
                    },
                    start_time: {
                      type: 'string',
                      description: 'Start time',
                      format: 'time',
                    },
                  },
                  required: ['end_time', 'is_active', 'start_time'],
                },
                tuesday: {
                  type: 'object',
                  title: 'DaySchedule',
                  description: 'Day Schedule Schema',
                  properties: {
                    end_time: {
                      type: 'string',
                      description: 'End time',
                      format: 'time',
                    },
                    is_active: {
                      type: 'boolean',
                      description: 'Is active',
                    },
                    start_time: {
                      type: 'string',
                      description: 'Start time',
                      format: 'time',
                    },
                  },
                  required: ['end_time', 'is_active', 'start_time'],
                },
                wednesday: {
                  type: 'object',
                  title: 'DaySchedule',
                  description: 'Day Schedule Schema',
                  properties: {
                    end_time: {
                      type: 'string',
                      description: 'End time',
                      format: 'time',
                    },
                    is_active: {
                      type: 'boolean',
                      description: 'Is active',
                    },
                    start_time: {
                      type: 'string',
                      description: 'Start time',
                      format: 'time',
                    },
                  },
                  required: ['end_time', 'is_active', 'start_time'],
                },
              },
            },
          },
          required: ['business_user_id', 'percentage', 'weekly_schedule'],
        },
      },
      waba_account_id: {
        type: 'integer',
        description: 'WABA account ID',
      },
      warehouse_id: {
        type: 'integer',
        description: 'Warehouse ID',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.stores.update(id, body));
};

export default { metadata, tool, handler };
