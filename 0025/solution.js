/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/
var bigInt = require("../utility/BigInteger.min.js")

function getSolution(){
  var maxDigits = 1000;//1000;
  var prev = bigInt(1);
  var current = bigInt(2);
  var temp;
  //iterative over recursive fibonacci.
  var count = 3; //1 --> 1 --> 2
  while(current.toString().length < maxDigits){
    temp = bigInt(current);
    current = bigInt(current).add(prev);
    prev = temp;
    count++;
  }
  return count;
}

module.exports = {
  getSolution
}
