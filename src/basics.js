// ───────────────────────────────────────────────────────────────────────────
// 1. BASICS: variables, types, template literals, ternary, default parameters
// ───────────────────────────────────────────────────────────────────────────
//
// New to these? Read section 1 of CONCEPTS.md first.
//
// Implement each function so its tests pass. The examples show the expected
// input → output. Figuring out *how* is the exercise; look the concept up.

// Return a greeting in the form "Hello, NAME!".
//   greet('Juan')  ->  'Hello, Juan!'
export function greet(name) {
  return `Hello, ${name}!`;
}

// Return the area of a rectangle (width × height). If `height` is not passed in
// at all, treat the shape as a square and use `width` for both sides.
//   area(3, 4)  ->  12
//   area(5)     ->  25
export function area(width, height = width) {
  return width * height;
}

// Return the string 'even' or 'odd' for the given whole number.
//   parityLabel(4)  ->  'even'
//   parityLabel(7)  ->  'odd'
export function parityLabel(n) {
  return n % 2 === 0 ? 'even' : 'odd';
}

// Return the type of the value, as a string.
//   describeType(42)    ->  'number'
//   describeType('hi')  ->  'string'
//   describeType(true)  ->  'boolean'
export function describeType(value) {
  return typeof value;
}

