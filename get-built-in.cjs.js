'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var global$1 = require('./global.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');

var global = global$1.global;
var isCallable = isCallable$1.isCallable;

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

exports.getBuiltIn = getBuiltIn;
