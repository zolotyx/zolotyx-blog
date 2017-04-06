import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private af: AngularFire,
              private router: Router) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      const formData = this.form.value;

      this.af.database.list('/posts').push(formData);
      this.router.navigate(['/posts']);
    }
  }
}
