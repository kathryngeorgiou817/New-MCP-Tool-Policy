import './descriptors.esm.js';
import './v8-prototype-define-bug.esm.js';
import './object-define-property.esm.js';
import './indexed-object.esm.js';
import './object-keys-internal.esm.js';
import { h as hiddenKeys$1 } from './hidden-keys.esm.js';
import './html.esm.js';
import './document-create-element.esm.js';
import { s as sharedKey$1 } from './shared-key.esm.js';

var hiddenKeys = hiddenKeys$1;
var sharedKey = sharedKey$1;
var IE_PROTO = sharedKey('IE_PROTO');

hiddenKeys[IE_PROTO] = true;
