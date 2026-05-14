'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThis = require('./function-uncurry-this.cjs.js');

var uncurryThis = functionUncurryThis.functionUncurryThis;

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

var classofRaw = function (it) {
  return stringSlice(toString(it), 8, -1);
};

exports.classofRaw = classofRaw;
