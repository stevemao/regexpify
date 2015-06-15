#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Turn a string to a regexp


## Install

```sh
$ npm install --save regexpify
```


## Usage

```js
var regexpify = require('regexpify');

regexpify('');
//=> /.^/

regexpify('Rainbow');
//=> /Rainbow/

regexpify('how much $ for a unicorn?');
//=> /how much $ for a unicorn?/

regexpify('how much $ for a unicorn?', true);
//=> /how much \$ for a unicorn\?/
```


## License

MIT © [Steve Mao](https://github.com/stevemao)


[npm-image]: https://badge.fury.io/js/regexpify.svg
[npm-url]: https://npmjs.org/package/regexpify
[travis-image]: https://travis-ci.org/stevemao/regexpify.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/regexpify
[daviddm-image]: https://david-dm.org/stevemao/regexpify.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/stevemao/regexpify
[coveralls-image]: https://coveralls.io/repos/stevemao/regexpify/badge.svg
[coveralls-url]: https://coveralls.io/r/stevemao/regexpify
