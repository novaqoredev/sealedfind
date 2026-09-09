import ebay from '../../../lib/ebay.js';

export const name = 'ebay_update_offer';
export const description = 'Update an existing offer by offer ID';
export const parameters = {
  type: 'object',
  properties: {
    offer_id: { type: 'string', description: 'Offer ID to update' },
    body: { type: 'object', description: 'Updated offer fields' },
  },
  required: ['offer_id', 'body'],
};

export async function execute({ offer_id, body }) {
  return ebay.sell.inventory.updateOffer(offer_id, body);
}
