/*
A perfect number is a number for which the sum of its proper divisors is exactly
equal to the number. For example, the sum of the proper divisors of 28 would be
1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n
and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
number that can be written as the sum of two abundant numbers is 24. By
mathematical analysis, it can be shown that all integers greater than 28123
can be written as the sum of two abundant numbers. However, this upper limit
cannot be reduced any further by analysis even though it is known that the
greatest number that cannot be expressed as the sum of two abundant numbers
is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum
of two abundant numbers.
*/
import {getAbundant} from '../../../utility/numbers';
//upper bound: 28123 (inclusive)
export function getSolution(){
  var upper = 28123;//28123;
  var abundant = getAbundant(upper);
  var summed = [];
  var totalSum = 0;
  for(var i=0; i<abundant.length - 1; i++){
    if(abundant[i] + abundant[i] > upper)
      break;
    for(var j=i; j<abundant.length; j++){
      if(abundant[i] + abundant[j] > upper){
        break;
      }
      if(summed[abundant[i]+abundant[j]] == undefined){
        summed[abundant[i]+abundant[j]] = true;
        totalSum += abundant[i]+abundant[j];
      }
    }
  }
  return (upper)*(upper+1)/2 - totalSum;
}
