import { d as descriptors } from './descriptors.esm.js';
import { h as hasOwnProperty_1 } from './has-own-property.esm.js';

var DESCRIPTORS = descriptors;
var hasOwn = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  CONFIGURABLE: CONFIGURABLE
};

export { functionName as f };
