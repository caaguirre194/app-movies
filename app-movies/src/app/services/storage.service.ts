import { Injectable } from '@angular/core';
import { Movie } from '@model/movie.model';
import { User } from '@model/user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public saveUser(user: User): void {
    const users: User[] = JSON.parse(localStorage.getItem('users'));
    if (users && users.length > 0) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      localStorage.setItem('users', JSON.stringify([user]));
    }
  }

  public downloadMovie(movie: Movie) {
    const movies: Movie[] = JSON.parse(localStorage.getItem('downloads'));
    if (movies && movies.length > 0) {
      movies.push(movie);
      localStorage.setItem('downloads', JSON.stringify(movies));
    } else {
      localStorage.setItem('downloads', JSON.stringify([movie]));
    }
  }

  public getDownloadMovies(): Movie[] {
    const movies: Movie[] = JSON.parse(localStorage.getItem('downloads'));
    if (movies && movies.length >= 0) {
      return movies;
    }
    return [];
  }

  public setDownloadMovies(movies: Movie[]): void {
    localStorage.setItem('downloads', JSON.stringify(movies));
  }
}
