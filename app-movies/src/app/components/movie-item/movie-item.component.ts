import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@model/movie.model';

// NgRX
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import * as DownloadActions from '@store/actions/download.actions';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie = {} as Movie;

  constructor(public store: Store<AppState.State>) {}

  ngOnInit() {}

  public downloadMovie(movie: Movie) {
    this.store.dispatch(
      DownloadActions.download({
        movie: movie,
      })
    );
  }
}
