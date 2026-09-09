import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_inventory_locations';
export const description = 'Get all inventory locations for the Sealed Finds account';
export const parameters = {
  type: 'object',
  properties: {},
};

export async function execute() {
  return ebay.sell.inventory.getInventoryLocations();
}
