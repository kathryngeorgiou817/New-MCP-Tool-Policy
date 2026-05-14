import { f as functionBindContext } from './function-bind-context.esm.js';
import { f as functionCall } from './function-call.esm.js';
import { a as anObject$1 } from './an-object.esm.js';
import { t as tryToString$1 } from './try-to-string.esm.js';
import { i as isArrayIteratorMethod$1 } from './is-array-iterator-method.esm.js';
import { l as lengthOfArrayLike$1 } from './length-of-array-like.esm.js';
import { o as objectIsPrototypeOf } from './object-is-prototype-of.esm.js';
import { g as getIterator$1 } from './get-iterator.esm.js';
import { g as getIteratorMethod$1 } from './get-iterator-method.esm.js';
import { i as iteratorClose$1 } from './iterator-close.esm.js';

var bind = functionBindContext;
var call = functionCall;
var anObject = anObject$1;
var tryToString = tryToString$1;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$1;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$1;
var iteratorClose = iteratorClose$1;

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

export { iterate as i };
