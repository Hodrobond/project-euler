/*
By listing the first six prime numbers:
2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/
var numbers = require('../utility/numbers');

function getSolution(n){
  var n = 10001;
  var primes = [2];
  var i = 3;
  while(primes.length < n){
    if(numbers.isPrime(i))
      primes.push(i);
    i+=2;
  }
  return primes[primes.length - 1];
}


module.exports = {
  getSolution
}
