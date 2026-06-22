import { describe, it, expect } from 'vitest'
import { greet, area, parityLabel, describeType } from '../src/basics.js'

describe('1. Basics', () => {
  it('greet() builds a greeting with a template literal', () => {
    expect(greet('Juan')).toBe('Hello, Juan!')
    expect(greet('Ana')).toBe('Hello, Ana!')
  })

  it('area() multiplies, defaulting to a square when height is omitted', () => {
    expect(area(3, 4)).toBe(12)
    expect(area(5)).toBe(25)
  })

  it('parityLabel() returns even/odd via a ternary', () => {
    expect(parityLabel(4)).toBe('even')
    expect(parityLabel(7)).toBe('odd')
    expect(parityLabel(0)).toBe('even')
  })

  it('describeType() reports the typeof a value', () => {
    expect(describeType(42)).toBe('number')
    expect(describeType('hi')).toBe('string')
    expect(describeType(true)).toBe('boolean')
  })
})
