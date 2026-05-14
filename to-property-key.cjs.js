'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toPrimitive$1 = require('./to-primitive.cjs.js');
var isSymbol$1 = require('./is-symbol.cjs.js');

var toPrimitive = toPrimitive$1.toPrimitive;
var isSymbol = isSymbol$1.isSymbol;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

exports.toPropertyKey = toPropertyKey;
