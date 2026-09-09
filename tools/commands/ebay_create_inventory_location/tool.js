import ebay from '../../../lib/ebay.js';

export const name = 'ebay_create_inventory_location';
export const description = 'Create a new inventory location';
export const parameters = {
  type: 'object',
  properties: {
    key: { type: 'string', description: 'Unique merchant location key' },
    body: { type: 'object', description: 'Location data: location, name, merchantLocationStatus' },
  },
  required: ['key', 'body'],
};

export async function execute({ key, body }) {
  return ebay.sell.inventory.createInventoryLocation(key, body);
}
