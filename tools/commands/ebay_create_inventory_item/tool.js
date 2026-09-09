import ebay from '../../../lib/ebay.js';

export const name = 'ebay_create_inventory_item';
export const description = 'Create or replace an inventory item by SKU';
export const parameters = {
  type: 'object',
  properties: {
    sku: { type: 'string', description: 'Unique SKU for the item' },
    body: { type: 'object', description: 'Inventory item data (condition, product, availability)' },
  },
  required: ['sku', 'body'],
};

export async function execute({ sku, body }) {
  return ebay.sell.inventory.createOrReplaceInventoryItem(sku, body);
}
