import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { BaseModel } from '../../shared/models/base.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  items: Observable<BaseModel[]>;

  constructor(private postService: PostService) {
    this.items = this.postService.list({
      query: {}
    });
  }

  ngOnInit() {
  }

}
