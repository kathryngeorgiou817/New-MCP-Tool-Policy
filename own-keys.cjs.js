'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getBuiltIn$1 = require('./get-built-in.cjs.js');
var functionUncurryThis = require('./function-uncurry-this.cjs.js');
require('./object-get-own-property-names.cjs.js');
require('./object-get-own-property-symbols.cjs.js');
var anObject$1 = require('./an-object.cjs.js');
var objectGetOwnPropertyNames = require('../../../_virtual/object-get-own-property-names.cjs.js');
var objectGetOwnPropertySymbols = require('../../../_virtual/object-get-own-property-symbols.cjs.js');

var getBuiltIn = getBuiltIn$1.getBuiltIn;
var uncurryThis = functionUncurryThis.functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames.__exports;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols.__exports;
var anObject = anObject$1.anObject;

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

exports.ownKeys = ownKeys;
