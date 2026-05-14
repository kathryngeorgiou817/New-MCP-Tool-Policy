'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionCall = require('./function-call.cjs.js');
var isObject$1 = require('./is-object.cjs.js');
var isSymbol$1 = require('./is-symbol.cjs.js');
var getMethod$1 = require('./get-method.cjs.js');
var ordinaryToPrimitive$1 = require('./ordinary-to-primitive.cjs.js');
var wellKnownSymbol$1 = require('./well-known-symbol.cjs.js');

var call = functionCall.functionCall;
var isObject = isObject$1.isObject;
var isSymbol = isSymbol$1.isSymbol;
var getMethod = getMethod$1.getMethod;
var ordinaryToPrimitive = ordinaryToPrimitive$1.ordinaryToPrimitive;
var wellKnownSymbol = wellKnownSymbol$1.wellKnownSymbol;

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

exports.toPrimitive = toPrimitive;
