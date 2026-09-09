import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_items';
export const description = 'Get details for multiple eBay items at once (up to 20)';
export const parameters = {
  type: 'object',
  properties: {
    item_ids: { type: 'string', description: 'Comma-separated list of eBay item IDs' },
  },
  required: ['item_ids'],
};

export async function execute({ item_ids }) {
  return ebay.buy.browse.getItems({ item_ids });
}
