import { PcsViewScriptApi, PcsUnitScriptApi, PcsQueryScriptApi, PcsScriptApiParams } from './api';

function MyFunction(pParams: PcsScriptApiParams) {
  /* Place your TypeScript Code here */
  pParams.View.saveDataContext();
}

