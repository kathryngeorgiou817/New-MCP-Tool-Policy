'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionCall = require('./function-call.cjs.js');
var aCallable$1 = require('./a-callable.cjs.js');
var anObject$1 = require('./an-object.cjs.js');
var tryToString$1 = require('./try-to-string.cjs.js');
var getIteratorMethod$1 = require('./get-iterator-method.cjs.js');

var call = functionCall.functionCall;
var aCallable = aCallable$1.aCallable;
var anObject = anObject$1.anObject;
var tryToString = tryToString$1.tryToString;
var getIteratorMethod = getIteratorMethod$1.getIteratorMethod;

var $TypeError = TypeError;

var getIterator = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};

exports.getIterator = getIterator;
