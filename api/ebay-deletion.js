import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { challenge_code } = req.query;
    if (!challenge_code) return res.status(400).json({ error: 'Missing challenge_code' });

    const hash = crypto
      .createHash('sha256')
      .update(challenge_code + process.env.EBAY_VERIFICATION_TOKEN + process.env.EBAY_DELETION_ENDPOINT)
      .digest('hex');

    return res.status(200).json({ challengeResponse: hash });
  }

  if (req.method === 'POST') {
    // Acknowledge the deletion notification — log and return 200
    console.log('eBay deletion notification:', JSON.stringify(req.body));
    return res.status(200).end();
  }

  return res.status(405).end();
}
