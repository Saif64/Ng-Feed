import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RegisterRoutingModule,
  ],
  exports: [
    RegisterComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RegisterRoutingModule,
  ],
})
export class RegisterModule {}
