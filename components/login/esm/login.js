import { p as promiseResolve, b as bootstrapLazy } from './index-ccb3ba2b.js';
export { s as setNonce } from './index-ccb3ba2b.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["rf-login",[[1,"rf-login",{"emailInputBind":[32],"passwordInputBind":[32],"isEmailValid":[32],"isPasswordValid":[32],"isLoginSuccess":[32]}]]]], options);
});

//# sourceMappingURL=login.js.map