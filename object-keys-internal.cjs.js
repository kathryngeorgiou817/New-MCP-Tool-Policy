'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThis = require('./function-uncurry-this.cjs.js');
var hasOwnProperty = require('./has-own-property.cjs.js');
var toIndexedObject$1 = require('./to-indexed-object.cjs.js');
var arrayIncludes = require('./array-includes.cjs.js');
var hiddenKeys$1 = require('./hidden-keys.cjs.js');

var uncurryThis = functionUncurryThis.functionUncurryThis;
var hasOwn = hasOwnProperty.hasOwnProperty_1;
var toIndexedObject = toIndexedObject$1.toIndexedObject;
var indexOf = arrayIncludes.arrayIncludes.indexOf;
var hiddenKeys = hiddenKeys$1.hiddenKeys;

var push = uncurryThis([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

exports.objectKeysInternal = objectKeysInternal;
