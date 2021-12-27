import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieList } from '@model/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  public getPopularMovies(): Observable<MovieList> {
    return this.httpClient.get<MovieList>(
      `${environment.baseUrl}/popular?api_key=${environment.apiKey}`
    );
  }

  public findPopularMovieById(id: number): Observable<MovieList> {
    return this.httpClient.get<MovieList>(
      `${environment.baseUrl}/${id}?api_key=${environment.apiKey}&language=es`
    );
  }
}
