import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

describe('Student info (student.json)', () => {
  const path = fileURLToPath(new URL('../student.json', import.meta.url))
  const info = JSON.parse(readFileSync(path, 'utf8'))

  // One test, one point: every field in student.json must be filled in.
  it('every field in student.json is filled in', () => {
    const required = [
      'classCode',
      'fullName',
      'studentNumber',
      'studentEmail',
      'personalEmail',
      'githubAccount',
    ]
    const missing = required.filter(field => !info[field])
    expect(missing, `Fill in these fields in student.json: ${missing.join(', ')}`).toEqual([])
  })
})
