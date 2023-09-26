import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { StoriesComponent } from './pages/stories/stories.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { NewStoryComponent } from './pages/new-story/new-story.component';
import { ProfileModule } from './pages/profile/profile.module';
import { NewPostModule } from './pages/new-post/new-post.module';
import { SearchModule } from './pages/search/serach.module';
import { SharedModule } from './shared/modules/shared.module';
import { PipeSharedModule } from './shared/modules/pipe-shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoriesComponent,
    NewStoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NoopAnimationsModule,
    ProfileModule,
    NewPostModule,
    SearchModule,
    SharedModule,
    PipeSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
