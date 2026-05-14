'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThis = require('./function-uncurry-this.cjs.js');
var isCallable$1 = require('./is-callable.cjs.js');
var sharedStore = require('./shared-store.cjs.js');

var uncurryThis = functionUncurryThis.functionUncurryThis;
var isCallable = isCallable$1.isCallable;
var store = sharedStore.sharedStoreExports;

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource = store.inspectSource;

exports.inspectSource = inspectSource;
