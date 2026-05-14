import { o as objectIsPrototypeOf } from './object-is-prototype-of.esm.js';

var isPrototypeOf = objectIsPrototypeOf;

var $TypeError = TypeError;

var anInstance = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};

export { anInstance as a };
