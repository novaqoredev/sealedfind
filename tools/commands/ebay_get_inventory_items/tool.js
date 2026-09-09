import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_inventory_items';
export const description = 'List all inventory items in the Sealed Finds eBay seller account';
export const parameters = {
  type: 'object',
  properties: {
    limit: { type: 'number', description: 'Number of items to return' },
    offset: { type: 'number', description: 'Pagination offset' },
  },
};

export async function execute({ limit = 25, offset } = {}) {
  return ebay.sell.inventory.getInventoryItems({ limit, offset });
}
