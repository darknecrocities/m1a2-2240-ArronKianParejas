// ───────────────────────────────────────────────────────────────────────────
// 2. FUNCTIONS: arrow functions, higher-order functions, closures
// ───────────────────────────────────────────────────────────────────────────
//
// New to these? Read section 2 of CONCEPTS.md first.
//
// These three ideas are everywhere in React, so it's worth understanding them
// rather than just pattern-matching your way to a green test.

// Add two numbers. Define `add` as an arrow function (not a `function` block).
//   add(2, 3)  ->  5
export const add = undefined // TODO: replace with an arrow function

// Call `fn` on `x`, then call `fn` again on whatever that returned.
//   applyTwice(n => n + 1, 5)  ->  7
//   applyTwice(n => n * 2, 3)  ->  12
export function applyTwice(fn, x) {
  // TODO
}

// Return a NEW function. The returned function takes one number and multiplies
// it by `factor`.
//   const triple = makeMultiplier(3)
//   triple(5)  ->  15
export function makeMultiplier(factor) {
  // TODO
}
