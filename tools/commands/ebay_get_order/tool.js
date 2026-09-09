import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_order';
export const description = 'Get details of a specific order by order ID';
export const parameters = {
  type: 'object',
  properties: {
    order_id: { type: 'string', description: 'eBay order ID' },
  },
  required: ['order_id'],
};

export async function execute({ order_id }) {
  return ebay.sell.fulfillment.getOrder(order_id);
}
