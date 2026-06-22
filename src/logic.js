// ───────────────────────────────────────────────────────────────────────────
// 4. LOGIC: conditionals and loops
// ───────────────────────────────────────────────────────────────────────────
//
// New to these? Read section 4 of CONCEPTS.md first (if/else, for loops, and
// building an array as you go). Modulo `%` tells you "is divisible by".

// Return 'negative', 'zero', or 'positive' depending on the number.
//   classify(-3) -> 'negative'
//   classify(0)  -> 'zero'
//   classify(8)  -> 'positive'
export function classify(n) {
  if (n < 0) return 'negative';
  if (n === 0) return 'zero';
  return 'positive';
}

// Return an ARRAY for the numbers 1..n (inclusive), following FizzBuzz rules:
//   • divisible by both 3 and 5 -> 'FizzBuzz'
//   • divisible by 3            -> 'Fizz'
//   • divisible by 5            -> 'Buzz'
//   • otherwise                 -> the number itself (a number, not a string)
//   fizzbuzz(5)  ->  [1, 2, 'Fizz', 4, 'Buzz']
export function fizzbuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}

// Return the sum of all whole numbers from `a` to `b` inclusive. Use a loop.
//   sumRange(1, 5)  ->  15   (1+2+3+4+5)
//   sumRange(3, 3)  ->  3
export function sumRange(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

// Logical operators return a VALUE, not just true/false. This is how React
// renders conditionally: {cond && <Thing/>}. Return `cond` AND-ed with `value`:
// the value when cond is truthy, and cond itself (false) when it isn't.
//   showIf(true, 'Saved')  ->  'Saved'
//   showIf(false, 'Saved') ->  false
export function showIf(cond, value) {
  return cond && value;
}

// The `||` fallback: React writes {name || 'Guest'} to supply a default when a
// value is empty. Return `name` when it's truthy, otherwise 'Guest'. Use ||.
//   orDefault('Ana')  ->  'Ana'
//   orDefault('')     ->  'Guest'
export function orDefault(name) {
  return name || 'Guest';
}

