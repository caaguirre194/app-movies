import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage.service';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DownloadActions from '../actions/download.actions';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import { Movie } from '@model/movie.model';

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

  removeDownload$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DownloadActions.removeDownload),
      mergeMap((action) => {
        let downloadMovies: Movie[] = this.storageService.getDownloadMovies();
        downloadMovies = downloadMovies.filter(
          (item) => JSON.stringify(item) !== JSON.stringify(action.movie)
        );

        this.storageService.setDownloadMovies(downloadMovies);

        return [DownloadActions.removeDownloadSuccess()];
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState.State>,
    private storageService: StorageService
  ) {}
}
