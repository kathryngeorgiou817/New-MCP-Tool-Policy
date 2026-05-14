import { h as hasOwnProperty_1 } from './has-own-property.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';
import { t as toObject$1 } from './to-object.esm.js';
import { s as sharedKey$1 } from './shared-key.esm.js';
import { c as correctPrototypeGetter } from './correct-prototype-getter.esm.js';

var hasOwn = hasOwnProperty_1;
var isCallable = isCallable$1;
var toObject = toObject$1;
var sharedKey = sharedKey$1;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

export { objectGetPrototypeOf as o };
