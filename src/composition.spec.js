import { describe, it, expect } from 'vitest';

import { pipe, compose } from './composition';

const addBy = num => x => num + x
const multiplyBy = num => x => num * x

const addFive = addBy(5)
const multiplyBySix = multiplyBy(6)

const processByPipe = pipe(addFive, multiplyBySix)
const processByCompose = compose(addFive, multiplyBySix)

describe('pipe', () => {
  it('pipes multiple functions', () => {
    expect(processByPipe(6)).toBe(66);
  });
});

describe('compose', () => {
  it('composes multiple functions', () => {
    expect(processByCompose(6)).toBe(41);
  });
});