'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sharedStore = require('../../../_virtual/shared-store.cjs.js');
var global = require('./global.cjs.js');
var defineGlobalProperty$1 = require('./define-global-property.cjs.js');

var globalThis = global.global;
var defineGlobalProperty = defineGlobalProperty$1.defineGlobalProperty;

var SHARED = '__core-js_shared__';
var store = sharedStore.__module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.36.1',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedStoreExports = sharedStore.__module.exports;

exports.sharedStoreExports = sharedStoreExports;
