import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../stores/auth/authentication.reducer';
import { Observable } from 'rxjs';
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  authState$: Observable<AuthState>;

  pageTitle: string | undefined;
  currentUrl: string | undefined;

  constructor(
    private router: Router,
    private store: Store<{ authState: AuthState }>
    ) {
      this.authState$ = store.select('authState');
    }
    getTitlePage(currentUrl: string): string | undefined {
      let titlePage="";
      switch (currentUrl)
        {
          case "/login":
              titlePage = 'Login';
              break;
          case "/register":
              titlePage = 'Register';
              break;
          case "/":
          case "/home":
            titlePage = 'Home';
            break;
          case "/dashboard":
            titlePage = 'Dashboard';
            break;
          default:
            titlePage ="";
            break;
        }

      return titlePage;

    }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.pageTitle = this.getTitlePage(event.url);
      }
    });

  }

}
