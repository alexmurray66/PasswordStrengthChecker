const common = new Set([
  'password','123456','qwerty','111111','abc123','letmein','welcome','admin','iloveyou','monkey'
]);

export function scorePassword(pw) {
  if (!pw || typeof pw !== 'string') return { score: 0, label: 'empty' };

  let score = 0;
  const len = pw.length;
  if (len >= 8) score += 1;
  if (len >= 12) score += 1;
  if (len >= 16) score += 1;

  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasDigit = /\d/.test(pw);
  const hasSymbol = /[^\da-zA-Z]/.test(pw);
  const variety = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;
  score += Math.max(0, variety - 1); // up to +3

  if (/(.)\1{2,}/.test(pw)) score -= 1;        // repeated chars
  if (/([a-zA-Z0-9])\1{3,}/.test(pw)) score -= 1; // stronger repeat penalty

  const lower = pw.toLowerCase();
  for (const word of common) {
    if (lower.includes(word)) { score -= 2; break; }
  }

  // Clamp and label
  const clamped = Math.max(0, Math.min(5, score));
  const labels = ['very weak', 'weak', 'ok', 'good', 'strong', 'very strong'];
  return { score: clamped, label: labels[clamped] };
}

