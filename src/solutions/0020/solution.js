/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
import bigInt from "big-integer"

export function getSolution(){
  var product = bigInt(1);

  for(var i=1; i<=100; i++){
    product = product.times(bigInt(i));
  }

  product = product.toString().split("");
  var ans = 0;
  for(var i=0; i<product.length; i++){
    ans += parseInt(product[i]);
  }
  return ans;
}
