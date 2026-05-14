import { f as functionUncurryThis } from './function-uncurry-this.esm.js';
import { f as fails$1 } from './fails.esm.js';
import { c as classofRaw } from './classof-raw.esm.js';

var uncurryThis = functionUncurryThis;
var fails = fails$1;
var classof = classofRaw;

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

export { indexedObject as i };
