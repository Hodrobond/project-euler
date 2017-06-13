/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

export function getSolution(){
  var n = 600851475143;
  //no sense iterating past halfway, won't find anything
  var half = Math.floor(n/2);
  for(var i=2; i<half; i++){
    if(n%i === 0){
      //divide the number by the factor
      n = n/i;
      //The last factor will be the largest
      if(n === 1)
        return i;
      i--;
    }
  }
}
