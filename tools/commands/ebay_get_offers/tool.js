import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_offers';
export const description = 'Get all offers for a given SKU';
export const parameters = {
  type: 'object',
  properties: {
    sku: { type: 'string', description: 'SKU to get offers for' },
  },
  required: ['sku'],
};

export async function execute({ sku }) {
  return ebay.sell.inventory.getOffers({ sku, marketplaceId: 'EBAY_US' });
}
