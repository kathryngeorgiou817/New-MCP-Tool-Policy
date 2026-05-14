'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var symbolConstructorDetection = require('./symbol-constructor-detection.cjs.js');

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = symbolConstructorDetection.symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

exports.useSymbolAsUid = useSymbolAsUid;
