'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var descriptors = require('./descriptors.cjs.js');
var hasOwnProperty = require('./has-own-property.cjs.js');

var DESCRIPTORS = descriptors.descriptors;
var hasOwn = hasOwnProperty.hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  CONFIGURABLE: CONFIGURABLE
};

exports.functionName = functionName;
