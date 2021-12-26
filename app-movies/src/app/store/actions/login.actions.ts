import { LoginUser } from '@model/login-user.model';
import { User } from '@model/user.model';
import { createAction, props } from '@ngrx/store';

export const loginForm = createAction(
  '[Login Page] Login Form',
  props<{ formUser: LoginUser }>()
);

export const loginFormSuccess = createAction(
  '[Login API] Login Form Success',
  props<{ user: User }>()
);

export const loginFormFailure = createAction(
  '[Login API] Login Form Failure',
  props<{ error: string }>()
);

export const loginGoToHome = createAction('[Login Page] Login Go To Home');
