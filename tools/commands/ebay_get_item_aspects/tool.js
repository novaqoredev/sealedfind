import ebay from '../../../lib/ebay.js';

export const name = 'ebay_get_item_aspects';
export const description = 'Get required and recommended item specifics for a category before creating a listing';
export const parameters = {
  type: 'object',
  properties: {
    category_id: { type: 'string', description: 'Category ID' },
  },
  required: ['category_id'],
};

export async function execute({ category_id }) {
  const tree = await ebay.commerce.taxonomy.getDefaultCategoryTreeId('EBAY_US');
  return ebay.commerce.taxonomy.getItemAspectsForCategory(tree.categoryTreeId, category_id);
}
