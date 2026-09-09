import ebay from '../../../lib/ebay.js';

export const name = 'ebay_contest_dispute';
export const description = 'Contest a payment dispute with evidence';
export const parameters = {
  type: 'object',
  properties: {
    dispute_id: { type: 'string', description: 'Payment dispute ID' },
    body: { type: 'object', description: 'Contest details: returnAddress, revision' },
  },
  required: ['dispute_id', 'body'],
};

export async function execute({ dispute_id, body }) {
  return ebay.sell.fulfillment.contestPaymentDispute(dispute_id, body);
}
