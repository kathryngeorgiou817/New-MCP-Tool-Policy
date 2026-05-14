'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toStringTagSupport = require('./to-string-tag-support.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');
var classofRaw$1 = require('./classof-raw.cjs.js');
var wellKnownSymbol$1 = require('./well-known-symbol.cjs.js');

var TO_STRING_TAG_SUPPORT = toStringTagSupport.toStringTagSupport;
var isCallable = isCallable$1.isCallable;
var classofRaw = classofRaw$1.classofRaw;
var wellKnownSymbol = wellKnownSymbol$1.wellKnownSymbol;

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

exports.classof = classof;
