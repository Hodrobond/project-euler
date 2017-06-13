/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function getSolution(n){
  var n = 2000000;
  var half = Math.floor(n/2);
  var arr = [];
  var primes = [2];
  for(var i=0; i<n; i++){
    arr[i] = true;
  }
  arr[0] = false;
  arr[1] = false;
  arr[2] = false;
  for(var i=3; i<n;i+=2){
    if(arr[i] !== false){
      arr[i] = false;
      primes.push(i);
      for(var j=i; j<n;j+=i){
        arr[j] = false;
      }
    }
  }
  return primes.reduce(function(acc, val, index, arr){
    return acc + val;
  });
}

module.exports = {
  getSolution
}
