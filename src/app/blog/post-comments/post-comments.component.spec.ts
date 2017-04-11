import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentsComponent } from './post-comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../shared/services/auth.service';
import { CommentService } from '../../shared/services/comment.service';
import { UserService } from '../../shared/services/user.service';
import { BaseModel } from '../../shared/models/base.model';
import { Observable } from 'rxjs/Observable';

const serviceStub = {
  list: () => Observable.of([])
}

describe('PostCommentsComponent', () => {
  let component: PostCommentsComponent;
  let fixture: ComponentFixture<PostCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: UserService, useValue: serviceStub },
        { provide: CommentService, useValue: serviceStub },
      ],
      declarations: [PostCommentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentsComponent);
    component = fixture.componentInstance;
    component.post = new BaseModel({ id: 1 });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
