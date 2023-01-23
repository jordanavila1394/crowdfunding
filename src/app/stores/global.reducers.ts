import { AuthenticationReducer } from  './auth/authentication.reducer';

import { NavbarReducer } from  './navbar/navbar.reducer';

import { MetaReducer } from "@ngrx/store";
import { HydrationMetaReducer } from "./hydratation/hydratation.reducer";


export const reducers= {
  authState: AuthenticationReducer,
  navbarState: NavbarReducer,
};
export const metaReducers: MetaReducer[] = [HydrationMetaReducer];


