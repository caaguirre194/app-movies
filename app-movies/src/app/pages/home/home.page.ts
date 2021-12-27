import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public selection: string;
  constructor(private router: Router) {
    this.selection = 'Películas';

    if (router.url.includes('/downloads')) {
      this.selection = 'Descargas';
    }

    if (router.url.includes('/movies')) {
      this.selection = 'Películas';
    }
  }

  ngOnInit() {}

  public changeTitle(title: string) {
    this.selection = title;
  }
}
