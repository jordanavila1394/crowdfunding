import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router,NavigationEnd  } from '@angular/router';

import { AuthState } from '../../../stores/auth/authentication.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authState$: Observable<AuthState>;

  constructor(private store: Store<{ authState: AuthState }>) {
    this.authState$ = store.select('authState');
  }

  ngOnInit() {}

}
