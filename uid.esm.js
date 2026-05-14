import { f as functionUncurryThis } from './function-uncurry-this.esm.js';

var uncurryThis = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

var uid = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

export { uid as u };
