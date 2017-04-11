import { BaseModel } from './base.model';
import { FirebaseAuthState } from 'angularfire2';
export class User extends BaseModel {

  uid: string;
  email: string;
  displayName: string;
  photoURL: string;

  static createFromFirebase(data: FirebaseAuthState) {

    const params = {
      uid: data.uid,
      email: data.auth.email,
      displayName: data.auth.displayName,
      photoURL: data.auth.photoURL
    };
    return new User(params);
  }

  constructor(params?: {}) {
    super(params);
    this.id = this.uid;
    this.displayName = this.email;
  }


}
