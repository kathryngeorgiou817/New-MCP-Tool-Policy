import { i as isCallable$1 } from './is-callable.esm.js';

var isCallable = isCallable$1;

var isObject = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

export { isObject as i };
