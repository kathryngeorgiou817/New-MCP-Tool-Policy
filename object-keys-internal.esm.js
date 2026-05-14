import { f as functionUncurryThis } from './function-uncurry-this.esm.js';
import { h as hasOwnProperty_1 } from './has-own-property.esm.js';
import { t as toIndexedObject$1 } from './to-indexed-object.esm.js';
import { a as arrayIncludes } from './array-includes.esm.js';
import { h as hiddenKeys$1 } from './hidden-keys.esm.js';

var uncurryThis = functionUncurryThis;
var hasOwn = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$1;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys = hiddenKeys$1;

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

export { objectKeysInternal as o };
