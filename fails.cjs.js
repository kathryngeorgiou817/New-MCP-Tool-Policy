'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

exports.fails = fails;
