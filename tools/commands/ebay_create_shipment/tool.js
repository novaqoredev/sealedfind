import ebay from '../../../lib/ebay.js';

export const name = 'ebay_create_shipment';
export const description = 'Create a shipping fulfillment for an order (mark as shipped with tracking)';
export const parameters = {
  type: 'object',
  properties: {
    order_id: { type: 'string', description: 'Order ID to ship' },
    body: { type: 'object', description: 'Fulfillment data: trackingNumber, shippingCarrierCode, lineItems' },
  },
  required: ['order_id', 'body'],
};

export async function execute({ order_id, body }) {
  return ebay.sell.fulfillment.createShippingFulfillment(order_id, body);
}
