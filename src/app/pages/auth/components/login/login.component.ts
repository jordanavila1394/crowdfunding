import { Component, OnInit } from '@angular/core';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public signInForm : FormGroup;

  constructor(private formBuilder: FormBuilder ) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmitSignIn(){
    console.log(this.signInForm.value)
  }
  ngOnInit() {}

}
