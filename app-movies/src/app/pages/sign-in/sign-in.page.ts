import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

// NgRX
import { Store } from '@ngrx/store';
import * as AppState from '@store/state/app.state';
import * as SigninActions from '@store/actions/signin.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  public signinForm: FormGroup;

  constructor(private fb: FormBuilder, public store: Store<AppState.State>) {
    this.signinForm = fb.group(
      {
        fullName: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        bid: ['', [Validators.required]],
        department: ['', [Validators.required]],
        municipality: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.checkPasswords }
    );
  }

  ngOnInit() {}

  public signin() {
    this.store.dispatch(
      SigninActions.signin({
        user: this.signinForm.value,
      })
    );
    this.resetForm();
  }

  public resetForm(): void {
    this.signinForm.patchValue({
      fullName: '',
      phone: '',
      bid: '',
      department: '',
      municipality: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  public checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  };
}
