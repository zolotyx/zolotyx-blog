import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'blog-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private postService: PostService,
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

      this.postService.save(formData);
      this.router.navigate(['/posts']);
    }
  }
}
