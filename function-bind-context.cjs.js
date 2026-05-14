'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThisClause = require('./function-uncurry-this-clause.cjs.js');
var aCallable$1 = require('./a-callable.cjs.js');
var functionBindNative = require('./function-bind-native.cjs.js');

var uncurryThis = functionUncurryThisClause.functionUncurryThisClause;
var aCallable = aCallable$1.aCallable;
var NATIVE_BIND = functionBindNative.functionBindNative;

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

exports.functionBindContext = functionBindContext;
