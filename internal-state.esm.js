import { w as weakMapBasicDetection } from './weak-map-basic-detection.esm.js';
import { g as global$1 } from './global.esm.js';
import { c as createNonEnumerableProperty$1 } from './create-non-enumerable-property.esm.js';
import { h as hasOwnProperty_1 } from './has-own-property.esm.js';
import { s as sharedStoreExports } from './shared-store.esm.js';
import { s as sharedKey$1 } from './shared-key.esm.js';
import { h as hiddenKeys$1 } from './hidden-keys.esm.js';

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global = global$1;
var createNonEnumerableProperty = createNonEnumerableProperty$1;
var hasOwn = hasOwnProperty_1;
var shared = sharedStoreExports;
var sharedKey = sharedKey$1;
var hiddenKeys = hiddenKeys$1;

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

export { internalState as i };
