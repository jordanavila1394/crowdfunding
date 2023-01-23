import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../stores/auth/authentication.reducer';
import { logout } from "../../../stores/auth/authentication.actions";
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private store: Store<{ authState: AuthState }>
    ) { }

  ngOnInit() {}

  logout() {
    this.menu.close();
    this.store.dispatch(logout());
  }
}
