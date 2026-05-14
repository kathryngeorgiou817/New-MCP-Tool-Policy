'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classofRaw$1 = require('./classof-raw.cjs.js');
var functionUncurryThis = require('./function-uncurry-this.cjs.js');

var classofRaw = classofRaw$1.classofRaw;
var uncurryThis = functionUncurryThis.functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

exports.functionUncurryThisClause = functionUncurryThisClause;
