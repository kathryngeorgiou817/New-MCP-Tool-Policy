import { t as toIntegerOrInfinity$1 } from './to-integer-or-infinity.esm.js';

var toIntegerOrInfinity = toIntegerOrInfinity$1;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

export { toLength as t };
