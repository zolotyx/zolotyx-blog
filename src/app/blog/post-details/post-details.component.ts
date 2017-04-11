import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../shared/services/post.service';
import { BaseModel } from '../../shared/models/base.model';

@Component({
  selector: 'blog-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: BaseModel;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postService.get(params['id']).subscribe(result => {
        this.post = result;
      });
    });
  }
}
