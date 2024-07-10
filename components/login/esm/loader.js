import { b as bootstrapLazy } from './index-ccb3ba2b.js';
export { s as setNonce } from './index-ccb3ba2b.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["rf-login",[[1,"rf-login",{"emailInputBind":[32],"passwordInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isLoginSuccess":[32]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map