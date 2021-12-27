import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from '@components/components.module';
import { MoviesPage } from './movies/movies.page';
import { DownloadsPage } from './downloads/downloads.page';

// NgRX
import { StoreModule } from '@ngrx/store';
import { downloadReducer } from '@store/reducers/download.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DownloadEffects } from '@store/effects/download.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    StoreModule.forFeature('login', downloadReducer),
    EffectsModule.forFeature([DownloadEffects]),
  ],
  declarations: [HomePage, MoviesPage, DownloadsPage],
})
export class HomePageModule {}
