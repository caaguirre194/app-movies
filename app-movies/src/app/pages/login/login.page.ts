import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '@services/movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(
    moviesService: MoviesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    moviesService.getPopularMovies().subscribe((data) => console.log(data));
    moviesService
      .findPopularMovieById(634649)
      .subscribe((data) => console.log(data));

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

  public login(ingresar) {
    console.log('login');
    this.router.navigate(['/home']);
  }

  public signin() {
    this.router.navigate(['/sign-in']);
  }
}
