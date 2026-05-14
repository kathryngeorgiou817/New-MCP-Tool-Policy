import { s as shared$1 } from './shared.esm.js';
import { u as uid$1 } from './uid.esm.js';

var shared = shared$1;
var uid = uid$1;

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

export { sharedKey as s };
