'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wellKnownSymbol$1 = require('./well-known-symbol.cjs.js');

var wellKnownSymbol = wellKnownSymbol$1.wellKnownSymbol;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

var toStringTagSupport = String(test) === '[object z]';

exports.toStringTagSupport = toStringTagSupport;
