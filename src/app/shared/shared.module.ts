import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    DefaultLayoutComponent
  ]
})
export class SharedModule { }
