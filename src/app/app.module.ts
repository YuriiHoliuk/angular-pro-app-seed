import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
  apiKey: "AIzaSyAhkE71poNjGkNZzxnM1NeKKEDNVEcBtbU",
  authDomain: "angular-pro-course-app.firebaseapp.com",
  databaseURL: "https://angular-pro-course-app.firebaseio.com",
  projectId: "angular-pro-course-app",
  storageBucket: "angular-pro-course-app.appspot.com",
  messagingSenderId: "306401491714"
};
firebase.initializeApp(config);
* */
