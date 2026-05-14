'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ConditionalWrap = ({
  children,
  condition,
  wrap
}) => condition ? wrap(children) : children;

exports.ConditionalWrap = ConditionalWrap;
