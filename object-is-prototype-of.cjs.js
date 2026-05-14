'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functionUncurryThis = require('./function-uncurry-this.cjs.js');

var uncurryThis = functionUncurryThis.functionUncurryThis;

var objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);

exports.objectIsPrototypeOf = objectIsPrototypeOf;
