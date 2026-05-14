import { a as aCallable$1 } from './a-callable.esm.js';
import { i as isNullOrUndefined$1 } from './is-null-or-undefined.esm.js';

var aCallable = aCallable$1;
var isNullOrUndefined = isNullOrUndefined$1;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

export { getMethod as g };
