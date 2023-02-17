import { describe, it, expect } from 'vitest';

import { flip } from './hof-practice';

const makeSentence = (str1, str2, str3) => [str1, str2, str3]
  .join(' ')

describe('flip', () => {
  it('reverses the argument order', () => {
    expect(flip(makeSentence)('world', 'good', 'Hello')).toBe('Hello good world');
  })
})