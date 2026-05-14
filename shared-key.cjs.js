'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shared$1 = require('./shared.cjs.js');
var uid$1 = require('./uid.cjs.js');

var shared = shared$1.shared;
var uid = uid$1.uid;

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

exports.sharedKey = sharedKey;
