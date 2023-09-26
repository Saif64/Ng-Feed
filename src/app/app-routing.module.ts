import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewStoryComponent } from './pages/new-story/new-story.component';
import { StoriesComponent } from './pages/stories/stories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },

  { path: 'stories/:username', component: StoriesComponent },
  { path: 'newStory', component: NewStoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
