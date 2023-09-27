import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from '../new-post/new-post.component';
import { ProfileComponent } from '../profile/profile.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'post', component: NewPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
