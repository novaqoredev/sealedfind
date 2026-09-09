import 'dotenv/config';
import ebay from '../lib/ebay.js';

const code = process.argv[2];
if (!code) { console.error('Usage: node scripts/exchange-token.js <code>'); process.exit(1); }

const token = await ebay.auth.oAuth2.getToken(code);

console.log('\nAdd these to your .env:\n');
console.log(`EBAY_ACCESS_TOKEN=${token.access_token}`);
console.log(`EBAY_REFRESH_TOKEN=${token.refresh_token}`);
