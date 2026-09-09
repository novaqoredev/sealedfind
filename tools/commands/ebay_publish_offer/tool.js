import ebay from '../../../lib/ebay.js';

export const name = 'ebay_publish_offer';
export const description = 'Publish an offer to create a live eBay listing';
export const parameters = {
  type: 'object',
  properties: {
    offer_id: { type: 'string', description: 'Offer ID to publish' },
  },
  required: ['offer_id'],
};

export async function execute({ offer_id }) {
  return ebay.sell.inventory.publishOffer(offer_id);
}
