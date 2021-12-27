import { Movie } from '@model/movie.model';
import { createReducer, on } from '@ngrx/store';
import * as DownloadActions from '../actions/download.actions';
import * as AppState from '../state/app.state';

export interface DownloadState {
  downloads: Movie[];
}

export interface State extends AppState.State {
  downloads: DownloadState;
}

export const initialState = {
  downloads: [],
};

export const downloadReducer = createReducer<DownloadState>(
  initialState,
  on(
    DownloadActions.download,
    (state, { movie }): DownloadState => ({
      downloads: [...state.downloads, movie],
    })
  )
);
