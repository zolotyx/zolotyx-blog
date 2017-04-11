import { Injectable } from '@angular/core';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  auth: AngularFireAuth;

  user: BehaviorSubject<User>;

  get isLoggedIn() {
    return !!this.user.getValue().uid;
  }

  constructor(private af: AngularFire,
              private userService: UserService) {
    this.user = new BehaviorSubject(new User());
    this.auth = this.af.auth;

    this.auth.subscribe(data => {
      if (data) {
        this.userService.get(data.uid).subscribe(response => {
          if (!response.id) {
            const user = User.createFromFirebase(data);
            this.userService.save(user).then(() => {
              this.user.next(user);
            });
          } else {
            this.user.next(response);
          }
        });
      } else {
        this.user.next(new User());
      }
    });
  }
}
