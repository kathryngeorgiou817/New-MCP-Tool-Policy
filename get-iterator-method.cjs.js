'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classof$1 = require('./classof.cjs.js');
var getMethod$1 = require('./get-method.cjs.js');
var isNullOrUndefined$1 = require('./is-null-or-undefined.cjs.js');
var iterators = require('./iterators.cjs.js');
var wellKnownSymbol$1 = require('./well-known-symbol.cjs.js');

var classof = classof$1.classof;
var getMethod = getMethod$1.getMethod;
var isNullOrUndefined = isNullOrUndefined$1.isNullOrUndefined;
var Iterators = iterators.iterators;
var wellKnownSymbol = wellKnownSymbol$1.wellKnownSymbol;

var ITERATOR = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};

exports.getIteratorMethod = getIteratorMethod;
