import ebay from '../../../lib/ebay.js';

export const name = 'ebay_withdraw_offer';
export const description = 'Withdraw an offer to end a live eBay listing';
export const parameters = {
  type: 'object',
  properties: {
    offer_id: { type: 'string', description: 'Offer ID to withdraw' },
  },
  required: ['offer_id'],
};

export async function execute({ offer_id }) {
  return ebay.sell.inventory.withdrawOffer(offer_id);
}
