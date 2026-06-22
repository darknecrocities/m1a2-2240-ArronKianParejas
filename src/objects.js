// ───────────────────────────────────────────────────────────────────────────
// 6. OBJECTS: destructuring, spread, rest, optional chaining
// ───────────────────────────────────────────────────────────────────────────
//
// React props and state are objects, so these patterns appear constantly.
//
// New to these? Read section 6 of CONCEPTS.md first: destructuring, spread,
// rest parameters, optional chaining, and nullish coalescing.

// Return the person's full name as "First Last". Practice DESTRUCTURING the
// first and last name out of the argument.
//   fullName({ firstName: 'Juan', lastName: 'Cruz' })  ->  'Juan Cruz'
export function fullName(person) {
  const { firstName, lastName } = person;
  return `${firstName} ${lastName}`;
}

// Return a NEW object: a copy of `obj` with the keys from `updates` applied
// on top. Do NOT modify the original `obj` (the test checks for this).
//   withUpdates({ a: 1, b: 2 }, { b: 9 })  ->  { a: 1, b: 9 }
//
// In React you never change state directly; you build a new object with your
// changes applied and hand that to the setter. This is that pattern, exactly.
export function withUpdates(obj, updates) {
  return { ...obj, ...updates };
}

// Return the sum of however many number arguments are passed in.
//   sumAll(1, 2, 3)  ->  6
//   sumAll()         ->  0
export function sumAll(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

// Safely return the user's city. Not every user has an `address`, and not every
// address has a `city`. When the city is missing, return 'Unknown' instead of
// crashing.
//   cityOf({ address: { city: 'Angeles' } })  ->  'Angeles'
//   cityOf({})                                ->  'Unknown'
//   cityOf({ address: {} })                   ->  'Unknown'
export function cityOf(user) {
  return user?.address?.city ?? 'Unknown';
}

