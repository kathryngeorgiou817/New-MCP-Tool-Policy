'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var aCallable$1 = require('./a-callable.cjs.js');
var isNullOrUndefined$1 = require('./is-null-or-undefined.cjs.js');

var aCallable = aCallable$1.aCallable;
var isNullOrUndefined = isNullOrUndefined$1.isNullOrUndefined;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

exports.getMethod = getMethod;
