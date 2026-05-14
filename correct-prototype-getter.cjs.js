'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fails$1 = require('./fails.cjs.js');

var fails = fails$1.fails;

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

exports.correctPrototypeGetter = correctPrototypeGetter;
