'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toIndexedObject$1 = require('./to-indexed-object.cjs.js');
var toAbsoluteIndex$1 = require('./to-absolute-index.cjs.js');
var lengthOfArrayLike$1 = require('./length-of-array-like.cjs.js');

var toIndexedObject = toIndexedObject$1.toIndexedObject;
var toAbsoluteIndex = toAbsoluteIndex$1.toAbsoluteIndex;
var lengthOfArrayLike = lengthOfArrayLike$1.lengthOfArrayLike;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

exports.arrayIncludes = arrayIncludes;
