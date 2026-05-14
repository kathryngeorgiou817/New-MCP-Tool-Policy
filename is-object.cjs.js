'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isCallable$1 = require('./is-callable.cjs.js');

var isCallable = isCallable$1.isCallable;

var isObject = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

exports.isObject = isObject;
