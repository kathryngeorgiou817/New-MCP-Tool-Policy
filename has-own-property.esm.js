import { f as functionUncurryThis } from './function-uncurry-this.esm.js';
import { t as toObject$1 } from './to-object.esm.js';

var uncurryThis = functionUncurryThis;
var toObject = toObject$1;

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

export { hasOwnProperty_1 as h };
