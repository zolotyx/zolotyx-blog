import { BaseModel } from '../models/base.model';
import { Type } from '@angular/core';
interface ResourceDecoratorData<T> {
  entity: string;
  model?: Type<T>;
}
export function Resource<T>(data: ResourceDecoratorData<T>): ClassDecorator {
  return function (target: Function): typeof target {
    target.prototype.entity = data.entity;
    target.prototype.model = data.model || BaseModel;
    return target;
  };
}
