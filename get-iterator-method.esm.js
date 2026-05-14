import { c as classof$1 } from './classof.esm.js';
import { g as getMethod$1 } from './get-method.esm.js';
import { i as isNullOrUndefined$1 } from './is-null-or-undefined.esm.js';
import { i as iterators } from './iterators.esm.js';
import { w as wellKnownSymbol$1 } from './well-known-symbol.esm.js';

var classof = classof$1;
var getMethod = getMethod$1;
var isNullOrUndefined = isNullOrUndefined$1;
var Iterators = iterators;
var wellKnownSymbol = wellKnownSymbol$1;

var ITERATOR = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};

export { getIteratorMethod as g };
