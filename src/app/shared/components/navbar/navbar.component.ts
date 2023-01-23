import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router,NavigationEnd  } from '@angular/router';

import { AuthState } from '../../../stores/auth/authentication.reducer';
import { NavbarState } from 'src/app/stores/navbar/navbar.reducer';
import { Step } from 'src/app/models/Step';
import { setStep } from 'src/app/stores/navbar/navbar.actions';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authState$: Observable<AuthState>;
  navbarState$: Observable<NavbarState>;

  currentStepList : any = [];
  constructor(
    private router: Router,
    private store: Store<{ authState: AuthState, navbarState: NavbarState }>) {
    this.authState$ = store.select('authState');
    this.navbarState$ = store.select('navbarState');
  }

  ngOnInit() {
    this.navbarState$.subscribe(navbarS => this.currentStepList = navbarS.stepList);
  }

  setActiveStep(step: Step) {
    const tempStepsList =  this.currentStepList.map((tStep: any)=> {
      tStep = {...tStep, isActive: false};

      return tStep;
    });
    const tempStep = Object.assign({},step);
    const index = tempStepsList.map((tStep: any) => tStep.id).indexOf(tempStep.id);
    tempStep.isActive = true;
    tempStepsList[index] = tempStep;
    this.store.dispatch(setStep({ currentStep:  tempStep, stepList: tempStepsList }));
    console.log(step);
    this.router.navigate([step.routerLink]);
  }
}
