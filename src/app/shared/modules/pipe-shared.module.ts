import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [CommonModule],
  exports: [FilterPipe, CommonModule],
})
export class PipeSharedModule {}
