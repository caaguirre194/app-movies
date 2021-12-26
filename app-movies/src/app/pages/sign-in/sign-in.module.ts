import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { ComponentsModule } from '@components/components.module';

// NgRX
import { StoreModule } from '@ngrx/store';
import { signinReducer } from '@store/reducers/signin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SigninEffects } from '@store/effects/signin.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('signin', signinReducer),
    EffectsModule.forFeature([SigninEffects]),
  ],
  declarations: [SignInPage],
})
export class SignInPageModule {}
