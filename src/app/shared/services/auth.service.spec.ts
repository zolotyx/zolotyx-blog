import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AngularFire } from 'angularfire2';
import { BehaviorSubject } from 'rxjs';


const angularFireStub = {
  auth: new BehaviorSubject(false)
};
describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: {} },
        { provide: AngularFire, useValue: angularFireStub }
      ]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
