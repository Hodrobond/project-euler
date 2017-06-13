/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.
*/
var numbers = require('../utility/numbers');

function getSolution(){
  var n = 100;
  var sumOfSquares = numbers.getSumOfSquares(n);
  var squareOfSums = numbers.getSquareOfSum(n);
  return (squareOfSums - sumOfSquares);
}

module.exports = {
  getSolution
}
