import { User } from '../../models/User';

import { LoginRequest, RegisterRequest } from '../../models/global.request';


import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthState, getIsAuthenticated } from '../../stores/auth/authentication.reducer';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState$: Observable<AuthState>;
  isAuthenticated !: boolean;
  reqHeader!:HttpHeaders;
  private serviceContainer = "auth";


  private readonly mockedUser = new User('mail@test.it',"mario","rossi","test");
  constructor(
    private http: HttpClient,
    private store: Store<{ authState: AuthState }>,
    ) {
      this.authState$ = store.select('authState');
  }

  public login(request: LoginRequest): Observable<any> {
      return this.http.post<any[]>(`${environment.apiUrl}login`, request);
  }

  public register(request: RegisterRequest): Observable<any> {
    return this.http.post<any[]>(`${environment.apiUrl}signup`, request);
  }

  // login(signInData: LoginRequest): Observable<User>   {

  //   if(this.checkCredentials(signInData)) {
  //     return of(this.mockedUser);
  //   }else{
  //     return throwError(() => 'Invalid username or password');
  //   }
  // }

  logout() {

    return of(true);
  }

  // private checkCredentials(signInData: LoginRequest): boolean {
  //   return this.checkEmail(signInData.email) && this.checkPassword(signInData.password);
  // }

  // private checkEmail( email: string): boolean {
  //   return email === this.mockedUser.getEmail();
  // }

  // private checkPassword( password: string): boolean {
  //   return password === this.mockedUser.getPassword();

  // }
  public getAuthStatus(): boolean {
    this.authState$.subscribe(authS =>{
        this.isAuthenticated = authS.isAuthenticated;
    })

    return this.isAuthenticated;
  }
}
