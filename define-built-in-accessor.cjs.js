'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var makeBuiltIn$1 = require('./make-built-in.cjs.js');
require('./object-define-property.cjs.js');
var objectDefineProperty = require('../../../_virtual/object-define-property.cjs.js');

var makeBuiltIn = makeBuiltIn$1.makeBuiltInExports;
var defineProperty = objectDefineProperty.__exports;

var defineBuiltInAccessor = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

exports.defineBuiltInAccessor = defineBuiltInAccessor;
