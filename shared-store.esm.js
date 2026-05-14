import { __module as sharedStore } from '../../../_virtual/shared-store.esm.js';
import { g as global } from './global.esm.js';
import { d as defineGlobalProperty$1 } from './define-global-property.esm.js';

var globalThis = global;
var defineGlobalProperty = defineGlobalProperty$1;

var SHARED = '__core-js_shared__';
var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.36.1',
  mode: 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedStoreExports = sharedStore.exports;

export { sharedStoreExports as s };
