import { DashLandingComponent } from './components/dash-landing/dash-landing.component';
import { ROUTES_DASHBOARD } from './../../utils/constants';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

import { AuthGuard } from 'src/app/services/auth/authorization.guards';

import { ROUTES } from '../../utils/constants';


const routes: Routes = [
  {path: ROUTES.ROUTE_HOME, component: DashHomeComponent, canActivate: [AuthGuard]},
  {path: ROUTES.ROUTE_DASHBOARD, component: DashLandingComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch : 'full',},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class DashboardRoutingModule { }
