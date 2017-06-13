import * as a0001 from "../src/solutions/0001/solution";
import * as a0002 from "../src/solutions/0002/solution";
import * as a0003 from "../src/solutions/0003/solution";
import * as a0004 from "../src/solutions/0004/solution";
import * as a0005 from "../src/solutions/0005/solution";
import * as a0006 from "../src/solutions/0006/solution";
import * as a0007 from "../src/solutions/0007/solution";
import * as a0008 from "../src/solutions/0008/solution";
import * as a0009 from "../src/solutions/0009/solution";
import * as a0010 from "../src/solutions/0010/solution";

var assert = require('assert');

describe('Tests 1-10', function() {
  it('1- Multiples of 3 and 5', function() {
    assert.equal(a0001.getSolution(), 233168);
  });
  it('2- Even Fibonacci numbers', function() {
    assert.equal(a0002.getSolution(), 4613732);
  });
  it('3- Largest prime factor', function() {
    assert.equal(a0003.getSolution(), 6857);
  });
  it('4- Largest palindrome product', function() {
    assert.equal(a0004.getSolution(), 906609);
  });
  it('5- Smallest multiple', function() {
    assert.equal(a0005.getSolution(), 232792560);
  });
  it('6- Sum square difference', function() {
    assert.equal(a0006.getSolution(), 25164150);
  });
  it('7- 10001st prime', function() {
    assert.equal(a0007.getSolution(), 104743);
  });
  it('8- Largest product in a series', function() {
    assert.equal(a0008.getSolution(), 23514624000);
  });
  it('9- Special Pythagorean triplet', function() {
    assert.equal(a0009.getSolution(), 31875000);
  });
  it('10- Summation of primes', function() {
    assert.equal(a0010.getSolution(), 142913828922);
  });
});
