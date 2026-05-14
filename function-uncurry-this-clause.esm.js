import { c as classofRaw$1 } from './classof-raw.esm.js';
import { f as functionUncurryThis } from './function-uncurry-this.esm.js';

var classofRaw = classofRaw$1;
var uncurryThis = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

export { functionUncurryThisClause as f };
