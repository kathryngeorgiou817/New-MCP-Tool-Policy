import { f as functionUncurryThis } from './function-uncurry-this.esm.js';

var uncurryThis = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);

export { objectIsPrototypeOf as o };
