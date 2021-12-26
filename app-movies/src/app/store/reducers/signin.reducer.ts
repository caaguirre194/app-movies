import { User } from '@model/user.model';
import { createReducer, on } from '@ngrx/store';
import * as SigninActions from '../actions/signin.actions';
import * as AppState from '../state/app.state';

export interface SigninState {
  users: User[];
}

export interface State extends AppState.State {
  signin: SigninState;
}

export const initialState = {
  users: [],
};

export const signinReducer = createReducer<SigninState>(
  initialState,
  on(
    SigninActions.signin,
    (state, { user }): SigninState => ({
      users: [...state.users, user],
    })
  )
);
