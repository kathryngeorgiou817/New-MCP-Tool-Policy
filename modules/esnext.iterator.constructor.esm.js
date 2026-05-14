import { _ as _export } from '../internals/export.esm.js';
import { g as global$1 } from '../internals/global.esm.js';
import { a as anInstance$1 } from '../internals/an-instance.esm.js';
import { a as anObject$1 } from '../internals/an-object.esm.js';
import { i as isCallable$1 } from '../internals/is-callable.esm.js';
import { o as objectGetPrototypeOf } from '../internals/object-get-prototype-of.esm.js';
import { d as defineBuiltInAccessor$1 } from '../internals/define-built-in-accessor.esm.js';
import { c as createProperty$1 } from '../internals/create-property.esm.js';
import { f as fails$1 } from '../internals/fails.esm.js';
import { h as hasOwnProperty_1 } from '../internals/has-own-property.esm.js';
import { w as wellKnownSymbol$1 } from '../internals/well-known-symbol.esm.js';
import { i as iteratorsCore } from '../internals/iterators-core.esm.js';
import { d as descriptors } from '../internals/descriptors.esm.js';

var $ = _export;
var global = global$1;
var anInstance = anInstance$1;
var anObject = anObject$1;
var isCallable = isCallable$1;
var getPrototypeOf = objectGetPrototypeOf;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var createProperty = createProperty$1;
var fails = fails$1;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol = wellKnownSymbol$1;
var IteratorPrototype = iteratorsCore.IteratorPrototype;
var DESCRIPTORS = descriptors;

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = global[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://github.com/tc39/proposal-iterator-helpers
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});
