import { Injectable } from '@angular/core';
import { Resource } from '../decorators/resource.decorator';
import { BaseHttpService } from './base-http.service';
import { Comment } from '../models/comment.model';

@Injectable()
@Resource({
  entity: 'comments',
  model: Comment
})
export class CommentService extends BaseHttpService<Comment> {
}
