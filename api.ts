export class PcsViewApi {
  public saveDataContext() {
    console.log("Saving datacontext");
  }

  public cancelDataContext() {
    console.log("Cancelling datacontext");
  }

  public getUnitById(pId: number): PcsUnitApi {
    console.log("Getting View by Id");
    return new PcsUnitApi();
  }
}

export class PcsUnitApi {
  public get View(): PcsViewApi {
    return new PcsViewApi();
  }
}
