import { t as toPrimitive$1 } from './to-primitive.esm.js';
import { i as isSymbol$1 } from './is-symbol.esm.js';

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$1;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

export { toPropertyKey as t };
