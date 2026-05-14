'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hasOwnProperty = require('./has-own-property.cjs.js');
var ownKeys$1 = require('./own-keys.cjs.js');
require('./object-get-own-property-descriptor.cjs.js');
require('./object-define-property.cjs.js');
var objectDefineProperty = require('../../../_virtual/object-define-property.cjs.js');
var objectGetOwnPropertyDescriptor = require('../../../_virtual/object-get-own-property-descriptor.cjs.js');

var hasOwn = hasOwnProperty.hasOwnProperty_1;
var ownKeys = ownKeys$1.ownKeys;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor.__exports;
var definePropertyModule = objectDefineProperty.__exports;

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

exports.copyConstructorProperties = copyConstructorProperties;
