export class PcsViewScriptApi {
  public saveDataContext() {
    console.log("Saving datacontext");
  }

  public cancelDataContext() {
    console.log("Cancelling datacontext");
  }

  public getUnitById(pId: number): PcsUnitScriptApi {
    console.log("Getting View by Id");
    return new PcsUnitScriptApi();
  }
}

export class PcsUnitScriptApi {
  public get View(): PcsViewScriptApi {
    return new PcsViewScriptApi();
  }

  public get Query(): PcsQueryScriptApi {
    return new PcsQueryScriptApi();
  }

  public navigateBackward(): void {    
  }

  public navigateForward(): void {    
  }
}

export class PcsQueryScriptApi {
  public execute(): void {    
  }

  public setQueryConditionuserInput(pIndex: number, pValue: string): void {
  }
}

export class PcsScriptApiParams {
    public View: PcsViewScriptApi;
    public Unit: PcsUnitScriptApi;
    public Query: PcsQueryScriptApi;
}
