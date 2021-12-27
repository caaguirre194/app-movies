import { Injectable } from '@angular/core';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as LoginActions from '../actions/login.actions';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import { SessionService } from '@services/session.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  loginForm$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.loginForm),
      mergeMap((action) => {
        const isUser = this.sessionService.validateUser(
          action.formUser.email,
          action.formUser.password
        );

        if (isUser) {
          return [LoginActions.loginFormSuccess()];
        }

        return [
          LoginActions.loginFormFailure({
            error: 'Credenciales incorrectas',
          }),
        ];
      })
    );
  });

  loginFormSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginFormSuccess),
      mergeMap((action) => {
        this.router.navigate(['/home']);
        return [LoginActions.loginGoToHome()];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sessionService: SessionService,
    private store: Store<AppState.State>,
    private router: Router
  ) {}
}
