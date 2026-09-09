import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_item';
export const description = 'Get full details of a specific eBay listing by item ID';
export const parameters = {
  type: 'object',
  properties: {
    item_id: { type: 'string', description: 'eBay item ID' },
  },
  required: ['item_id'],
};

export async function execute({ item_id }) {
  return ebay.buy.browse.getItem(item_id);
}
