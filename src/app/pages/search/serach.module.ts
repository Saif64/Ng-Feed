import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PipeSharedModule } from 'src/app/shared/modules/pipe-shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SearchRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    SharedModule,
    PipeSharedModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SearchRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    SharedModule,
    SearchComponent,
    PipeSharedModule,
  ],
})
export class SearchModule {}
