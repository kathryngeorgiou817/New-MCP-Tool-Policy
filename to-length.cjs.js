'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toIntegerOrInfinity$1 = require('./to-integer-or-infinity.cjs.js');

var toIntegerOrInfinity = toIntegerOrInfinity$1.toIntegerOrInfinity;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

exports.toLength = toLength;
