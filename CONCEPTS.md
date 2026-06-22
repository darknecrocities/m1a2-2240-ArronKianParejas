# Concepts Guide

A deeper look at the ideas behind each exercise, and how each one shows up later
in React. Read the section for a file before you start it.

The examples here are **not** the answers to the exercises; they show a
different use of the same idea, so you still get to figure your functions out
yourself. When you want more, every section links to the MDN reference.

> **How to read this:** skim the section, try the exercise, come back when you
> get stuck. You don't need to memorize anything; understanding *what* each
> tool does is enough.

---

## 1. Basics

**Variables.** `const` makes a name you won't reassign; `let` makes one you
will. Default to `const`.

**`typeof`** gives the kind of a value as a string: `typeof 42` is `'number'`,
`typeof 'hi'` is `'string'`.

**Template literals** use backticks and `${ }` to drop values into a string:

```js
const count = 3
`You have ${count} new messages`   // 'You have 3 new messages'
```

**The ternary** is a one-line if/else that produces a *value*:

```js
const label = score >= 50 ? 'pass' : 'fail'
```

**Default parameters** give an argument a fallback when it's left out:

```js
function connect(timeout = 30) { /* ... */ }
connect()     // timeout is 30
connect(5)    // timeout is 5
```

**Modulo** `%` is the remainder of a division: `17 % 5` is `2`. A number is even
when `n % 2` is `0`.

> **In React:** template literals build className strings; the ternary is how you
> render one thing or another (`isLoggedIn ? <Dashboard /> : <Login />`).

