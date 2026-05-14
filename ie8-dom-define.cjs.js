'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var descriptors = require('./descriptors.cjs.js');
var fails$1 = require('./fails.cjs.js');
var documentCreateElement = require('./document-create-element.cjs.js');

var DESCRIPTORS = descriptors.descriptors;
var fails = fails$1.fails;
var createElement = documentCreateElement.documentCreateElement;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

exports.ie8DomDefine = ie8DomDefine;
