import { i as isNullOrUndefined$1 } from './is-null-or-undefined.esm.js';

var isNullOrUndefined = isNullOrUndefined$1;

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

export { requireObjectCoercible as r };
