import { f as fails$1 } from './fails.esm.js';

var fails = fails$1;

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

export { correctPrototypeGetter as c };
