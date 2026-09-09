import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_category_suggestions';
export const description = 'Get suggested eBay categories for a product name or keyword';
export const parameters = {
  type: 'object',
  properties: {
    q: { type: 'string', description: 'Product name or keyword' },
  },
  required: ['q'],
};

export async function execute({ q }) {
  const tree = await ebay.commerce.taxonomy.getDefaultCategoryTreeId('EBAY_US');
  return ebay.commerce.taxonomy.getCategorySuggestions(tree.categoryTreeId, q);
}
