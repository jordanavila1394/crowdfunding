import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

//Auth
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthenticationService } from '../../services/auth/authentication.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  exports:[
    LoginComponent,
    RegisterComponent
  ]

})
export class AuthModule { }
