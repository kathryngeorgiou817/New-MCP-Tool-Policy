'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var global$1 = require('./global.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');

var global = global$1.global;
var isCallable = isCallable$1.isCallable;

var WeakMap = global.WeakMap;

var weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));

exports.weakMapBasicDetection = weakMapBasicDetection;
