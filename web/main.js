import { scorePassword } from '../src/score.js';

const $pw = document.querySelector('#pw');
const $bar = document.querySelector('#bar');
const $label = document.querySelector('#label');

function paint(score, label) {
  const pct = (score / 5) * 100;
  $bar.style.width = pct + '%';
  let color = 'var(--bad)';
  if (score >= 4) color = 'var(--strong)';
  else if (score >= 2) color = 'var(--good)';
  else color = 'var(--bad)';
  $bar.style.background = color;
  $label.textContent = label;
}

$pw.addEventListener('input', () => {
  const { score, label } = scorePassword($pw.value);
  paint(score, label);
});

