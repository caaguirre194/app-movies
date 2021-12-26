import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// NgRX
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import * as LoginActions from '@store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public iconPasswordName: string = 'eye';
  public passwordType: string = 'password';
  private passwordShown: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public store: Store<AppState.State>
  ) {
    this.loginForm = fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  public login() {
    this.store.dispatch(
      LoginActions.loginForm({
        formUser: this.loginForm.value,
      })
    );
  }

  public signin() {
    this.router.navigate(['/sign-in']);
  }

  public togglePassword() {
    if (this.passwordShown) {
      this.passwordType = 'password';
      this.iconPasswordName = 'eye';
      this.passwordShown = false;
    } else {
      this.passwordType = 'text';
      this.iconPasswordName = 'eye-off';
      this.passwordShown = true;
    }
  }
}
