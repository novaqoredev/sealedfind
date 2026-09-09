import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const commandsDir = join(__dirname, 'commands');

const folders = readdirSync(commandsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const modules = await Promise.all(
  folders.map(name => import(`./commands/${name}/tool.js`).then(mod => ({ name, ...mod })))
);

export const toolDefs = modules.map(c => ({
  type: 'function',
  function: { name: c.name, description: c.description, parameters: c.parameters },
}));

export async function runTool(name, args) {
  const cmd = modules.find(c => c.name === name);
  if (!cmd) return `unknown tool: ${name}`;
  try {
    const result = await cmd.execute(args);
    return JSON.stringify(result, null, 2);
  } catch (err) {
    return `Error: ${err.message}`;
  }
}
