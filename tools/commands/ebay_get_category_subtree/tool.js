import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_category_subtree';
export const description = 'Get all subcategories under a given eBay category ID';
export const parameters = {
  type: 'object',
  properties: {
    category_id: { type: 'string', description: 'Parent category ID' },
  },
  required: ['category_id'],
};

export async function execute({ category_id }) {
  const tree = await ebay.commerce.taxonomy.getDefaultCategoryTreeId('EBAY_US');
  return ebay.commerce.taxonomy.getCategorySubtree(tree.categoryTreeId, category_id);
}
