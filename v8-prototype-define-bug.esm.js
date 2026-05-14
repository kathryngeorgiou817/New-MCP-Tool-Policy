import { d as descriptors } from './descriptors.esm.js';
import { f as fails$1 } from './fails.esm.js';

var DESCRIPTORS = descriptors;
var fails = fails$1;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

export { v8PrototypeDefineBug as v };
