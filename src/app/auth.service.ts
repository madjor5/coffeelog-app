import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if( user ) {
          this.userDetails = user;
          if (this.router.routerState.snapshot.url == '/login') {
            this.router.navigate(['/']);
          }
          console.log(this.userDetails, this.router.routerState.snapshot.url);
        } else {
          this.userDetails = null;
          this.router.navigate(['/login']);
        }
      }
    )
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, logged in');
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

}
