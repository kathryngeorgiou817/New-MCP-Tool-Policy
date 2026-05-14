'use strict';

require('./descriptors.cjs.js');
require('./v8-prototype-define-bug.cjs.js');
require('./object-define-property.cjs.js');
require('./indexed-object.cjs.js');
require('./object-keys-internal.cjs.js');
var hiddenKeys$1 = require('./hidden-keys.cjs.js');
require('./html.cjs.js');
require('./document-create-element.cjs.js');
var sharedKey$1 = require('./shared-key.cjs.js');

var hiddenKeys = hiddenKeys$1.hiddenKeys;
var sharedKey = sharedKey$1.sharedKey;
var IE_PROTO = sharedKey('IE_PROTO');

hiddenKeys[IE_PROTO] = true;
