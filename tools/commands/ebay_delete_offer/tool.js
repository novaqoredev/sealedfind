import ebay from '../../../lib/ebay.js';

export const name = 'ebay_delete_offer';
export const description = 'Delete an offer by offer ID';
export const parameters = {
  type: 'object',
  properties: {
    offer_id: { type: 'string', description: 'Offer ID to delete' },
  },
  required: ['offer_id'],
};

export async function execute({ offer_id }) {
  return ebay.sell.inventory.deleteOffer(offer_id);
}
