import { s as symbolConstructorDetection } from './symbol-constructor-detection.esm.js';

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

export { useSymbolAsUid as u };
