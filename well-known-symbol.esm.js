import { g as global$1 } from './global.esm.js';
import { s as shared$1 } from './shared.esm.js';
import { h as hasOwnProperty_1 } from './has-own-property.esm.js';
import { u as uid$1 } from './uid.esm.js';
import { s as symbolConstructorDetection } from './symbol-constructor-detection.esm.js';
import { u as useSymbolAsUid } from './use-symbol-as-uid.esm.js';

var global = global$1;
var shared = shared$1;
var hasOwn = hasOwnProperty_1;
var uid = uid$1;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

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

export { wellKnownSymbol as w };
