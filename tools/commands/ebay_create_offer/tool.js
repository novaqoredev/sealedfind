import ebay from '../../../lib/ebay.js';

export const name = 'ebay_create_offer';
export const description = 'Create a new offer for an inventory item (sets price, format, category, policies)';
export const parameters = {
  type: 'object',
  properties: {
    body: { type: 'object', description: 'Offer data: sku, marketplaceId, format, price, categoryId, listingPolicies' },
  },
  required: ['body'],
};

export async function execute({ body }) {
  return ebay.sell.inventory.createOffer(body);
}
