import 'dotenv/config';
import eBayApi from 'ebay-api';

const ebay = new eBayApi({
  appId: process.env.APP_ID,
  certId: process.env.CERT_ID,
  devId: process.env.DEV_ID,
  sandbox: process.env.EBAY_ENV === 'SANDBOX',
  siteId: eBayApi.SiteId.EBAY_US,
});

export async function testConnection() {
  const result = await ebay.buy.browse.search({ q: 'test', limit: 1 });
  console.log('eBay connected. Total items:', result.total);
  return result;
}

export default ebay;
