// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v2/bundles/{id}',
  operationId: 'ScalevApiWeb.BundleController.show',
};

export const tool: Tool = {
  name: 'retrieve_bundles',
  description: 'Retrieves a bundle by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.bundles.retrieve(id));
};

export default { metadata, tool, handler };
