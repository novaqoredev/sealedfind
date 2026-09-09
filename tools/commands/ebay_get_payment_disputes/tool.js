import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_payment_disputes';
export const description = 'Get payment disputes (chargebacks/INADs) for the account';
export const parameters = {
  type: 'object',
  properties: {
    order_id: { type: 'string', description: 'Filter by order ID' },
    limit: { type: 'number', description: 'Number of disputes to return' },
    offset: { type: 'number', description: 'Pagination offset' },
  },
};

export async function execute({ order_id, limit = 20, offset } = {}) {
  return ebay.sell.fulfillment.getPaymentDisputeSummaries({ orderId: order_id, limit, offset });
}
