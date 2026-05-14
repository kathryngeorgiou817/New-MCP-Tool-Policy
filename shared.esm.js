import { s as sharedStoreExports } from './shared-store.esm.js';

var store = sharedStoreExports;

var shared = function (key, value) {
  return store[key] || (store[key] = value || {});
};

export { shared as s };
