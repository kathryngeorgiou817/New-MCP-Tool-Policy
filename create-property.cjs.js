'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var descriptors = require('./descriptors.cjs.js');
require('./object-define-property.cjs.js');
var createPropertyDescriptor$1 = require('./create-property-descriptor.cjs.js');
var objectDefineProperty = require('../../../_virtual/object-define-property.cjs.js');

var DESCRIPTORS = descriptors.descriptors;
var definePropertyModule = objectDefineProperty.__exports;
var createPropertyDescriptor = createPropertyDescriptor$1.createPropertyDescriptor;

var createProperty = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};

exports.createProperty = createProperty;
