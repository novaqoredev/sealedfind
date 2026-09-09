import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_auth_url';
export const description = 'Generate the eBay OAuth authorization URL to grant sell permissions';
export const parameters = { type: 'object', properties: {} };

export async function execute() {
  const url = ebay.auth.oAuth2.generateAuthUrl();
  return { url };
}
