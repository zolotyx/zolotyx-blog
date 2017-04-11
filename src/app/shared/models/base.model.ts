export class BaseModel {

  public id: string;

  constructor(params: {} = {}) {
    if (params) {
      this.parse(params);
    }

    this.id = params['$key'];
  }


  protected parse(params: {}): void {
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        this[key] = params[key];

      }
    }
  }
}
