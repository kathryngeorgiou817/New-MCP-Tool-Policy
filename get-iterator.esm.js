import { f as functionCall } from './function-call.esm.js';
import { a as aCallable$1 } from './a-callable.esm.js';
import { a as anObject$1 } from './an-object.esm.js';
import { t as tryToString$1 } from './try-to-string.esm.js';
import { g as getIteratorMethod$1 } from './get-iterator-method.esm.js';

var call = functionCall;
var aCallable = aCallable$1;
var anObject = anObject$1;
var tryToString = tryToString$1;
var getIteratorMethod = getIteratorMethod$1;

var $TypeError = TypeError;

var getIterator = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};

export { getIterator as g };
