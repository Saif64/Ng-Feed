import { NgModule } from '@angular/core';
import { NewPostComponent } from './new-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { NewPostRoutingModule } from './new-post-routing.module';

@NgModule({
  declarations: [NewPostComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NoopAnimationsModule,
    NewPostRoutingModule,
  ],
  exports: [
    NewPostComponent,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NoopAnimationsModule,
    NewPostRoutingModule,
  ],
})
export class NewPostModule {}
