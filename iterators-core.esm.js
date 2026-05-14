import { f as fails$1 } from './fails.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';
import { i as isObject$1 } from './is-object.esm.js';
import './object-create.esm.js';
import { o as objectGetPrototypeOf } from './object-get-prototype-of.esm.js';
import { d as defineBuiltIn$1 } from './define-built-in.esm.js';
import { w as wellKnownSymbol$1 } from './well-known-symbol.esm.js';

var fails = fails$1;
var isCallable = isCallable$1;
var isObject = isObject$1;
var getPrototypeOf = objectGetPrototypeOf;
var defineBuiltIn = defineBuiltIn$1;
var wellKnownSymbol = wellKnownSymbol$1;

var ITERATOR = wellKnownSymbol('iterator');

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) ;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype};

export { iteratorsCore as i };
