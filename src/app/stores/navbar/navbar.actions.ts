import { Step } from 'src/app/models/Step';


import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const setStep = createAction('[Navbar Component] Change Step and Step List',
    props<{ currentStep: Step , stepList: Step[]}>()
);
