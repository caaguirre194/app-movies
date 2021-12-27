import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DownloadActions from '../actions/download.actions';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';

@Injectable()
export class DownloadEffects {
  download$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DownloadActions.download),
      mergeMap((action) => {
        this.storageService.downloadMovie(action.movie);

        return [DownloadActions.downloadSuccess()];
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState.State>,
    private storageService: StorageService
  ) {}
}
