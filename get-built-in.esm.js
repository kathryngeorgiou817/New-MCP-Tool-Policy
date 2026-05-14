import { g as global$1 } from './global.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';

var global = global$1;
var isCallable = isCallable$1;

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

export { getBuiltIn as g };
