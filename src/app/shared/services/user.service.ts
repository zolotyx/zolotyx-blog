import { Injectable } from '@angular/core';
import { Resource } from '../decorators/resource.decorator';
import { BaseHttpService } from './base-http.service';
import { User } from '../models/user.model';

@Injectable()
@Resource({
  entity: 'user',
  model: User
})
export class UserService extends BaseHttpService<User> {
}
