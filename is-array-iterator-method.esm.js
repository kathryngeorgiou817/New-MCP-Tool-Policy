import { w as wellKnownSymbol$1 } from './well-known-symbol.esm.js';
import { i as iterators } from './iterators.esm.js';

var wellKnownSymbol = wellKnownSymbol$1;
var Iterators = iterators;

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

export { isArrayIteratorMethod as i };
