import { User} from '../../models/User';
import { Action, createReducer, on } from '@ngrx/store';
import {
  login,
  logout,
  loginSuccess,
  loginFailure,
} from './authentication.actions';

const userObj = new User ('mail@test.it',"mario","rossi","test");

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
  error: null,
  pending: false
};

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
  error: string | null;
  pending: boolean;
}
export const AuthenticationReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null,
    pending: false,
  })),
  on(logout, () => initialState),
  on(login, (state) => ({
    ...state,
    error: null,
    pending: true,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error,
    pending: false,
  }))
);
export const getError = (state: AuthState) => state.error;
export const getIsAuthenticated = (state: AuthState) => state.isAuthenticated;
export const getPending = (state: AuthState) => state.pending;
export const getUser = (state: AuthState) => state.user;
