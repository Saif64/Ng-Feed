import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RegisterRoutingModule,
    SharedModule,
  ],
  exports: [
    RegisterComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RegisterRoutingModule,
    SharedModule,
  ],
})
export class RegisterModule {}
