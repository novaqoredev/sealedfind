import 'dotenv/config';
import eBayApi from 'ebay-api';

const ebay = new eBayApi({
  appId: process.env.APP_ID,
  certId: process.env.CERT_ID,
  devId: process.env.DEV_ID,
  sandbox: process.env.EBAY_ENV === 'SANDBOX',
  siteId: eBayApi.SiteId.EBAY_US,
  ruName: process.env.EBAY_RUNAME,
  scope: [
    'https://api.ebay.com/oauth/api_scope',
    'https://api.ebay.com/oauth/api_scope/sell.inventory',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment',
    'https://api.ebay.com/oauth/api_scope/sell.account',
  ],
});

if (process.env.EBAY_ACCESS_TOKEN) {
  ebay.auth.oAuth2.setCredentials({
    access_token: process.env.EBAY_ACCESS_TOKEN,
    refresh_token: process.env.EBAY_REFRESH_TOKEN,
  });
}

export default ebay;
