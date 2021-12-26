import { Component, OnInit } from '@angular/core';
import { Movie, MovieList } from '@model/movie.model';
import { MoviesService } from '@services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
