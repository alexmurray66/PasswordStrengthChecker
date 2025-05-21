import { scorePassword } from '../src/score.js';

const cases = [
  ['', 0],
  ['password', 0],
  ['Password1', 2],
  ['P@ssw0rd2024', 3],
  ['h3Y_ThisIsALongerPass!', 5]
];

for (const [pw, expectedMin] of cases) {
  const { score } = scorePassword(pw);
  if (score < expectedMin) {
    console.error('FAIL', pw, score, '<', expectedMin);
    process.exitCode = 1;
  }
}

if (!process.exitCode) console.log('ok');

