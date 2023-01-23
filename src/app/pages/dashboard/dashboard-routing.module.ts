import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

import { AuthGuard } from 'src/app/services/auth/authorization.guards';

const routes: Routes = [
  {path:'dash-home', component: DashHomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo:'/dash-home', pathMatch : 'full',},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class DashboardRoutingModule { }
