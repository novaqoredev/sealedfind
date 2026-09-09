import ebay from '../../../lib/ebay.js';

export const name = 'ebay_issue_refund';
export const description = 'Issue a refund for an order';
export const parameters = {
  type: 'object',
  properties: {
    order_id: { type: 'string', description: 'Order ID to refund' },
    body: { type: 'object', description: 'Refund details: reasonForRefund, comment, refundItems' },
  },
  required: ['order_id', 'body'],
};

export async function execute({ order_id, body }) {
  return ebay.sell.fulfillment.issueRefund(order_id, body);
}
