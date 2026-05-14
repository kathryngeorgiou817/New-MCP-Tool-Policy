'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var objectIsPrototypeOf = require('./object-is-prototype-of.cjs.js');

var isPrototypeOf = objectIsPrototypeOf.objectIsPrototypeOf;

var $TypeError = TypeError;

var anInstance = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};

exports.anInstance = anInstance;
