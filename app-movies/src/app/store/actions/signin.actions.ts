import { User } from '@model/user.model';
import { createAction, props } from '@ngrx/store';

export const signin = createAction(
  '[Login API] Signin',
  props<{ user: User }>()
);

export const signinSuccess = createAction('[Login API] Signin Success');

export const signinFailure = createAction(
  '[Login API] Signin Failure',
  props<{ error: string }>()
);
