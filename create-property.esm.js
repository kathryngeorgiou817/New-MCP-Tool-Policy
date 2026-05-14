import { d as descriptors } from './descriptors.esm.js';
import './object-define-property.esm.js';
import { c as createPropertyDescriptor$1 } from './create-property-descriptor.esm.js';
import { __exports as objectDefineProperty } from '../../../_virtual/object-define-property.esm.js';

var DESCRIPTORS = descriptors;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$1;

var createProperty = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};

export { createProperty as c };
