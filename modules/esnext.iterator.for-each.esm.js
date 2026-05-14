import { _ as _export } from '../internals/export.esm.js';
import { i as iterate$1 } from '../internals/iterate.esm.js';
import { a as aCallable$1 } from '../internals/a-callable.esm.js';
import { a as anObject$1 } from '../internals/an-object.esm.js';
import { g as getIteratorDirect$1 } from '../internals/get-iterator-direct.esm.js';

var $ = _export;
var iterate = iterate$1;
var aCallable = aCallable$1;
var anObject = anObject$1;
var getIteratorDirect = getIteratorDirect$1;

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
