import { h as hasOwnProperty_1 } from './has-own-property.esm.js';
import { o as ownKeys$1 } from './own-keys.esm.js';
import './object-get-own-property-descriptor.esm.js';
import './object-define-property.esm.js';
import { __exports as objectDefineProperty } from '../../../_virtual/object-define-property.esm.js';
import { __exports as objectGetOwnPropertyDescriptor } from '../../../_virtual/object-get-own-property-descriptor.esm.js';

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

export { copyConstructorProperties as c };
