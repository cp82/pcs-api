import { PcsViewApi, PcsUnitApi } from './api';

function MyFunction(pView: PcsViewApi) {
  /* Place your TypeScript Code here */
  pView.saveDataContext();

  let x: any = new Object();
  x.id = 5;
  x.name = 'Test';
  console.log(x);
}

