'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toIntegerOrInfinity$1 = require('./to-integer-or-infinity.cjs.js');

var toIntegerOrInfinity = toIntegerOrInfinity$1.toIntegerOrInfinity;

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

exports.toAbsoluteIndex = toAbsoluteIndex;
