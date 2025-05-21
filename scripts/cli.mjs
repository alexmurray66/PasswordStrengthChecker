#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { scorePassword } from '../src/score.js';

function main() {
  const arg = process.argv[2];
  const fromStdin = !arg;
  let pw = arg;
  if (fromStdin) {
    try {
      pw = readFileSync(0, 'utf8').trim();
    } catch {}
  }
  const res = scorePassword(pw || '');
  console.log(JSON.stringify(res));
}

main();

