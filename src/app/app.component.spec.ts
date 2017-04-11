import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './shared/services/auth.service';
import { AngularFire } from 'angularfire2';
import { UserService } from './shared/services/user.service';
import { TranslateModule } from '@ngx-translate/core';

const angularFireStub = {};

const serviceStub = {};

describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: AuthService, useValue: serviceStub },
        { provide: UserService, useValue: serviceStub },
        { provide: AngularFire, useValue: angularFireStub }
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
