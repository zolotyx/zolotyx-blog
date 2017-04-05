import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public loading: Boolean;

  constructor(private af: AngularFire,
              private fb: FormBuilder,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  private errorHandler(error) {
    this.loading = false;
    console.log(error);
  }

  private successHandler(loginData) {
    console.log(loginData);
    this.loading = false;
    this.router.navigate(['']);
  }

  submit() {

    if (this.form.valid) {
      this.loading = true;
      const data = this.form.value;

      this.af.auth.createUser(data).then(
        (res) => this.successHandler(res),
        (err) => this.errorHandler(err));
    }
  }
}
