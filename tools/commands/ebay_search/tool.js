import ebay from '../../../lib/ebay.js';

export const name = 'ebay_search';
export const description = 'Search eBay listings by keyword, category, price, condition';
export const parameters = {
  type: 'object',
  properties: {
    q: { type: 'string', description: 'Search keywords' },
    category_ids: { type: 'string', description: 'Category ID to filter by' },
    filter: { type: 'string', description: 'Filter e.g. price:[10..50],conditions:{NEW}' },
    sort: { type: 'string', description: 'Sort: price, -price, newlyListed, endingSoonest' },
    limit: { type: 'number', description: 'Number of results (max 200)' },
    offset: { type: 'number', description: 'Pagination offset' },
  },
};

export async function execute({ q, category_ids, filter, sort, limit = 10, offset } = {}) {
  return ebay.buy.browse.search({ q, category_ids, filter, sort, limit, offset });
}
