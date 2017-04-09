import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Resource } from '../decorators/resource.decorator';
import { BaseModel } from '../models/base.model';

@Injectable()
@Resource({
  entity: 'posts'
})
export class PostService extends BaseHttpService<BaseModel> {
}
