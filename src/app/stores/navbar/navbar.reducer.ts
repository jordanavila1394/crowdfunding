import { Step } from 'src/app/models/Step';

import { createReducer, on } from '@ngrx/store';
import { setStep } from './navbar.actions';

import { ROUTES } from '../../utils/constants';

export const initialState: NavbarState = {
  currentStep: new Step(0, "Home", ROUTES.ROUTE_HOME, true),
  stepList : [
    {
      id: 0,
      title: "Home",
      routerLink: ROUTES.ROUTE_HOME,
      isActive: true,
    },
    {
      id: 1,
      title: "Dashboard",
      routerLink: ROUTES.ROUTE_DASHBOARD,
      isActive: false,
    },
    {
      id: 2,
      title: "Campaigns",
      routerLink: ROUTES.ROUTE_CAMPAIGNS,
      isActive: false,
    }
    ,
    {
      id: 3,
      title: "Settings",
      routerLink: ROUTES.ROUTE_SETTINGS,
      isActive: false,
    }

  ]
};
export interface NavbarState {
  currentStep: Step;
  stepList: Step[];
}

export const NavbarReducer = createReducer(
  initialState,
  on(setStep, (state, { currentStep, stepList }) => ({
    ...state,
    currentStep,
    stepList,
  }))
);
