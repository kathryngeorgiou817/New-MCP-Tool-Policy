'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionBindNative = require('./function-bind-native.cjs.js');

var NATIVE_BIND = functionBindNative.functionBindNative;

var call = Function.prototype.call;

var functionCall = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

exports.functionCall = functionCall;
