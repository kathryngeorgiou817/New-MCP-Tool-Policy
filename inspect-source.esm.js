import { f as functionUncurryThis } from './function-uncurry-this.esm.js';
import { i as isCallable$1 } from './is-callable.esm.js';
import { s as sharedStoreExports } from './shared-store.esm.js';

var uncurryThis = functionUncurryThis;
var isCallable = isCallable$1;
var store = sharedStoreExports;

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource = store.inspectSource;

export { inspectSource as i };
