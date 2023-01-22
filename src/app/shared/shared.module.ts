import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    SharedRoutingModule
  ],
  exports:[
    DefaultLayoutComponent
  ]
})
export class SharedModule { }
