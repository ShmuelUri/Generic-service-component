import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { UsersComponent } from './pages/users/users.component';
import { TodosComponent } from './pages/todos/todos.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { CommendsComponent } from './pages/commends/commends.component';
import { CurrentUserComponent } from './pages/current-user/current-user.component';


const routes: Routes = [
          {path:'',component:HomePageComponent},
          {path:"users",component:UsersComponent},
          {path:'todos',component:TodosComponent},
          {path:"albums" ,component:AlbumsComponent},
          {path:'posts',component:PostsComponent},
          {path:"currentUser/:id",component:CurrentUserComponent,
                children:[{path:'todos',component:TodosComponent},
                          {path:'posts',component:PostsComponent,
                                    children:[{path:'comments',component:CommendsComponent}] },
                            {path:"albums" ,component:AlbumsComponent,
                                      children:[{path:'photos',component:PhotosComponent}]}]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
