'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var $String = String;

var tryToString = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

exports.tryToString = tryToString;
