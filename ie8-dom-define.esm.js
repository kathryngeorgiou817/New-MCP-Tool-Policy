import { d as descriptors } from './descriptors.esm.js';
import { f as fails$1 } from './fails.esm.js';
import { d as documentCreateElement } from './document-create-element.esm.js';

var DESCRIPTORS = descriptors;
var fails = fails$1;
var createElement = documentCreateElement;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

export { ie8DomDefine as i };