📖 [MDN: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

---

## 2. Functions

**Arrow functions** are a shorter way to write a function. These are equivalent:

```js
function square(n) { return n * n }
const square = n => n * n            // single expression: returns it automatically
```

**Higher-order functions** take a function as an argument, or return one. `fn`
below is a function passed *into* another function:

```js
function callTwice(fn) { fn(); fn() }
```

**Closures.** A function "remembers" the variables around it when it was
created, even after the outer function has finished:

```js
function counter() {
  let n = 0
  return () => {
    n = n + 1       // the inner function still sees `n` from outside
    return n
  }
}
const next = counter()
next()  // 1
next()  // 2
```

> **In React:** components *are* functions. Event handlers are functions you pass
> to elements (`onClick={handleClick}`). Hooks rely on closures to remember state
> between renders.

📖 [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) ·
[MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

## 3. Strings

Strings come with built-in methods. The ones worth knowing here:

| Method | Does | Example |
| --- | --- | --- |
| `toUpperCase` / `toLowerCase` | change case | `'hi'.toUpperCase()` → `'HI'` |
| `slice(start, end)` | take part of a string | `'hello'.slice(1, 3)` → `'el'` |
| `charAt(i)` | the character at an index | `'hello'.charAt(0)` → `'h'` |
| `split(sep)` | string → array of pieces | `'a,b,c'.split(',')` → `['a','b','c']` |
| `join(sep)` | array → string | `['a','b'].join('-')` → `'a-b'` |
| `includes(x)` | is `x` inside? (true/false) | `'hello'.includes('ell')` → `true` |

You can also loop a string character by character with `for...of`:

```js
for (const ch of 'abc') { /* ch is 'a', then 'b', then 'c' */ }
```

> **In React:** you constantly format text for display: names, labels, prices.

📖 [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## 4. Logic

**Conditionals** branch your code:

```js
if (n > 0) { /* ... */ }
else if (n < 0) { /* ... */ }
else { /* ... */ }
```

**Loops** repeat. A classic counting loop:

```js
for (let i = 1; i <= 3; i++) { /* i is 1, then 2, then 3 */ }
```

**Building an array as you go**: start empty, `push` items in:

```js
const result = []
for (let i = 1; i <= 3; i++) result.push(i * 10)
result   // [10, 20, 30]
```

**Logical operators return a value, not just true/false.** `||` returns the
first *truthy* operand (handy for fallbacks); `&&` returns the first *falsy* one,
or the last operand when they're all truthy:

```js
name || 'Guest'      // name if it's truthy, otherwise 'Guest'
isReady && 'Go!'     // 'Go!' only when isReady is truthy, else false
```

> **In React:** this is exactly how you render conditionally.
> `{items.length && <List />}` shows the list only when there are items, and
> `{name || 'Guest'}` supplies a fallback. (Mind the `&&` footgun: `0 && x` is
> `0`, which React *will* render, so guard counts with `count > 0 && ...`.)

> **In React:** you'll lean on `.map()` (section 5) more than raw loops for
> rendering, but the logic of "decide, then build a result" is the same.

📖 [MDN: Control flow and loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

---

## 5. Arrays: the one to really learn

These four methods are the heart of React data work. For each, the key
questions are: *what does it return? does it change the original array? what does
the callback receive?* (Answer: none of them change the original.)

**`.map()`**: transform every item into a new item, same length out:

```js
['a', 'b'].map(s => s.toUpperCase())   // ['A', 'B']
```

**`.filter()`**: keep only the items where the callback returns true:

```js
['apple', 'kiwi', 'pear'].filter(w => w.length > 4)   // ['apple']
```

**`.reduce()`**: boil the whole array down to a single value. The callback gets
an accumulator (the running result) and the current item:

```js
['a', 'b', 'c'].reduce((acc, item) => acc + item, '')   // 'abc'
```

**`.find()`**: the first item matching the callback, or `undefined`:

```js
[10, 20, 30].find(n => n > 15)   // 20
```

**Adding and removing without mutating.** To add, spread into a new array; to
remove, `.filter()` out what you don't want. Both leave the original untouched:

```js
const next = [...items, newItem]               // add to the end
const fewer = items.filter((_, i) => i !== 2)  // remove index 2
```

> **In React:** `.map()` renders lists (`items.map(i => <li>{i}</li>)`),
> `.filter()` shows a subset (search results), `.reduce()` computes totals
> (a cart sum). This is the most-used section in the whole activity.

📖 [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## 6. Objects

**Destructuring** pulls fields out of an object into their own variables:

```js
const point = { x: 1, y: 2 }
const { x, y } = point        // x is 1, y is 2
```

You can destructure right in a function's parameter list:

```js
function show({ title }) { /* use title directly */ }
```

**Spread** `...` copies an object's fields into a new object. Later fields win,
so this is how you make an updated *copy*:

```js
const base = { a: 1, b: 2 }
const next = { ...base, b: 9 }   // { a: 1, b: 9 }, base is untouched
```

**Rest parameters** gather any number of arguments into an array:

```js
function logAll(...args) { /* args is an array */ }
```

**Optional chaining** `?.` reads a nested value without crashing if part of the
path is missing, and **nullish coalescing** `??` supplies a fallback:

```js
user?.address?.city ?? 'Unknown'
```

> **In React:** props arrive as an object you destructure
> (`function Card({ title, price })`); updating state means spreading the old
> state into a new object; `?.` and `??` guard against data that hasn't loaded
> yet.

📖 [MDN: Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ·
[Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## 7. Async

JavaScript normally runs **one line at a time, top to bottom**: each line
finishes before the next one starts. That's fine until a line has to *wait* for
something slow, like a network request. If waiting froze everything, the whole
page would lock up until the response came back.

Think of ordering at a coffee shop. The slow way: you order, then stand frozen
at the counter staring at the machine until your drink is ready, and nobody
behind you can order. The **async** way: you order, step aside, and the barista
calls your name when it's done, so the line keeps moving and you get on with
other things while you wait.

Asynchronous code works the second way. A slow task is started, the rest of your
code keeps running, and the result is handed back later when it's ready.

**A Promise** represents a value that isn't ready yet. You build one with a
function that gets `resolve` (succeed) and `reject` (fail):

```js
const ready = new Promise((resolve) => {
  setTimeout(() => resolve('done'), 1000)   // resolve after 1 second
})
```

**`async` / `await`** let you write asynchronous code that reads top-to-bottom.
`await` pauses that function until the Promise is done (its value is ready):

```js
async function load() {
  const value = await ready    // waits for the Promise above
  return value                 // 'done'
}
```

If an `async` function **throws**, the Promise it returns rejects, and callers can
catch it with `try / catch`.

> **In React:** fetching data from an API is asynchronous, so you'll write
> `async` functions and `await` the response inside effects.

📖 [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) ·
[async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

---

## 8. OOP: classes

A **class** is a blueprint for making objects that share the same shape and
behavior. You create an instance with `new`:

```js
class Point {
  constructor(x, y) {
    this.x = x        // `this` is the instance being built
    this.y = y
  }
  distanceFromOrigin() {
    return Math.hypot(this.x, this.y)
  }
}
const p = new Point(3, 4)
p.distanceFromOrigin()   // 5
```

The **constructor** runs once, when you `new` the class; it sets up the
instance's fields on `this`. **Methods** are functions on the class that every
instance can call.

**Inheritance** lets one class build on another with `extends`. The child
constructor calls `super(...)` to run the parent's constructor first, and it
inherits the parent's methods:

```js
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y)     // run Point's constructor
    this.z = z
  }
}
```

> **In React:** function components have largely replaced classes, but classes
> haven't disappeared. Older codebases use class components, and **error
> boundaries** (components that catch render errors) can *only* be written as
> classes. Knowing `this`, `extends`, and `super` lets you read them.

📖 [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

---

## Errors and error handling

Not every line of code succeeds. A failed request, a missing record, a bad
input: any of these can **throw** an error, which stops your code at that point.
Handling errors means deciding what happens next instead of letting the whole
program crash. (There's no exercise for this one; it's here because the
playground uses it.)

**Throwing** raises an error on purpose:

```js
function getUser(id, users) {
  if (!users[id]) throw new Error(`No user with id ${id}`)
  return users[id]
}
```

**`try / catch`** runs risky code, and if it throws, jumps to the `catch` block
instead of crashing:

```js
try {
  const user = getUser(2, { 1: { name: 'Ana' } })
  console.log(user)
} catch (err) {
  console.error('Lookup failed:', err.message)   // 'No user with id 2'
}
```

The caught `err` is an **Error object**, and `err.message` is the readable text
you passed to `new Error(...)`. Use **`console.error`** for problems rather than
`console.log`: it prints to the error stream and usually shows up in red.

This is exactly what the async block in `playground.js` does. `fetchUser`
throws when the id isn't found, and the `try / catch` around it logs the message
instead of letting the file crash. Change the id to one that doesn't exist and
you'll see the `catch` block run.

> **In React:** network calls fail, so you wrap `await` calls in `try / catch`
> and show the user an error state instead of a blank screen. React also has
> *error boundaries*: components that catch errors thrown below them in the tree.

📖 [MDN: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) ·
[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
