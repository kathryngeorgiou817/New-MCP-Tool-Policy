'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fails$1 = require('./fails.cjs.js');

var fails = fails$1.fails;

var functionBindNative = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

exports.functionBindNative = functionBindNative;
