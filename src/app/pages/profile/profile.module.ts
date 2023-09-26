import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ProfileRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ProfileRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    SharedModule,
    ProfileComponent,
  ],
})
export class ProfileModule {}
