/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n
which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55
and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and
142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/
var numbers = require('../utility/numbers');

function getSolution(){
  var factorSumArr = [];
  var totalSum = 0;
  for(var i=0; i<10000; i++){
    var firstSum = numbers.getFactors(i).reduce(function(acc, val, index, arr){
      return parseInt(acc) + parseInt(val);
    });
    var secondSum = numbers.getFactors(firstSum).reduce(function(acc, val, index, arr){
      return parseInt(acc) + parseInt(val);
    });
    if(secondSum == i && firstSum !== i){
      totalSum += firstSum;
    }
  }
  return totalSum;
}

module.exports = {
  getSolution
}