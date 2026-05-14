'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fails$1 = require('./fails.cjs.js');

var fails = fails$1.fails;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

exports.descriptors = descriptors;
