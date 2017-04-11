import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public loading: Boolean;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
    this.form = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  private errorHandler() {
    this.loading = false;
  }

  private successHandler() {
    this.loading = false;
    this.router.navigate(['']);
  }

  submit() {

    if (this.form.valid) {
      this.loading = true;
      const data = this.form.value;

      this.authService.auth.createUser(data)
        .then((res) => this.successHandler())
        .catch((err: Error) => this.errorHandler());
    }
  }
}
