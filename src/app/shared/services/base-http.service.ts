import { Injectable, Injector, Type } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { BaseModel } from '../models/base.model';
import { Observable } from 'rxjs/Observable';

export class ServiceLocator {
  public static injector: Injector;
}

@Injectable()
export abstract class BaseHttpService<M extends BaseModel> {

  protected entity: string;
  protected model: Type<M>;
  protected af: AngularFire;

  constructor() {
    this.af = ServiceLocator.injector.get(AngularFire);
  }

  save(model: M) {
    if (model.id) {
      return this.af.database.object(`/${this.entity}/${model.id}`).update(model);
    }
    return Promise.resolve(this.af.database.list(`/${this.entity}`).push(model));
  }

  prepareModel(data: {}): M {
    return new this.model(data);
  }


  list(params: any = {}): Observable<M[]> {
    return this.af.database.list(`/${this.entity}`, params).map(list => list.map(_ => this.prepareModel(_)));
  }

  get(id: string): Observable<M> {
    return this.af.database.object(`/${this.entity}/${id}`).map(_ => this.prepareModel(_));
  }
}
