'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var objectGetOwnPropertyNames = require('../../../_virtual/object-get-own-property-names.cjs.js');
var objectKeysInternal = require('./object-keys-internal.cjs.js');
var enumBugKeys$1 = require('./enum-bug-keys.cjs.js');

var internalObjectKeys = objectKeysInternal.objectKeysInternal;
var enumBugKeys = enumBugKeys$1.enumBugKeys;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.__exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

exports.default = objectGetOwnPropertyNames.__exports;
