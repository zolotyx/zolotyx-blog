import { Component, OnInit } from '@angular/core';
import { AuthMethods, AuthProviders } from 'angularfire2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public error: Error;
  public loading: Boolean;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  private errorHandler(error: Error) {
    this.error = error;
    this.loading = false;
  }

  private successHandler() {

    this.loading = false;
    this.router.navigate(['']);
  }

  public loginWithSocialNetwork() {
    this.authService.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
      (res) => this.successHandler(),
      (err: Error) => this.errorHandler(err));

    return false;
  }


  submit() {
    this.error = null;
    if (this.form.valid) {
      this.loading = true;
      const data = this.form.value;

      this.authService.auth.login(data, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then((res) => this.successHandler())
        .catch((err: Error) => this.errorHandler(err));
    }
  }

}
