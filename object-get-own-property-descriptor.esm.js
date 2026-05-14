import { __exports as objectGetOwnPropertyDescriptor } from '../../../_virtual/object-get-own-property-descriptor.esm.js';
import { d as descriptors } from './descriptors.esm.js';
import { f as functionCall } from './function-call.esm.js';
import './object-property-is-enumerable.esm.js';
import { c as createPropertyDescriptor$1 } from './create-property-descriptor.esm.js';
import { t as toIndexedObject$1 } from './to-indexed-object.esm.js';
import { t as toPropertyKey$1 } from './to-property-key.esm.js';
import { h as hasOwnProperty_1 } from './has-own-property.esm.js';
import { i as ie8DomDefine } from './ie8-dom-define.esm.js';
import { __exports as objectPropertyIsEnumerable } from '../../../_virtual/object-property-is-enumerable.esm.js';

var DESCRIPTORS = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor = createPropertyDescriptor$1;
var toIndexedObject = toIndexedObject$1;
var toPropertyKey = toPropertyKey$1;
var hasOwn = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

export { objectGetOwnPropertyDescriptor as default };
