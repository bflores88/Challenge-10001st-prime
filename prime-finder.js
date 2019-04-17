'use strict';

module.exports = function(n) {
  // do work here
  let count = 1;
  let start = 3;
  let nthPrime = 2;

  function testPrime(number) {
    for (let x = 2; x < number; x++) {
      if (number % x === 0) {
        return false;
      }
    }

    return true;
  }

  while (count !== n) {
    if (testPrime(start) === true) {
      nthPrime = start;
      count++;
      start++;
    } else {
      start++;
    }
  }

  return nthPrime;
};
