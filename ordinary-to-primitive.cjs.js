'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionCall = require('./function-call.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');
var isObject$1 = require('./is-object.cjs.js');

var call = functionCall.functionCall;
var isCallable = isCallable$1.isCallable;
var isObject = isObject$1.isObject;

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};

exports.ordinaryToPrimitive = ordinaryToPrimitive;
