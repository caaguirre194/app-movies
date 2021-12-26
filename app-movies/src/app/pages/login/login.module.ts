import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentsModule } from '@components/components.module';

// NgRX
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '@store/reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '@store/effects/login.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
