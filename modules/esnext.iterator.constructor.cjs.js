'use strict';

var _export = require('../internals/export.cjs.js');
var global$1 = require('../internals/global.cjs.js');
var anInstance$1 = require('../internals/an-instance.cjs.js');
var anObject$1 = require('../internals/an-object.cjs.js');
var isCallable$1 = require('../internals/is-callable.cjs.js');
var objectGetPrototypeOf = require('../internals/object-get-prototype-of.cjs.js');
var defineBuiltInAccessor$1 = require('../internals/define-built-in-accessor.cjs.js');
var createProperty$1 = require('../internals/create-property.cjs.js');
var fails$1 = require('../internals/fails.cjs.js');
var hasOwnProperty = require('../internals/has-own-property.cjs.js');
var wellKnownSymbol$1 = require('../internals/well-known-symbol.cjs.js');
var iteratorsCore = require('../internals/iterators-core.cjs.js');
var descriptors = require('../internals/descriptors.cjs.js');

var $ = _export._export;
var global = global$1.global;
var anInstance = anInstance$1.anInstance;
var anObject = anObject$1.anObject;
var isCallable = isCallable$1.isCallable;
var getPrototypeOf = objectGetPrototypeOf.objectGetPrototypeOf;
var defineBuiltInAccessor = defineBuiltInAccessor$1.defineBuiltInAccessor;
var createProperty = createProperty$1.createProperty;
var fails = fails$1.fails;
var hasOwn = hasOwnProperty.hasOwnProperty_1;
var wellKnownSymbol = wellKnownSymbol$1.wellKnownSymbol;
var IteratorPrototype = iteratorsCore.iteratorsCore.IteratorPrototype;
var DESCRIPTORS = descriptors.descriptors;

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
