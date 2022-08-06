import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthMethodService } from 'src/app/auth-method.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authMethodService: AuthMethodService,
    private router: Router
  ) {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);

    if (this.form?.valid) {
      this.authMethodService
        .signInByIhio(this.form.value)
        .then((res) => {
          this.router.navigate(['/']);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

}
