import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_shipments';
export const description = 'Get all shipping fulfillments for an order';
export const parameters = {
  type: 'object',
  properties: {
    order_id: { type: 'string', description: 'Order ID' },
  },
  required: ['order_id'],
};

export async function execute({ order_id }) {
  return ebay.sell.fulfillment.getShippingFulfillments(order_id);
}
