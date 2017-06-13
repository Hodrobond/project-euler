/*
A unit fraction contains 1 in the numerator. The decimal representation of the
unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be
seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle
in its decimal fraction part.
*/

import {getPrimeFactors} from '../utility/numbers'
import bigInt from "big-integer"

export function getSolution(){
  var upper = 1000;//1000;
  var largestLength = 0;
  var largestIndex = 0;
  for(var i = 1; i < upper; i++){
    var primeFactors = getPrimeFactors(i).splice(1); //remove 1
    var length = 0;
    var modulo = 2;
    for(var j=0; j<primeFactors.length; j++){
      if(primeFactors[j] == 2 || primeFactors[j] == 5){
        modulo = 1;
      }
    }//for prime factors
    var power = 1;
    var multiplier = bigInt(10);
    while(modulo != 1 && modulo != -1 && modulo != 0){
      multiplier=multiplier.multiply(10);
      modulo = multiplier.mod(i);
      power++;
    }
    if(modulo == 1 || modulo == 0){
      length = power;
    }
    else if(modulo == -1){
      length = power * 2;
    }
    if(length > largestLength){
      largestLength = length;
      largestIndex = i;
    }
  }
  return largestIndex;
}
