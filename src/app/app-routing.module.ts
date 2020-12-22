import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsManagementComponent } from './components/posts-management/posts-management.component';

const routes: Routes = [
    { path: '', component: PagesListComponent},
    { path: 'sign-in', component: SignInComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'add-post', component: AddPostComponent },
    { path: 'edit-post/:id', component: EditPostComponent },
    { path: 'posts-list', component: PostsListComponent },
    { path: 'posts-management', component: PostsManagementComponent }
];    

@NgModule({
    imports: 
    [RouterModule.forRoot(routes),],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}