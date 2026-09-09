export default function handler(req, res) {
  const { code, error, error_description } = req.query;

  if (error) {
    return res.status(400).send(`<h2>Auth failed</h2><p>${error}: ${error_description}</p>`);
  }

  if (!code) {
    return res.status(400).send('<h2>No code received</h2>');
  }

  res.status(200).send(`
    <h2>Almost done!</h2>
    <p>Copy this code and paste it into the terminal:</p>
    <textarea rows="4" cols="80">${code}</textarea>
    <p>Then run: <code>node scripts/exchange-token.js &lt;code&gt;</code></p>
  `);
}
