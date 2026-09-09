import 'dotenv/config';
import { ask } from './lib/readline.js';
import { chat } from './lib/llm.js';
import { toolDefs, runTool } from './tools/runTool.js';

const messages = [];

while (true) {
  const input = await ask('> ');
  messages.push({ role: 'user', content: input });

  while (true) {
    const msg = await chat(messages, toolDefs);
    messages.push(msg);

    if (!msg.tool_calls?.length) {
      console.log(msg.content);
      break;
    }

    for (const tc of msg.tool_calls) {
      const args = JSON.parse(tc.function.arguments || '{}');
      console.log(`\x1b[33m${tc.function.name}\x1b[0m`, args);
      const result = await runTool(tc.function.name, args);
      console.log(`\x1b[90m${result}\x1b[0m`);
      messages.push({ role: 'tool', tool_call_id: tc.id, content: result });
    }
  }
}
