import { describe, it, expect } from 'vitest'
import { double, evens, total, firstMatch, names, addItem, removeAt } from '../src/arrays.js'

describe('5. Arrays', () => {
  it('double() maps each number to its double', () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6])
    expect(double([])).toEqual([])
  })

  it('evens() filters out the odd numbers', () => {
    expect(evens([1, 2, 3, 4])).toEqual([2, 4])
    expect(evens([1, 3, 5])).toEqual([])
  })

  it('total() reduces the array to its sum', () => {
    expect(total([1, 2, 3])).toBe(6)
    expect(total([])).toBe(0)
  })

  it('firstMatch() finds the first element matching the predicate', () => {
    expect(firstMatch([1, 2, 3, 4], n => n > 2)).toBe(3)
    expect(firstMatch([1, 2], n => n > 9)).toBeUndefined()
  })

  it('names() maps people objects to their names', () => {
    expect(names([{ name: 'Ana' }, { name: 'Ben' }])).toEqual(['Ana', 'Ben'])
  })

  it('addItem() returns a new array with the item appended, original unchanged', () => {
    const original = [1, 2]
    expect(addItem(original, 3)).toEqual([1, 2, 3])
    expect(original).toEqual([1, 2]) // unchanged
  })

  it('removeAt() returns a new array without the indexed item, original unchanged', () => {
    const original = ['a', 'b', 'c']
    expect(removeAt(original, 1)).toEqual(['a', 'c'])
    expect(original).toEqual(['a', 'b', 'c']) // unchanged
  })
})
