'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var weakMapBasicDetection = require('./weak-map-basic-detection.cjs.js');
var global$1 = require('./global.cjs.js');
var createNonEnumerableProperty$1 = require('./create-non-enumerable-property.cjs.js');
var hasOwnProperty = require('./has-own-property.cjs.js');
var sharedStore = require('./shared-store.cjs.js');
var sharedKey$1 = require('./shared-key.cjs.js');
var hiddenKeys$1 = require('./hidden-keys.cjs.js');

var NATIVE_WEAK_MAP = weakMapBasicDetection.weakMapBasicDetection;
var global = global$1.global;
var createNonEnumerableProperty = createNonEnumerableProperty$1.createNonEnumerableProperty;
var hasOwn = hasOwnProperty.hasOwnProperty_1;
var shared = sharedStore.sharedStoreExports;
var sharedKey = sharedKey$1.sharedKey;
var hiddenKeys = hiddenKeys$1.hiddenKeys;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

var internalState = {
  get: get,
  enforce: enforce};

exports.internalState = internalState;
