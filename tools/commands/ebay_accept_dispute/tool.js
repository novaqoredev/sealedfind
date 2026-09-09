import ebay from '../../../lib/ebay.js';

export const name = 'ebay_accept_dispute';
export const description = 'Accept a payment dispute (concede the chargeback)';
export const parameters = {
  type: 'object',
  properties: {
    dispute_id: { type: 'string', description: 'Payment dispute ID' },
  },
  required: ['dispute_id'],
};

export async function execute({ dispute_id }) {
  return ebay.sell.fulfillment.acceptPaymentDispute(dispute_id);
}
