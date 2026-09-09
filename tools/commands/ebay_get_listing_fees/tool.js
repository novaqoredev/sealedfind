import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_listing_fees';
export const description = 'Get estimated listing fees for one or more offers before publishing';
export const parameters = {
  type: 'object',
  properties: {
    offer_ids: { type: 'array', items: { type: 'string' }, description: 'List of offer IDs to get fees for' },
  },
  required: ['offer_ids'],
};

export async function execute({ offer_ids }) {
  return ebay.sell.inventory.getListingFees({ offers: offer_ids.map(offerId => ({ offerId })) });
}
