import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from '../new-post/new-post.component';
import { ProfileComponent } from '../profile/profile.component';
import { SearchComponent } from '../search/search.component';
import { StoriesComponent } from '../stories/stories.component';
import { NewStoryComponent } from '../new-story/new-story.component';

const routes: Routes = [
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'post', component: NewPostComponent },
  { path: 'stories/:username', component: StoriesComponent },
  { path: 'newStory', component: NewStoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
