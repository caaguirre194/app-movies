import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  public signinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signinForm = fb.group({
      fullName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      bid: ['', [Validators.required]],
      department: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  public signin() {}
}
