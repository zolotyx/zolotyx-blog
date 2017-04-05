import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'posts/add',
    component: PostFormComponent
  },
  {
    path: '**',
    redirectTo: 'posts'
  }
];

export const routing = RouterModule.forRoot(routes);
