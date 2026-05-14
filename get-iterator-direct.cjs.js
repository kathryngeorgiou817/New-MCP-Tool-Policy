'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
var getIteratorDirect = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};

exports.getIteratorDirect = getIteratorDirect;
