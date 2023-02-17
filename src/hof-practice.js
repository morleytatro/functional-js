// Higher Order Functions (HOF) take in function(s), return function(s), or both

// Example
function addBy(num) {
  return function add(num2) {
    return num + num2;
  }
}

const addByFive = addBy(5);
addByFive(10); // 15
addByFive(20); // 25

/**
 * @param {Function} a function of varying arity
 * @return {Function} a new function with the argument order reversed
 */

export function flip(fn) {
  // TODO: return a function with the parameter order flipped
  return fn;
}

// arg1, arg2, arg3 => arg3, arg2, arg1