'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fails$1 = require('./fails.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');
var isObject$1 = require('./is-object.cjs.js');
require('./object-create.cjs.js');
var objectGetPrototypeOf = require('./object-get-prototype-of.cjs.js');
var defineBuiltIn$1 = require('./define-built-in.cjs.js');
var wellKnownSymbol$1 = require('./well-known-symbol.cjs.js');

var fails = fails$1.fails;
var isCallable = isCallable$1.isCallable;
var isObject = isObject$1.isObject;
var getPrototypeOf = objectGetPrototypeOf.objectGetPrototypeOf;
var defineBuiltIn = defineBuiltIn$1.defineBuiltIn;
var wellKnownSymbol = wellKnownSymbol$1.wellKnownSymbol;

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

exports.iteratorsCore = iteratorsCore;
