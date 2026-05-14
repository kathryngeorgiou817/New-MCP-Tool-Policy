import { g as global$1 } from './global.esm.js';
import { i as isObject$1 } from './is-object.esm.js';

var global = global$1;
var isObject = isObject$1;

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

export { documentCreateElement as d };
