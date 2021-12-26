import { createAction } from '@ngrx/store';

export const logout = createAction('[Auth] Confirm Logout');
export const logoutConfirmed = createAction('[Auth] Logout Confirmed');
export const logoutCancelled = createAction('[Auth] Logout Cancelled');
