import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { PostListComponent } from 'src/app/shared/components/post-list/post-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent, PostListComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, PostListComponent, CommonModule],
})
export class SharedModule {}
