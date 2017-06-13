import * as a0011 from "../0011/solution";
import * as a0012 from "../0012/solution";
import * as a0013 from "../0013/solution";
import * as a0014 from "../0014/solution";
import * as a0015 from "../0015/solution";
import * as a0016 from "../0016/solution";
import * as a0017 from "../0017/solution";
import * as a0018 from "../0018/solution";
import * as a0019 from "../0019/solution";
import * as a0020 from "../0020/solution";

var assert = require('assert');

describe('Tests 11-20', function() {
  it('11- Largest product in a grid', function() {
    assert.equal(a0011.getSolution(), 70600674);
  });
  it('12- Highly divisible triangular number', function() {
    assert.equal(a0012.getSolution(), 76576500);
  });
  it('13- Large sum', function() {
    assert.equal(a0013.getSolution(), 5537376230);
  });
  it('14- Longest Collatz sequence', function() {
    assert.equal(a0014.getSolution(), 837799);
  });
  it('15- Lattice paths', function() {
    assert.equal(a0015.getSolution(), 137846528820);
  });
  it('16- Power digit sum', function() {
    assert.equal(a0016.getSolution(), 1366);
  });
  it('17- Number letter counts', function() {
    assert.equal(a0017.getSolution(), 21124);
  });
  it('18- Maximum path sum I', function() {
    assert.equal(a0018.getSolution(), 1074);
  });
  it('19- Counting Sundays', function() {
    assert.equal(a0019.getSolution(), 171);
  });
  it('20- Factorial digit sum', function() {
    assert.equal(a0020.getSolution(), 648);
  });
});
