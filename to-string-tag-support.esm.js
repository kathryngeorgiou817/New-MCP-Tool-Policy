import { w as wellKnownSymbol$1 } from './well-known-symbol.esm.js';

var wellKnownSymbol = wellKnownSymbol$1;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

var toStringTagSupport = String(test) === '[object z]';

export { toStringTagSupport as t };
