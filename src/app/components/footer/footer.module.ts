import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { SearchComponent } from 'src/app/pages/search/search.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'search', component: SearchComponent },
      { path: 'profile/:username', component: ProfileComponent },
      { path: '', component: HomeComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class FooterModule {}
