'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isNullOrUndefined$1 = require('./is-null-or-undefined.cjs.js');

var isNullOrUndefined = isNullOrUndefined$1.isNullOrUndefined;

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

exports.requireObjectCoercible = requireObjectCoercible;
