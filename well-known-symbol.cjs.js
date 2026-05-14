'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var global$1 = require('./global.cjs.js');
var shared$1 = require('./shared.cjs.js');
var hasOwnProperty = require('./has-own-property.cjs.js');
var uid$1 = require('./uid.cjs.js');
var symbolConstructorDetection = require('./symbol-constructor-detection.cjs.js');
var useSymbolAsUid = require('./use-symbol-as-uid.cjs.js');

var global = global$1.global;
var shared = shared$1.shared;
var hasOwn = hasOwnProperty.hasOwnProperty_1;
var uid = uid$1.uid;
var NATIVE_SYMBOL = symbolConstructorDetection.symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid.useSymbolAsUid;

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

exports.wellKnownSymbol = wellKnownSymbol;
