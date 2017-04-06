import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute,
              private af: AngularFire) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = this.af.database.object(`/posts/${params['id']}`);
    });
  }
}
