import { describe, it, expect } from 'vitest'
import { Rectangle, Square, Counter } from '../src/oop.js'

describe('8. OOP', () => {
  it('Rectangle stores its sides and computes area()', () => {
    const r = new Rectangle(3, 4)
    expect(r.area()).toBe(12)
  })

  it('Square extends Rectangle and inherits area()', () => {
    const s = new Square(5)
    expect(s.area()).toBe(25)
    expect(s).toBeInstanceOf(Rectangle)
  })

  it('Counter tracks state through increment() and decrement()', () => {
    const c = new Counter()
    expect(c.count).toBe(0)
    c.increment()
    c.increment()
    expect(c.count).toBe(2)
    c.decrement()
    expect(c.count).toBe(1)
  })

  it('Counter accepts a starting value', () => {
    expect(new Counter(10).count).toBe(10)
  })
})
