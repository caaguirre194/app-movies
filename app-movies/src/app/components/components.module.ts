import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ExitComponent } from './exit/exit.component';

@NgModule({
  declarations: [HeaderComponent, MovieItemComponent, ExitComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, MovieItemComponent, ExitComponent],
})
export class ComponentsModule {}
