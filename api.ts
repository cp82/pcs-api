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
}

export class PcsQueryScriptApi {
  public execute(): void {
    
  }
}
