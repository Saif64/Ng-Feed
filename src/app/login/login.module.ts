import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LoginRoutingModule,
    SharedModule,
  ],
  exports: [
    LoginComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LoginRoutingModule,
  ],
})
export class LoginModule {}
