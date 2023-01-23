import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../stores/auth/authentication.reducer';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authState$: Observable<AuthState>;

  constructor(
    private store: Store<{ authState: AuthState }>
    ) {
      this.authState$ = store.select('authState');
    }

  ngOnInit() {}

}
