import { m as makeBuiltInExports } from './make-built-in.esm.js';
import './object-define-property.esm.js';
import { __exports as objectDefineProperty } from '../../../_virtual/object-define-property.esm.js';

var makeBuiltIn = makeBuiltInExports;
var defineProperty = objectDefineProperty;

var defineBuiltInAccessor = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

export { defineBuiltInAccessor as d };
