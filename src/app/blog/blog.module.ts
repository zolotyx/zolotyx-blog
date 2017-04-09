import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from '../shared/services/post.service';
import { CommentService } from '../shared/services/comment.service';
import { blogRouting } from './blog.routing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    blogRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule,
  ],
  declarations: [
    PostListComponent,
    PostFormComponent,
    PostDetailsComponent,
    PostCommentsComponent],
  providers: [
    PostService,
    CommentService
  ]
})
export class BlogModule {
}
