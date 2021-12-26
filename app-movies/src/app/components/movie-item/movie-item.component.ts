import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@model/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie = {} as Movie;

  constructor() {}

  ngOnInit() {}
}
