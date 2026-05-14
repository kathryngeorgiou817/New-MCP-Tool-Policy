'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThis = require('./function-uncurry-this.cjs.js');

var uncurryThis = functionUncurryThis.functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

var uid = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

exports.uid = uid;
