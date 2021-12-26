import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SigninActions from '../actions/signin.actions';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import * as LoginSelectors from '@store/selectors/login.selectors';

@Injectable()
export class SigninEffects {
  signin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SigninActions.signin),
      withLatestFrom(this.store.select(LoginSelectors.selectFeature)),
      mergeMap(([action, latest]) => {
        this.storageService.saveUser(action.user);

        return [SigninActions.signinSuccess()];
      })
    );
  });

  constructor(
    private actions$: Actions,
    private storageService: StorageService,
    private store: Store<AppState.State>
  ) {}
}
