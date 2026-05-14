import { i as isObject$1 } from './is-object.esm.js';

var isObject = isObject$1;

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
var anObject = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

export { anObject as a };
