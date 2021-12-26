import { Injectable } from '@angular/core';

/* NgRx */
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import * as LoginActions from '../actions/login.actions';
import { mergeMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import * as LoginSelectors from '@store/selectors/login.selectors';
import { SessionService } from '@services/session.service';
import { User } from '@model/user.model';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  loginForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginForm),
      mergeMap((action) =>
        this.sessionService
          .getUser(action.formUser.email, action.formUser.password)
          .pipe(
            map((user: User) =>
              LoginActions.loginFormSuccess({
                user: {
                  ...user,
                  email: action.formUser.email,
                  password: action.formUser.password,
                },
              })
            ),
            catchError((error: { error: 'Error en login' }) =>
              of(LoginActions.loginFormFailure({ error: error.error }))
            )
          )
      )
    )
  );

  loginFormSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginFormSuccess),
      withLatestFrom(this.store.select(LoginSelectors.selectFeature)),
      mergeMap(([action, latest]) => [LoginActions.loginGoToHome()])
    )
  );

  constructor(
    private actions$: Actions,
    private sessionService: SessionService,
    private store: Store<AppState.State>,
    private router: Router
  ) {}
}
