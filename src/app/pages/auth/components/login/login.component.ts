import { Component, OnInit } from '@angular/core';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { login } from '../../../../stores/auth/authentication.actions'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/app/models/global.request';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public signInForm : FormGroup;
  authState$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ authState: any }>
    ) {
    this.authState$ = store.select('authState');
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmitSignIn() {
    const email = this.signInForm.value.email || "";
    const password = this.signInForm.value.password|| "";
    const signInData = new LoginRequest(email, password)
    this.store.dispatch(login({ request: signInData }));
  }
  ngOnInit() {}

}
