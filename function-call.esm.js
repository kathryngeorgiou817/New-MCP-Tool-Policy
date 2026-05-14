import { f as functionBindNative } from './function-bind-native.esm.js';

var NATIVE_BIND = functionBindNative;

var call = Function.prototype.call;

var functionCall = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

export { functionCall as f };
