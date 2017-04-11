import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from './post-details.component';
import { PostService } from '../../shared/services/post.service';
import { TranslateModule } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';
import { BaseModel } from '../../shared/models/base.model';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'blog-post-comments',
  template: ''
})
class PostCommentsStubComponent {
  @Input() public post: BaseModel;
}

const postServiceStub = {
  get: () => Observable.of(new BaseModel({ id: 1 })) // todo
};

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: PostService, useValue: postServiceStub }
      ],
      declarations: [
        PostCommentsStubComponent,
        PostDetailsComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
