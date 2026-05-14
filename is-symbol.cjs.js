'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getBuiltIn$1 = require('./get-built-in.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');
var objectIsPrototypeOf = require('./object-is-prototype-of.cjs.js');
var useSymbolAsUid = require('./use-symbol-as-uid.cjs.js');

var getBuiltIn = getBuiltIn$1.getBuiltIn;
var isCallable = isCallable$1.isCallable;
var isPrototypeOf = objectIsPrototypeOf.objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid.useSymbolAsUid;

var $Object = Object;

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

exports.isSymbol = isSymbol;
