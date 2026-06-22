import { describe, it, expect } from 'vitest'
import { fullName, withUpdates, sumAll, cityOf } from '../src/objects.js'

describe('6. Objects', () => {
  it('fullName() destructures first and last name', () => {
    expect(fullName({ firstName: 'Juan', lastName: 'Cruz' })).toBe('Juan Cruz')
  })

  it('withUpdates() merges with spread without mutating the original', () => {
    const original = { a: 1, b: 2 }
    expect(withUpdates(original, { b: 9 })).toEqual({ a: 1, b: 9 })
    expect(original).toEqual({ a: 1, b: 2 }) // unchanged
  })

  it('sumAll() sums any number of arguments via rest', () => {
    expect(sumAll(1, 2, 3)).toBe(6)
    expect(sumAll()).toBe(0)
  })

  it('cityOf() safely reads a nested city with a fallback', () => {
    expect(cityOf({ address: { city: 'Angeles' } })).toBe('Angeles')
    expect(cityOf({})).toBe('Unknown')
    expect(cityOf({ address: {} })).toBe('Unknown')
  })
})
