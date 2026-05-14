'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wellKnownSymbol$1 = require('./well-known-symbol.cjs.js');
var iterators = require('./iterators.cjs.js');

var wellKnownSymbol = wellKnownSymbol$1.wellKnownSymbol;
var Iterators = iterators.iterators;

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

exports.isArrayIteratorMethod = isArrayIteratorMethod;
