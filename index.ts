import { PcsViewScriptApi, PcsUnitScriptApi, PcsQueryScriptApi } from './api';

function MyFunction(pView: PcsViewScriptApi) {
  /* Place your TypeScript Code here */
  pView.saveDataContext();

  console.log(pView.getUnitById(1));
}

