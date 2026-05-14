'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var engineV8Version = require('./engine-v8-version.cjs.js');
var fails$1 = require('./fails.cjs.js');
var global$1 = require('./global.cjs.js');

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version.engineV8Version;
var fails = fails$1.fails;
var global = global$1.global;

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

exports.symbolConstructorDetection = symbolConstructorDetection;
