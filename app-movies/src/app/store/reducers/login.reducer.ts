import { LoginUser } from '@model/login-user.model';
import { User } from '@model/user.model';
import { createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';
import * as AppState from '../state/app.state';

export interface LoginState {
  token: string; // JWT
  formUser: LoginUser;
  user: User;
  showLoader: boolean;
  error: string;
  goToHome: boolean;
}

export interface State extends AppState.State {
  login: LoginState;
}

export const initialState = {
  token: null,
  formUser: null,
  user: null,
  showLoader: false,
  error: null,
  goToHome: false,
};

export const loginReducer = createReducer<LoginState>(
  initialState,
  on(
    LoginActions.loginForm,
    (state, { formUser }): LoginState => ({
      ...initialState,
      formUser,
      showLoader: true,
    })
  ),
  on(
    LoginActions.loginFormSuccess,
    (state, { user }): LoginState => ({
      ...state,
      user,
      showLoader: false,
      error: null,
    })
  ),
  on(
    LoginActions.loginFormFailure,
    (state, { error }): LoginState => ({
      ...state,
      user: null,
      showLoader: false,
      error,
    })
  ),
  on(
    LoginActions.loginGoToHome,
    (state): LoginState => ({
      ...state,
      goToHome: true,
    })
  )
);
