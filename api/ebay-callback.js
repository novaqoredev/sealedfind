import eBayApi from 'ebay-api';

export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).send('Missing code');

  const ebay = new eBayApi({
    appId: process.env.APP_ID,
    certId: process.env.CERT_ID,
    devId: process.env.DEV_ID,
    sandbox: process.env.EBAY_ENV === 'SANDBOX',
    ruName: process.env.EBAY_RUNAME,
  });

  const token = await ebay.auth.oAuth2.getToken(code);

  res.status(200).send(`
    <h2>Tokens — copy these into your .env</h2>
    <p><b>EBAY_ACCESS_TOKEN=</b>${token.access_token}</p>
    <p><b>EBAY_REFRESH_TOKEN=</b>${token.refresh_token}</p>
  `);
}
