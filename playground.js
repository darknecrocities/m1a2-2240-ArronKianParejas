// PLAYGROUND: scratch space, not graded.
// Run it with:  npm start
// Call your functions, log the output. See CONCEPTS.md for what each does.

import { greet, area, parityLabel, describeType } from './src/basics.js'
import { add, applyTwice, makeMultiplier } from './src/functions.js'
import { capitalize, reverseWords, countVowels } from './src/strings.js'
import { classify, fizzbuzz, sumRange, showIf, orDefault } from './src/logic.js'
import { double, evens, total, firstMatch, names, addItem, removeAt } from './src/arrays.js'
import { fullName, withUpdates, sumAll, cityOf } from './src/objects.js'
import { delay, fetchUser } from './src/async.js'
import { Rectangle, Square, Counter } from './src/oop.js'

// Example to copy: call it, log it with a label.
console.log('- basics -')
console.log('greet:', greet('Juan'))
console.log('area:', area(3, 4))
console.log('parityLabel:', parityLabel(7))
console.log('describeType:', describeType(42))

// YOUR TURN: try the rest (functions, strings, logic, arrays, objects) here.


// oop: make an instance with `new`, then call its methods.
console.log('\n- oop -')
const counter = new Counter()
counter.increment()
console.log('counter.count:', counter.count)


// async: `await` a result, and catch the throw so the file doesn't crash.
console.log('\n- async -')
console.log('delay:', await delay(10, 'done'))
try {
  console.log('fetchUser:', await fetchUser(1, { 1: { name: 'Ana' } }))
} catch (err) {
  console.log('fetchUser threw:', err.message)
}
