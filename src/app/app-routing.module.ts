import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewStoryComponent } from './new-story/new-story.component';
import { StoriesComponent } from './stories/stories.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  // {
  //   path: 'search',
  //   loadChildren: () =>
  //     import('./pages/search/serach.module').then((m) => m.SearchModule),
  // },

  // { path: 'stories/:username', component: StoriesComponent },
  // { path: 'newStory', component: NewStoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
