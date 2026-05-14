import { f as functionCall } from './function-call.esm.js';
import { i as isObject$1 } from './is-object.esm.js';
import { i as isSymbol$1 } from './is-symbol.esm.js';
import { g as getMethod$1 } from './get-method.esm.js';
import { o as ordinaryToPrimitive$1 } from './ordinary-to-primitive.esm.js';
import { w as wellKnownSymbol$1 } from './well-known-symbol.esm.js';

var call = functionCall;
var isObject = isObject$1;
var isSymbol = isSymbol$1;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol = wellKnownSymbol$1;

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

export { toPrimitive as t };
