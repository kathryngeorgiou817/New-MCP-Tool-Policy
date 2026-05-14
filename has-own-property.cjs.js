'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThis = require('./function-uncurry-this.cjs.js');
var toObject$1 = require('./to-object.cjs.js');

var uncurryThis = functionUncurryThis.functionUncurryThis;
var toObject = toObject$1.toObject;

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

exports.hasOwnProperty_1 = hasOwnProperty_1;
