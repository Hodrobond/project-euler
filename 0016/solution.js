/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/
var bigInt = require("../utility/BigInteger.min.js")

function getSolution(){
  var largeNum = bigInt(2).pow(1000);
  return largeNum.toString().split("").reduce(function(acc, val, index, arr){
    return parseInt(acc) + parseInt(val);
  })
}

module.exports = {
  getSolution
}
