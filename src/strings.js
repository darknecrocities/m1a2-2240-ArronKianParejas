// ───────────────────────────────────────────────────────────────────────────
// 3. STRINGS: working with text
// ───────────────────────────────────────────────────────────────────────────
//
// New to these? Read section 3 of CONCEPTS.md first; it lists the string
// methods (toUpperCase, slice, split, join, includes, ...) you'll want here.

// Capitalize the first letter of the word, leaving the rest as-is.
//   capitalize('hello')  ->  'Hello'
//   capitalize('world')  ->  'World'
export function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Reverse the ORDER of the words (not the letters within them).
//   reverseWords('hello world')         ->  'world hello'
//   reverseWords('the quick brown fox') ->  'fox brown quick the'
export function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Count the vowels (a, e, i, o, u) in the string. Case should not matter.
//   countVowels('hello')  ->  2
//   countVowels('xyz')    ->  0
//   countVowels('AEIOU')  ->  5
export function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

