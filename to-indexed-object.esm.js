import { i as indexedObject } from './indexed-object.esm.js';
import { r as requireObjectCoercible$1 } from './require-object-coercible.esm.js';

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible = requireObjectCoercible$1;

var toIndexedObject = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

export { toIndexedObject as t };
