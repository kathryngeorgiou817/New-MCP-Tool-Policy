import { f as functionCall } from './function-call.esm.js';
import { a as anObject$1 } from './an-object.esm.js';
import { g as getMethod$1 } from './get-method.esm.js';

var call = functionCall;
var anObject = anObject$1;
var getMethod = getMethod$1;

var iteratorClose = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

export { iteratorClose as i };
