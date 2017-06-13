/*
A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
var words = require('../utility/words');

function getSolution(){
  var palindromes = [];
  for(var i=999; i>900; i--){
    for(var j=i; j>900; j--){
      if(words.isPalindrome(i*j))
        palindromes.push(i*j);
    }
  }
  palindromes.sort(function(a,b){return a>b});
  return palindromes[palindromes.length - 1];
}

module.exports = {
  getSolution
}
