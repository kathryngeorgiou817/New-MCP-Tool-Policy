import { t as toStringTagSupport } from './to-string-tag-support.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';
import { c as classofRaw$1 } from './classof-raw.esm.js';
import { w as wellKnownSymbol$1 } from './well-known-symbol.esm.js';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable = isCallable$1;
var classofRaw = classofRaw$1;
var wellKnownSymbol = wellKnownSymbol$1;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

export { classof as c };
