import { g as getBuiltIn$1 } from './get-built-in.esm.js';
import { f as functionUncurryThis } from './function-uncurry-this.esm.js';
import './object-get-own-property-names.esm.js';
import './object-get-own-property-symbols.esm.js';
import { a as anObject$1 } from './an-object.esm.js';
import { __exports as objectGetOwnPropertyNames } from '../../../_virtual/object-get-own-property-names.esm.js';
import { __exports as objectGetOwnPropertySymbols } from '../../../_virtual/object-get-own-property-symbols.esm.js';

var getBuiltIn = getBuiltIn$1;
var uncurryThis = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$1;

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

export { ownKeys as o };
