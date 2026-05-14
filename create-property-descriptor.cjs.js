'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

exports.createPropertyDescriptor = createPropertyDescriptor;
