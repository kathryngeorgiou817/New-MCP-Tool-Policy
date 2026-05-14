import { i as isCallable$1 } from './is-callable.esm.js';
import { t as tryToString$1 } from './try-to-string.esm.js';

var isCallable = isCallable$1;
var tryToString = tryToString$1;

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

export { aCallable as a };
