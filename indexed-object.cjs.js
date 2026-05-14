'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThis = require('./function-uncurry-this.cjs.js');
var fails$1 = require('./fails.cjs.js');
var classofRaw = require('./classof-raw.cjs.js');

var uncurryThis = functionUncurryThis.functionUncurryThis;
var fails = fails$1.fails;
var classof = classofRaw.classofRaw;

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

exports.indexedObject = indexedObject;
