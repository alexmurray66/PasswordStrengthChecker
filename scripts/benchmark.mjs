import { scorePassword } from '../src/score.js';

const samples = Array.from({ length: 5000 }, (_, i) => `Pass${i}!${i%10}`);
const t0 = performance.now?.() ?? Date.now();
let acc = 0;
for (const s of samples) acc += scorePassword(s).score;
const t1 = performance.now?.() ?? Date.now();
console.log('count', samples.length, 'timeMs', (t1 - t0).toFixed(2), 'avgScore', (acc/samples.length).toFixed(2));

