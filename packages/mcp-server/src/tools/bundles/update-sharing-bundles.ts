// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'scalev-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ScalevAPI from 'scalev-api';

export const metadata: Metadata = {
  resource: 'bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v2/bundles/{bundle_id}/sharing',
  operationId: 'ScalevApiWeb.BundleController.update_sharing',
};

export const tool: Tool = {
  name: 'update_sharing_bundles',
  description: 'Updates the sharing setting of an existing bundle.',
  inputSchema: {
    type: 'object',
    properties: {
      bundle_id: {
        type: 'integer',
      },
      is_bundle_sharing: {
        type: 'boolean',
        description: 'Is Bundle Sharing',
      },
    },
    required: ['bundle_id', 'is_bundle_sharing'],
  },
  annotations: {},
};

export const handler = async (client: ScalevAPI, args: Record<string, unknown> | undefined) => {
  const { bundle_id, ...body } = args as any;
  return asTextContentResult(await client.bundles.updateSharing(bundle_id, body));
};

export default { metadata, tool, handler };
