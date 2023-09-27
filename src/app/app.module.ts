import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { StoriesComponent } from './stories/stories.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { NewStoryComponent } from './new-story/new-story.component';
// import { ProfileModule } from './pages/profile/profile.module';

import { SharedModule } from './shared/modules/shared.module';
import { PipeSharedModule } from './shared/modules/pipe-shared.module';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
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
    SharedModule,
    PipeSharedModule,
    // ProfileModule,
    // NewPostModule,
    // SearchModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
