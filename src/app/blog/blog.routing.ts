import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailsComponent } from './post-details/post-details.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/add',
    component: PostFormComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  }
];

export const blogRouting = RouterModule.forRoot(routes);
