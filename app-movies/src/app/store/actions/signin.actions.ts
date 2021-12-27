import { User } from '@model/user.model';
import { createAction, props } from '@ngrx/store';

export const signin = createAction(
  '[Signin API] Signin',
  props<{ user: User }>()
);

export const signinSuccess = createAction('[Signin API] Signin Success');

export const signinFailure = createAction(
  '[Signin API] Signin Failure',
  props<{ error: string }>()
);
