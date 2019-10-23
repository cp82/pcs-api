import { PcsViewScriptApi, PcsUnitScriptApi, PcsQueryScriptApi } from './api';

function MyFunction(pView: PcsViewScriptApi) {
  /* Place your TypeScript Code here */
  pView.saveDataContext();
  let lQuery: PcsQueryScriptApi = pView.getUnitById(1).Query;
  lQuery.execute();
  console.log(lQuery);
}

