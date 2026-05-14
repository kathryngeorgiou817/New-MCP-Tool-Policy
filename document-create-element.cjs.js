'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var global$1 = require('./global.cjs.js');
var isObject$1 = require('./is-object.cjs.js');

var global = global$1.global;
var isObject = isObject$1.isObject;

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

exports.documentCreateElement = documentCreateElement;
