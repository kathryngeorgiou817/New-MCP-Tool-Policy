'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var global$1 = require('./global.cjs.js');

var global = global$1.global;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var defineGlobalProperty = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};

exports.defineGlobalProperty = defineGlobalProperty;
