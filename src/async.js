// ───────────────────────────────────────────────────────────────────────────
// 7. ASYNC: Promises and async / await
// ───────────────────────────────────────────────────────────────────────────
//
// React fetches data, and data-fetching is asynchronous, so you need to be
// comfortable with Promises.
//
// New to these? Read section 7 of CONCEPTS.md first: Promises, setTimeout,
// async/await, and what happens when an async function throws.

// Return a Promise that resolves with `value` after `ms` milliseconds.
//   await delay(10, 'done')  ->  'done'
export function delay(ms, value) {
  // TODO
}

// Look up a user by `id` in the `db` object (a map of id -> user). If the user
// exists, return it. If not, THROW an Error with the message
// `User <id> not found` (e.g. 'User 9 not found'). This must be an async
// function.
//   await fetchUser(1, { 1: { name: 'Ana' } })  ->  { name: 'Ana' }
//   await fetchUser(9, {})  ->  the Promise rejects with that error
export async function fetchUser(id, db) {
  // TODO
}
