'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject$1 = require('./is-object.cjs.js');

var isObject = isObject$1.isObject;

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
var anObject = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

exports.anObject = anObject;
