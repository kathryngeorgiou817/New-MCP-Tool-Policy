'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined = function (it) {
  return it === null || it === undefined;
};

exports.isNullOrUndefined = isNullOrUndefined;
