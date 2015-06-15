'use strict';
var assert = require('assert');
var equal = assert.deepEqual;
var regexpify = require('./');

it('should generate something that is impossible to match', function() {
  equal(regexpify(''), /.^/);
});

it('should turn a string to regexp', function() {
  equal(regexpify('how much $ for a unicorn?'), /how much $ for a unicorn?/);
});

it('should escape', function() {
  equal(regexpify('how much $ for a unicorn?', true), /how much \$ for a unicorn\?/);
});

it('should do nothing to regexp', function() {
  equal(regexpify(/how much $ for a unicorn?/), /how much $ for a unicorn?/);
});

it('should throw if type is not supported', function() {
  assert.throws(function() {
    regexpify({});
  });
});
