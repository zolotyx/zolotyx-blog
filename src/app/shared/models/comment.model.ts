import { BaseModel } from './base.model';
import { User } from './user.model';
export class Comment extends BaseModel {
  uid: string;
  user?: User;
}
