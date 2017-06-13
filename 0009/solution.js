/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function getSolution() {
  for(var i=1; i<1000; i++){
    for(var j=1; j<1000; j++){
      var k = Math.sqrt(i*i+j*j);
      if( k === Math.floor(k) && k<1000){
        if(i+j+k === 1000){
          return i*j*k
        }
      }
    }
  }
}

module.exports = {
  getSolution
}
