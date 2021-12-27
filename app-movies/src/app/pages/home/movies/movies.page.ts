import { Component, OnInit } from '@angular/core';
import { Movie, MovieList } from '@model/movie.model';
import { MoviesService } from '@services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public movies: Movie[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  public getPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((data: MovieList) => {
      this.movies = data.results;
    });
  }
}
