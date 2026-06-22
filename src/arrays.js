// ───────────────────────────────────────────────────────────────────────────
// 5. ARRAYS: THE most important section for React
// ───────────────────────────────────────────────────────────────────────────
//
// In React you render lists by calling .map() on an array, and you derive data
// with .filter() and .reduce(). Invest the time to really understand these.
//
// New to these? Read section 5 of CONCEPTS.md first; it walks through map,
// filter, reduce, and find, and what each one returns.

// Return a NEW array with every number doubled.
//   double([1, 2, 3])  ->  [2, 4, 6]
//
// Note "a NEW array": these methods leave the original alone. React state
// works the same way: build a new array, don't change the old one in place.
export function double(nums) {
  // TODO
}

// Return a NEW array containing only the even numbers.
//   evens([1, 2, 3, 4])  ->  [2, 4]
export function evens(nums) {
  // TODO
}

// Return the sum of all the numbers. An empty array sums to 0.
//   total([1, 2, 3])  ->  6
//   total([])         ->  0
export function total(nums) {
  // TODO
}

// Return the FIRST element for which `predicate(element)` is true,
// or undefined if nothing matches.
//   firstMatch([1, 2, 3, 4], n => n > 2)  ->  3
export function firstMatch(arr, predicate) {
  // TODO
}

// Given an array of person objects, return an array of just their names.
//   names([{ name: 'Ana' }, { name: 'Ben' }])  ->  ['Ana', 'Ben']
export function names(people) {
  // TODO
}

// Return a NEW array with `item` added to the end. Do NOT change the original.
// In React you add to array state by spreading into a new array ([...arr, item]),
// never with arr.push().
//   addItem([1, 2], 3)  ->  [1, 2, 3]
export function addItem(arr, item) {
  // TODO
}

// Return a NEW array with the element at `index` removed. Original unchanged.
// In React you remove from array state by filtering, not with splice().
//   removeAt(['a', 'b', 'c'], 1)  ->  ['a', 'c']
export function removeAt(arr, index) {
  // TODO
}
