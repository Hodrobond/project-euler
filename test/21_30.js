var a0021 = require('../0021/solution');
var a0022 = require('../0022/solution');
var a0023 = require('../0023/solution');
var a0024 = require('../0024/solution');
var a0025 = require('../0025/solution');
var a0026 = require('../0026/solution');
var a0027 = require('../0027/solution');

var assert = require('assert');

describe('Tests 21-30', function() {
  it('21- Amicable numbers', function() {
    assert.equal(a0021.getSolution(), 31626);
  });
  it('22- Names scores', function() {
    assert.equal(a0022.getSolution(), 871198282);
  });
  it('23- Non-abundant sums', function() {
    assert.equal(a0023.getSolution(), 4179871);
  });
/*  it('24- Lexicographic permutations', function() {
    assert.equal(a0024.getSolution(), 2783915460);
  });*/
  it('25- 1000-digit Fibonacci number', function() {
    assert.equal(a0025.getSolution(), 4782);
  });
  it('26- Reciprocal cycles', function() {
    assert.equal(a0026.getSolution(), 983);
  });
  it('27- Quadratic Primes', function() {
    assert.equal(a0027.getSolution(), -59231);
  });


});
