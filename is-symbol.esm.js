import { g as getBuiltIn$1 } from './get-built-in.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';
import { o as objectIsPrototypeOf } from './object-is-prototype-of.esm.js';
import { u as useSymbolAsUid } from './use-symbol-as-uid.esm.js';

var getBuiltIn = getBuiltIn$1;
var isCallable = isCallable$1;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object = Object;

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

export { isSymbol as i };
