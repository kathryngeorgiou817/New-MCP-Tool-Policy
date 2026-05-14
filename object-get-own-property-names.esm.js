import { __exports as objectGetOwnPropertyNames } from '../../../_virtual/object-get-own-property-names.esm.js';
import { o as objectKeysInternal } from './object-keys-internal.esm.js';
import { e as enumBugKeys$1 } from './enum-bug-keys.esm.js';

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

export { objectGetOwnPropertyNames as default };
