'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isCallable$1 = require('./is-callable.cjs.js');
require('./object-define-property.cjs.js');
var makeBuiltIn$1 = require('./make-built-in.cjs.js');
var defineGlobalProperty$1 = require('./define-global-property.cjs.js');
var objectDefineProperty = require('../../../_virtual/object-define-property.cjs.js');

var isCallable = isCallable$1.isCallable;
var definePropertyModule = objectDefineProperty.__exports;
var makeBuiltIn = makeBuiltIn$1.makeBuiltInExports;
var defineGlobalProperty = defineGlobalProperty$1.defineGlobalProperty;

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

exports.defineBuiltIn = defineBuiltIn;
