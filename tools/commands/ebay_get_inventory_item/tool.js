import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_inventory_item';
export const description = 'Get a specific inventory item by SKU';
export const parameters = {
  type: 'object',
  properties: {
    sku: { type: 'string', description: 'Item SKU' },
  },
  required: ['sku'],
};

export async function execute({ sku }) {
  return ebay.sell.inventory.getInventoryItem(sku);
}
