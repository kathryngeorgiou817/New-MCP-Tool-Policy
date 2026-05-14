import { i as isCallable$1 } from './is-callable.esm.js';
import './object-define-property.esm.js';
import { m as makeBuiltInExports } from './make-built-in.esm.js';
import { d as defineGlobalProperty$1 } from './define-global-property.esm.js';
import { __exports as objectDefineProperty } from '../../../_virtual/object-define-property.esm.js';

var isCallable = isCallable$1;
var definePropertyModule = objectDefineProperty;
var makeBuiltIn = makeBuiltInExports;
var defineGlobalProperty = defineGlobalProperty$1;

var defineBuiltIn = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

export { defineBuiltIn as d };
