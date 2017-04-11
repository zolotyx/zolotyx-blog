import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BlogModule } from './blog/blog.module';
import { appRouting } from './app.routing';
import { AuthService } from './shared/services/auth.service';
import { ServiceLocator } from './shared/services/base-http.service';
import { UserService } from './shared/services/user.service';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA7PGb6dKaOILJCIjjeuGaXzmw0EIRuyXQ',
  authDomain: 'zolotyx-blog.firebaseapp.com',
  databaseURL: 'https://zolotyx-blog.firebaseio.com',
  projectId: 'zolotyx-blog',
  storageBucket: 'zolotyx-blog.appspot.com',
  messagingSenderId: '401508688084'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    appRouting,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    BlogModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
