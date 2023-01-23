import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [
    DashHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    DashHomeComponent,
  ]
})
export class DashboardModule { }
