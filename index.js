'use strict';

function regexpify(val, escape) {
  if (!val) {
    return /.^/;
  }

  if (typeof val === 'string') {
    escape = escape || false;

    if (escape) {
      val = require('escape-string-regexp')(val);
    }
    return new RegExp(val);
  }

  if (require('util').isRegExp(val)) {
    return val;
  }

  throw new TypeError('illegal type: ' + val + ' for regexpify');
}

module.exports = regexpify;
