import { NgModule } from '@angular/core';

import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  declarations: [FilterPipe],
  imports: [],
  exports: [FilterPipe],
})
export class PipeSharedModule {}
