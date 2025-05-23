import { readFileSync } from 'node:fs';
import { scorePassword } from '../src/score.js';

const lines = readFileSync(new URL('../examples/passwords.txt', import.meta.url)).toString().trim().split(/\r?\n/);
for (const pw of lines) {
  const res = scorePassword(pw);
  console.log(pw.padEnd(26), '=>', res.score, res.label);
}

