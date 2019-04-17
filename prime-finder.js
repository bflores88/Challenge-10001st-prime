'use strict';

module.exports = function(n) {
  // do work here
  let count = 0;
  let start = 2;
  let nthPrime = 0;

  function testPrime(number) {
    if (number === 1) {
      return false;
    } else if (number === 2) {
      return true;
    } else {
      for (let x = 2; x < number; x++) {
        if (number % x === 0) {
          return false;
        }
      }
      return true;
    }
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
