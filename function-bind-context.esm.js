import { f as functionUncurryThisClause } from './function-uncurry-this-clause.esm.js';
import { a as aCallable$1 } from './a-callable.esm.js';
import { f as functionBindNative } from './function-bind-native.esm.js';

var uncurryThis = functionUncurryThisClause;
var aCallable = aCallable$1;
var NATIVE_BIND = functionBindNative;

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

export { functionBindContext as f };
