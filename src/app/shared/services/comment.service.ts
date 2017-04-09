import { Injectable } from '@angular/core';
import { Resource } from '../decorators/resource.decorator';
import { BaseHttpService } from './base-http.service';
import { BaseModel } from '../models/base.model';

@Injectable()
@Resource({
  entity: 'comments'
})
export class CommentService extends BaseHttpService<BaseModel> {
}
