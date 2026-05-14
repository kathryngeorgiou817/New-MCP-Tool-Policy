'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var requireObjectCoercible$1 = require('./require-object-coercible.cjs.js');

var requireObjectCoercible = requireObjectCoercible$1.requireObjectCoercible;

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

exports.toObject = toObject;
