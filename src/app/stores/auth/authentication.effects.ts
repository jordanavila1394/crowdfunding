import { LoginRequest, RegisterRequest } from './../../models/global.request';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  login,
  loginRedirect,
  logout,
  logoutConfirmation,
  logoutConfirmationDismiss,
  loginSuccess,
  loginFailure,
  idleTimeout,
  register,
  registerSuccess,
  registerFailure,

} from './authentication.actions';

import { AuthenticationService } from '../../services/auth/authentication.service';

import { ROUTES } from '../../utils/constants'
// import { ToastrService } from 'ngx-toastr';
import { ToastController } from '@ionic/angular';


@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      map((action) => action.request),
      exhaustMap((auth: LoginRequest) =>
        this.authService.login(auth).pipe(
          map((user) => loginSuccess({ user})),
          catchError((error) => of(loginFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigate([ROUTES.ROUTE_HOME]))
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginFailure),
        tap(() => console.log("loginfail"))
      ),
    { dispatch: false }
  );

  removeLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() =>localStorage.removeItem("state"))
      ),
    { dispatch: false }
  );


  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginRedirect, logout),
        tap(() => {
          this.router.navigate([ROUTES.ROUTE_LOGIN]);
        })
      ),
    { dispatch: false }
  );

  logoutConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutConfirmation),
      map((result) =>
        result ? logout() : logoutConfirmationDismiss()
      )
    )
  );

  logoutIdleUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(idleTimeout),
      map(() => logout())
    )
  );

  //Register effects
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      map((action) => action.request),
      exhaustMap((auth: RegisterRequest) =>
        this.authService.register(auth).pipe(
          map((user) => registerSuccess({ user})),
          catchError((error) => of(registerFailure({ error })))
        )
      )
    )
  );
  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess),
        tap(async () => {
          const toast = this.toastController.create({
            message: 'Account created',
            duration: 1500,
            position: "top",
            color:"success"
          });
          (await toast).present();
        } )
      ),
    { dispatch: false }
  );

  registerFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerFailure),
        tap(async () => {
          const toast = this.toastController.create({
            message: 'Register failed',
            duration: 1500,
            position: "top",
            color:"danger"
          });
          (await toast).present();
        } )
      ),
    { dispatch: false }
  );
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private toastController: ToastController,
    private router: Router,
  ) {}
}
