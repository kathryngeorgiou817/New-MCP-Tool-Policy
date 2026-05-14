import { r as requireObjectCoercible$1 } from './require-object-coercible.esm.js';

var requireObjectCoercible = requireObjectCoercible$1;

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

export { toObject as t };
