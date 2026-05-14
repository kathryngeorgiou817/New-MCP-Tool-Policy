import { f as functionCall } from './function-call.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';
import { i as isObject$1 } from './is-object.esm.js';

var call = functionCall;
var isCallable = isCallable$1;
var isObject = isObject$1;

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

export { ordinaryToPrimitive as o };
