import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any;

  constructor(private af: AngularFire,
              private translate: TranslateService) {
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    this.af.auth.subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  logout() {
    this.af.auth.logout();
  }

}
