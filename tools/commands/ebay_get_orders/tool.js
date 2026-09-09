import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_orders';
export const description = 'Get orders from the Sealed Finds eBay account';
export const parameters = {
  type: 'object',
  properties: {
    filter: { type: 'string', description: 'Filter e.g. orderfulfillmentstatus:{NOT_STARTED|IN_PROGRESS}' },
    limit: { type: 'number', description: 'Number of orders to return' },
    offset: { type: 'number', description: 'Pagination offset' },
  },
};

export async function execute({ filter, limit = 20, offset } = {}) {
  return ebay.sell.fulfillment.getOrders({ filter, limit, offset });
}
