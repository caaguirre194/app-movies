import { Component, OnInit } from '@angular/core';
import { Movie } from '@model/movie.model';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {
  public movies: Movie[];

  constructor(private storageService: StorageService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getDownloadMovies();
  }

  public getDownloadMovies(event?: any) {
    this.movies = this.storageService.getDownloadMovies();
  }
}
