// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MessageHistory extends APIResource {
  /**
   * Add a new message to order message history.
   */
  add(
    id: number,
    body: MessageHistoryAddParams,
    options?: RequestOptions,
  ): APIPromise<MessageHistoryAddResponse> {
    return this._client.post(path`/v2/order/${id}/message-history`, { body, ...options });
  }

  /**
   * Get message history for an order.
   */
  show(id: number, options?: RequestOptions): APIPromise<MessageHistoryShowResponse> {
    return this._client.get(path`/v2/order/${id}/message-history`, options);
  }
}

export interface MessageHistoryAddResponse {
  code?: number;

  data?: MessageHistoryAddResponse.Data;

  status?: string;
}

export namespace MessageHistoryAddResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;
  }

  export namespace Data {
    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }
  }
}

export interface MessageHistoryShowResponse {
  code?: number;

  data?: MessageHistoryShowResponse.Data;

  status?: string;
}

export namespace MessageHistoryShowResponse {
  export interface Data {
    /**
     * Order primary key
     */
    id?: number;

    /**
     * Message history associated with the order
     */
    message_history?: Array<Data.MessageHistory>;
  }

  export namespace Data {
    export interface MessageHistory {
      /**
       * ID of the Follow Up Chat
       */
      id?: number;

      /**
       * Is the message from bot
       */
      is_from_bot?: boolean;

      /**
       * Message content
       */
      message?: string;

      /**
       * Name of the sender
       */
      name?: string;

      /**
       * Message provider
       */
      provider?: string;

      /**
       * Recipient name
       */
      recipient_name?: string;

      /**
       * Recipient phone number
       */
      recipient_phone?: string;

      /**
       * Sender name
       */
      sender_name?: string;

      /**
       * Sender phone number
       */
      sender_phone?: string;

      /**
       * Timestamp of the message
       */
      timestamp?: string;
    }
  }
}

export interface MessageHistoryAddParams {
  /**
   * Follow-up chat ID
   */
  follow_up_chat_id: number;
}

export declare namespace MessageHistory {
  export {
    type MessageHistoryAddResponse as MessageHistoryAddResponse,
    type MessageHistoryShowResponse as MessageHistoryShowResponse,
    type MessageHistoryAddParams as MessageHistoryAddParams,
  };
}
