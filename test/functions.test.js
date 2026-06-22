import { describe, it, expect } from 'vitest'
import { add, applyTwice, makeMultiplier } from '../src/functions.js'

describe('2. Functions', () => {
  it('add() is an arrow function that sums two numbers', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
  })

  it('applyTwice() applies a function to its own result', () => {
    expect(applyTwice(n => n + 1, 5)).toBe(7)
    expect(applyTwice(n => n * 2, 3)).toBe(12)
  })

  it('makeMultiplier() returns a closure that multiplies', () => {
    const triple = makeMultiplier(3)
    expect(triple(5)).toBe(15)
    expect(makeMultiplier(10)(4)).toBe(40)
  })
})
