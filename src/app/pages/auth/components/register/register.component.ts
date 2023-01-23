import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { register } from '../../../../stores/auth/authentication.actions'
import { RegisterRequest } from 'src/app/models/global.request';
import { FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  {

  authState$: Observable<any>;
  constructor(
    public fb: FormBuilder,
    private store: Store<{ authState: any }>,
    ) {
    this.authState$ = store.select('authState');
  }

  signUpForm = this.fb.group({
    name: ["", [Validators.required]],
    surname: ["", [Validators.required]],
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
    confirmPassword: ["", [Validators.required]],
  });

  get name() {
    return this.signUpForm.get("name");
  }

  get surname() {
    return this.signUpForm.get("surname");
  }

  get email() {
    return this.signUpForm.get("email");
  }

  get password() {
    return this.signUpForm.get("password");
  }

  onSubmitSignUp() {
    const name = this.signUpForm.value.name || "";
    const surname = this.signUpForm.value.surname || "";
    const email = this.signUpForm.value.email || "";
    const password = this.signUpForm.value.password|| "";
    const signUpData = new RegisterRequest(name, surname, email, password)
    this.store.dispatch(register({ request: signUpData }));
  }

}
