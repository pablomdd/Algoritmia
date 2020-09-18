// Fibonacci with recursion (backtracking) with memoization

function memfib(n) {}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    newCall = fn.apply(null, args);
    cache[args] = newCall;
    return newCall;
  };
}

const memFib = memoize(fib);

function fib(n) {
  if (n < 2) {
    return n;
  }
  return memFib(n - 1) + memFib(n - 2);
}

console.log(fib(40));
