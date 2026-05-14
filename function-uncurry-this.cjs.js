'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionBindNative = require('./function-bind-native.cjs.js');

var NATIVE_BIND = functionBindNative.functionBindNative;

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

var functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

exports.functionUncurryThis = functionUncurryThis;
