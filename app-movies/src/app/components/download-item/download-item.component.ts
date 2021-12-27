import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '@model/movie.model';

// NgRX
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import * as DownloadActions from '@store/actions/download.actions';

@Component({
  selector: 'app-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.scss'],
})
export class DownloadItemComponent implements OnInit {
  @Input() movie: Movie = {} as Movie;
  @Output() refresh = new EventEmitter();

  constructor(public store: Store<AppState.State>) {}

  ngOnInit() {}

  public removeDownloadMovie(movie: Movie) {
    this.store.dispatch(
      DownloadActions.removeDownload({
        movie: movie,
      })
    );

    this.refresh.emit();
  }
}
