import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.items = this.af.database.list('/posts', {
      query: {
        // orderByValue: 'body',
        // equalTo: 'body long text'
      }
    });
  }

  ngOnInit() {

    // this.items.push({ id: 3, title: '3', body: '3' });
  }

}
