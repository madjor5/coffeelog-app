import { Component, OnInit } from '@angular/core';
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";

import { InputfieldDirective } from "../forms/inputfield.directive";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password);
    //this.email = this.password = '';
  }

  emailHasError(): boolean {
    return ( this.isInvalidEmail() || this.isUnknownUser() ) ? true : false;
  }

  isInvalidEmail(): boolean {
    return ( this.authService.error === 'auth/invalid-email' ) ? true : false;
  }

  isUnknownUser(): boolean {
    return ( this.authService.error === 'auth/user-not-found' ) ? true : false;
  }

  isWrongPassword(): boolean {
    return ( this.authService.error === 'auth/wrong-password' ) ? true : false;
  }

  ngOnInit() {
  }

}
