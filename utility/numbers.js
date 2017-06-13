function getPrimeFactors(n){
  var factors = [1];
  for(var i=2; i<=n; i++){
    if(n%i === 0){
      n = n/i;
      factors.push(i);
      if(n === 1)
        return factors;
      i=1;
    }
  }
  return [1];
}

function getFactors(n){
  let arr = [1],
    i = 2,
    max = Math.floor(Math.sqrt(n));

  while (i < max) {
    if (n % i === 0) {
      arr.push(i);
      let k = n / i;
      if (i !== k) {
        arr.push(k);
      }
      max = k;
    }
    i++;
  }
  return arr.sort((a, b) => a - b);
}

function sievePrimes(n){
  var n = 2000000;
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
  return primes;
}

function getSumOfSquares(n){
  var product = 0;
  for(var i=0; i<=n; i++){
    product += (i*i);
  }
  return product;
}

function getSquareOfSum(n){
  var sum = 0;
  for(var i=0; i<=n; i++){
    sum += i;
  }
  return (sum*sum);
}

function isPrime(n){
  var half = Math.floor(n/2);
  for(var i=2; i<=half; i++){
    if(n%i === 0)
      return false;
  }
  return true;
}

function toWords(num){
  var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  if ((num = num.toString()).length > 9) return 'overflow';
  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return; var str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
  return str;
}

function isAbundant(num){
  var factors = getFactors(num);
  var sum = 0;
  for(var i=0; i<factors.length; i++){
    sum += factors[i];
    if(sum > num)
      return true;
  }
  return sum > num;
}

function getAbundant(upperLimit){
  var abundant = [];
  for(var i=1; i<=upperLimit; i++){
    if(isAbundant(i))
      abundant.push(i);
  }
  return abundant;
}

function getRepeatingCycleSize(num){
    var numerator = 1;
    var numerators = [];
    var numeratorDigits = [];
    while(!digitsInSequence){
        if(numerator == 0){
          return 0;
        }

        //Check if the numerator is previously repeated
        for(var i = 0; i < numerators.length; i++){
            if(numerator == numerators[i]){
                var digitsInSequence = 0;

                for(var j = i; j < numerators.length; j++){
                    digitsInSequence += numeratorDigits[j];
                }

                return digitsInSequence;
            }
        }

        //Repeat not found, update the numerators and digits
        numerators[numerators.length] = numerator;
        var digits = 1;
        while(num > numerator){
            numerator *= 10;
            digits++;
        }
        numeratorDigits[numeratorDigits.length] = digits;

        //get the next numerator
        numerator = numerator % num;
    }
}


module.exports = {
  getPrimeFactors,
  getFactors,
  sievePrimes,
  getSumOfSquares,
  getSquareOfSum,
  isPrime,
  toWords,
  isAbundant,
  getAbundant,
  getRepeatingCycleSize
}
