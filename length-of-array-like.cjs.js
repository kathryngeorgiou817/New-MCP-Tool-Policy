'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toLength$1 = require('./to-length.cjs.js');

var toLength = toLength$1.toLength;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike = function (obj) {
  return toLength(obj.length);
};

exports.lengthOfArrayLike = lengthOfArrayLike;
