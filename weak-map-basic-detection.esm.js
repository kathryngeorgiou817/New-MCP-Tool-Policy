import { g as global$1 } from './global.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';

var global = global$1;
var isCallable = isCallable$1;

var WeakMap = global.WeakMap;

var weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));

export { weakMapBasicDetection as w };
