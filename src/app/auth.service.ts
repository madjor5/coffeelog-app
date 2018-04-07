import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  error = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if( user ) {
          this.userDetails = user;
          if (this.router.routerState.snapshot.url == '/login') {
            this.router.navigate(['/']);
          }
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
        this.error = null;
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.error = err.code;
        console.log('Something went wrong:', err.message, err);
      });
  }

}
