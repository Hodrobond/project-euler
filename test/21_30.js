import * as a0021 from "../0021/solution";
import * as a0022 from "../0022/solution";
import * as a0023 from "../0023/solution";
import * as a0024 from "../0024/solution";
import * as a0025 from "../0025/solution";
import * as a0026 from "../0026/solution";
import * as a0027 from "../0027/solution";

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
