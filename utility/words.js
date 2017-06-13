function isPalindrome(word){
  if(typeof word === "number")
    word = word.toString();
  var halfLength = Math.floor(word.length/2);
  for(var i=0; i<halfLength; i++){
    if(word[i] !== word[word.length - 1 - i])
      return false;
  }
  return true;
}

function getPermutations(inputArr){
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

module.exports = {
  isPalindrome,
  getPermutations
}
