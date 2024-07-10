'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-df80af8a.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["rf-login.cjs",[[1,"rf-login",{"emailInputBind":[32],"passwordInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isLoginSuccess":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map