'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionBindContext = require('./function-bind-context.cjs.js');
var functionCall = require('./function-call.cjs.js');
var anObject$1 = require('./an-object.cjs.js');
var tryToString$1 = require('./try-to-string.cjs.js');
var isArrayIteratorMethod$1 = require('./is-array-iterator-method.cjs.js');
var lengthOfArrayLike$1 = require('./length-of-array-like.cjs.js');
var objectIsPrototypeOf = require('./object-is-prototype-of.cjs.js');
var getIterator$1 = require('./get-iterator.cjs.js');
var getIteratorMethod$1 = require('./get-iterator-method.cjs.js');
var iteratorClose$1 = require('./iterator-close.cjs.js');

var bind = functionBindContext.functionBindContext;
var call = functionCall.functionCall;
var anObject = anObject$1.anObject;
var tryToString = tryToString$1.tryToString;
var isArrayIteratorMethod = isArrayIteratorMethod$1.isArrayIteratorMethod;
var lengthOfArrayLike = lengthOfArrayLike$1.lengthOfArrayLike;
var isPrototypeOf = objectIsPrototypeOf.objectIsPrototypeOf;
var getIterator = getIterator$1.getIterator;
var getIteratorMethod = getIteratorMethod$1.getIteratorMethod;
var iteratorClose = iteratorClose$1.iteratorClose;

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

exports.iterate = iterate;
