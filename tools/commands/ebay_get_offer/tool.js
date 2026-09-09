import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_offer';
export const description = 'Get a specific offer by offer ID';
export const parameters = {
  type: 'object',
  properties: {
    offer_id: { type: 'string', description: 'Offer ID' },
  },
  required: ['offer_id'],
};

export async function execute({ offer_id }) {
  return ebay.sell.inventory.getOffer(offer_id);
}
