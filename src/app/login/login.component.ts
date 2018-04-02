import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { InputfieldDirective } from "../forms/inputfield.directive";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private username: string = '';
  private password: string = '';

}
