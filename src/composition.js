/**
 * Unary Function: Accepts one argument
 */

/**
 * takes in one or more unary functions
 * returns one unary function
 * the functions are run from left to right against an input value
 * pipe(f, g)(x) is equivalent to g(f(x))
 */

export function pipe(...fns) {
  // TODO: return a new function which "pipes" a value through
  // all the provided functions in the order given
}

/**
 * takes in one or more unary functions
 * returns one unary function
 * the functions are run from right to left against an input value
 * compose(g, f)(x) is equivalent to g(f(x))
 */

export function compose(...fns) {
  // TODO: return a new function which "pipes" a value through
  // all the provided functions in the opposite order
  // for even more fun, try doing it with flip and pipe
}