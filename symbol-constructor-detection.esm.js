import { e as engineV8Version } from './engine-v8-version.esm.js';
import { f as fails$1 } from './fails.esm.js';
import { g as global$1 } from './global.esm.js';

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version;
var fails = fails$1;
var global = global$1;

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

export { symbolConstructorDetection as s };
