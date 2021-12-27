import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadsPage } from './downloads/downloads.page';

import { HomePage } from './home.page';
import { MoviesPage } from './movies/movies.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'movies',
        component: MoviesPage,
      },
      {
        path: 'downloads',
        component: DownloadsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
