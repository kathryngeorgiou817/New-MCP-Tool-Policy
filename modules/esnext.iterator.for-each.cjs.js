'use strict';

var _export = require('../internals/export.cjs.js');
var iterate$1 = require('../internals/iterate.cjs.js');
var aCallable$1 = require('../internals/a-callable.cjs.js');
var anObject$1 = require('../internals/an-object.cjs.js');
var getIteratorDirect$1 = require('../internals/get-iterator-direct.cjs.js');

var $ = _export._export;
var iterate = iterate$1.iterate;
var aCallable = aCallable$1.aCallable;
var anObject = anObject$1.anObject;
var getIteratorDirect = getIteratorDirect$1.getIteratorDirect;

// `Iterator.prototype.forEach` method
// https://github.com/tc39/proposal-iterator-helpers
$({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    anObject(this);
    aCallable(fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});
