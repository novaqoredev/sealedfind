import { systemPrompt } from '../system/prompt.js';

const BASE_URL = 'http://10.3.0.1:8080/v1';

export async function chat(messages, tools) {
  const withSystem = [{ role: 'system', content: systemPrompt }, ...messages];
  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: withSystem, tools }),
  });
  const data = await res.json();
  return data.choices[0].message;
}
