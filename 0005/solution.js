/*
2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by
all of the numbers from 1 to 20?
*/
import {getPrimeFactors} from '../utility/numbers';

export function getSolution(){
  var n = 20;
  var factors = [];
  for(var i=2; i<=n; i++){
    var fact = getPrimeFactors(i);
    var tempFactors = factors.slice();
    for(var j=0; j<fact.length;j++){
      var index = tempFactors.indexOf(fact[j]);
      if(index > -1){
        tempFactors.splice(index,1);
      }
      else{
        factors.push(fact[j]);
      }
    }
  }
  return factors.reduce(function(acc, val, index, arr){
    return acc * val;
  });
}
