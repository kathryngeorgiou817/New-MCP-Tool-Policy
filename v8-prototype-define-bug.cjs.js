'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var descriptors = require('./descriptors.cjs.js');
var fails$1 = require('./fails.cjs.js');

var DESCRIPTORS = descriptors.descriptors;
var fails = fails$1.fails;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

exports.v8PrototypeDefineBug = v8PrototypeDefineBug;
