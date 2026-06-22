import { describe, it, expect } from 'vitest'
import { capitalize, reverseWords, countVowels } from '../src/strings.js'

describe('3. Strings', () => {
  it('capitalize() uppercases the first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('world')).toBe('World')
  })

  it('reverseWords() reverses the order of words', () => {
    expect(reverseWords('hello world')).toBe('world hello')
    expect(reverseWords('the quick brown fox')).toBe('fox brown quick the')
  })

  it('countVowels() counts vowels case-insensitively', () => {
    expect(countVowels('hello')).toBe(2)
    expect(countVowels('xyz')).toBe(0)
    expect(countVowels('AEIOU')).toBe(5)
  })
})
