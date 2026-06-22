import { describe, it, expect } from 'vitest'
import { classify, fizzbuzz, sumRange, showIf, orDefault } from '../src/logic.js'

describe('4. Logic', () => {
  it('classify() branches on the sign of a number', () => {
    expect(classify(-3)).toBe('negative')
    expect(classify(0)).toBe('zero')
    expect(classify(8)).toBe('positive')
  })

  it('fizzbuzz() builds the FizzBuzz array for 1..n', () => {
    expect(fizzbuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz'])
    expect(fizzbuzz(15)).toEqual([
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
      11, 'Fizz', 13, 14, 'FizzBuzz',
    ])
  })

  it('sumRange() sums an inclusive range with a loop', () => {
    expect(sumRange(1, 5)).toBe(15)
    expect(sumRange(3, 3)).toBe(3)
  })

  it('showIf() returns the value when cond is true, false otherwise (&&)', () => {
    expect(showIf(true, 'Saved')).toBe('Saved')
    expect(showIf(false, 'Saved')).toBe(false)
  })

  it('orDefault() falls back to Guest for an empty value (||)', () => {
    expect(orDefault('Ana')).toBe('Ana')
    expect(orDefault('')).toBe('Guest')
  })
})
