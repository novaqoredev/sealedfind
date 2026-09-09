import ebay from '../../../lib/ebay.js';

export const name = 'ebay_delete_inventory_item';
export const description = 'Delete an inventory item by SKU';
export const parameters = {
  type: 'object',
  properties: {
    sku: { type: 'string', description: 'SKU of the item to delete' },
  },
  required: ['sku'],
};

export async function execute({ sku }) {
  return ebay.sell.inventory.deleteInventoryItem(sku);
}
