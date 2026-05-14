'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fails$1 = require('./fails.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');

var fails = fails$1.fails;
var isCallable = isCallable$1.isCallable;

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

exports.isForced_1 = isForced_1;
