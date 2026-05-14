'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionCall = require('./function-call.cjs.js');
var anObject$1 = require('./an-object.cjs.js');
var getMethod$1 = require('./get-method.cjs.js');

var call = functionCall.functionCall;
var anObject = anObject$1.anObject;
var getMethod = getMethod$1.getMethod;

var iteratorClose = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

exports.iteratorClose = iteratorClose;
