'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sharedStore = require('./shared-store.cjs.js');

var store = sharedStore.sharedStoreExports;

var shared = function (key, value) {
  return store[key] || (store[key] = value || {});
};

exports.shared = shared;
