import { f as functionUncurryThis } from './function-uncurry-this.esm.js';

var uncurryThis = functionUncurryThis;

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

var classofRaw = function (it) {
  return stringSlice(toString(it), 8, -1);
};

export { classofRaw as c };
