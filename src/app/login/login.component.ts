import { Component, OnInit } from '@angular/core';
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
    this.email = this.password = '';
  }

  ngOnInit() {
  }

}
