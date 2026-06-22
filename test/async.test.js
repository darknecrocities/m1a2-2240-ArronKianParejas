import { describe, it, expect } from 'vitest'
import { delay, fetchUser } from '../src/async.js'

describe('7. Async', () => {
  it('delay() resolves with the value after the delay', async () => {
    await expect(delay(10, 'done')).resolves.toBe('done')
  })

  it('fetchUser() resolves a known user and rejects an unknown one', async () => {
    const db = { 1: { name: 'Ana' } }
    await expect(fetchUser(1, db)).resolves.toEqual({ name: 'Ana' })
    await expect(fetchUser(9, db)).rejects.toThrow('User 9 not found')
  })
})
