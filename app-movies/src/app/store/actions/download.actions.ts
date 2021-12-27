import { Movie } from '@model/movie.model';
import { createAction, props } from '@ngrx/store';

export const download = createAction(
  '[Download API] Download',
  props<{ movie: Movie }>()
);

export const downloadSuccess = createAction('[Download API] Download Success');

export const downloadFailure = createAction(
  '[Download API] Download Failure',
  props<{ error: string }>()
);
