'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isCallable$1 = require('./is-callable.cjs.js');
var tryToString$1 = require('./try-to-string.cjs.js');

var isCallable = isCallable$1.isCallable;
var tryToString = tryToString$1.tryToString;

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

exports.aCallable = aCallable;
