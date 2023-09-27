import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { PipeSharedModule } from 'src/app/shared/modules/pipe-shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { SearchComponent } from '../search/search.component';
import { NewPostComponent } from '../new-post/new-post.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    NewPostComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule,
    PipeSharedModule,
  ],
  exports: [],
})
export class HomeModule {}
