import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../shared/services/comment.service';
import { BaseModel } from '../../shared/models/base.model';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { Comment } from '../../shared/models/comment.model';
import { combineLatest } from 'rxjs/observable/combineLatest';


@Component({
  selector: 'blog-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  @Input() public post: BaseModel;

  comments: Observable<Comment[]>;
  commentForm: FormGroup;

  constructor(private commentService: CommentService,
              public authService: AuthService,
              public userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      text: ['', Validators.required],
      postId: [this.post.id, Validators.required]
    });

    this.comments = combineLatest(
      this.commentService.list({
        query: {
          orderByChild: 'postId',
          equalTo: this.post.id
        }
      }),
      this.userService.list()
    ).map(([comments, users]) => {
      return comments.map(c => {
        c.user = users.find(_ => _.uid === c.uid);
        return c;
      });
    });


  }

  addComment() {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;
      formData.uid = this.authService.user.getValue().uid;
      this.commentService.save(formData).then(() => {
        this.commentForm.reset();
      }).catch(err => console.error(err));
    }
  }

}
