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
  // TODO
}

// Return an ARRAY for the numbers 1..n (inclusive), following FizzBuzz rules:
//   • divisible by both 3 and 5 -> 'FizzBuzz'
//   • divisible by 3            -> 'Fizz'
//   • divisible by 5            -> 'Buzz'
//   • otherwise                 -> the number itself (a number, not a string)
//   fizzbuzz(5)  ->  [1, 2, 'Fizz', 4, 'Buzz']
export function fizzbuzz(n) {
  // TODO
}

// Return the sum of all whole numbers from `a` to `b` inclusive. Use a loop.
//   sumRange(1, 5)  ->  15   (1+2+3+4+5)
//   sumRange(3, 3)  ->  3
export function sumRange(a, b) {
  // TODO
}

// Logical operators return a VALUE, not just true/false. This is how React
// renders conditionally: {cond && <Thing/>}. Return `cond` AND-ed with `value`:
// the value when cond is truthy, and cond itself (false) when it isn't.
//   showIf(true, 'Saved')  ->  'Saved'
//   showIf(false, 'Saved') ->  false
export function showIf(cond, value) {
  // TODO
}

// The `||` fallback: React writes {name || 'Guest'} to supply a default when a
// value is empty. Return `name` when it's truthy, otherwise 'Guest'. Use ||.
//   orDefault('Ana')  ->  'Ana'
//   orDefault('')     ->  'Guest'
export function orDefault(name) {
  // TODO
}
