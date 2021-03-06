/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

function getCollatzChainLength(n){
  var chain = [];
  var chainCount = 1;
  while(n !== 1){
    chainCount++;
    if(n%2 === 0)
      n *= 0.5
    else
      n = 3*n+1;
  }
  return chainCount;
}

export function getSolution(n){
  var n = 1000000;
  var bestLength = 0;
  var bestNum = 0;
  for(var i=Math.floor(n/2); i<n; i++){
    var chain = getCollatzChainLength(i);
    if(chain > bestLength){
      bestLength = chain;
      bestNum = i;
    }
  }
  return bestNum;
}
