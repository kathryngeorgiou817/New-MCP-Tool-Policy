'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var indexedObject = require('./indexed-object.cjs.js');
var requireObjectCoercible$1 = require('./require-object-coercible.cjs.js');

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject.indexedObject;
var requireObjectCoercible = requireObjectCoercible$1.requireObjectCoercible;

var toIndexedObject = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

exports.toIndexedObject = toIndexedObject;
