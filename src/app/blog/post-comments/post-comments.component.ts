import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../shared/services/comment.service';
import { BaseModel } from '../../shared/models/base.model';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'blog-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  @Input() public post: BaseModel;
  comments: Observable<BaseModel[]>;
  commentForm: FormGroup;

  constructor(private commentService: CommentService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.comments = this.commentService.list({
      query: {
        orderByChild: 'postId',
        equalTo: this.post.id
      }
    });
    this.commentForm = this.fb.group({
      text: ['', Validators.required],
      postId: [this.post.id]
    });
  }

  addComment() {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;
      this.commentService.save(formData).then(() => {
        this.commentForm.reset();
      }, err => {
        console.error(err);
      });

    }
  }

}
