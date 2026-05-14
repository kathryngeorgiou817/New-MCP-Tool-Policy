'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var objectGetOwnPropertyDescriptor = require('../../../_virtual/object-get-own-property-descriptor.cjs.js');
var descriptors = require('./descriptors.cjs.js');
var functionCall = require('./function-call.cjs.js');
require('./object-property-is-enumerable.cjs.js');
var createPropertyDescriptor$1 = require('./create-property-descriptor.cjs.js');
var toIndexedObject$1 = require('./to-indexed-object.cjs.js');
var toPropertyKey$1 = require('./to-property-key.cjs.js');
var hasOwnProperty = require('./has-own-property.cjs.js');
var ie8DomDefine = require('./ie8-dom-define.cjs.js');
var objectPropertyIsEnumerable = require('../../../_virtual/object-property-is-enumerable.cjs.js');

var DESCRIPTORS = descriptors.descriptors;
var call = functionCall.functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable.__exports;
var createPropertyDescriptor = createPropertyDescriptor$1.createPropertyDescriptor;
var toIndexedObject = toIndexedObject$1.toIndexedObject;
var toPropertyKey = toPropertyKey$1.toPropertyKey;
var hasOwn = hasOwnProperty.hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine.ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.__exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

exports.default = objectGetOwnPropertyDescriptor.__exports;
