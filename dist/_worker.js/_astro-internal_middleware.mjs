globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_v9qTuzYC.mjs';
import './chunks/astro/server_CY1dsXIK.mjs';
import { s as sequence } from './chunks/index_CKRebI_R.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
