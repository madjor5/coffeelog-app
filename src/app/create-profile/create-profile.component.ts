import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  isInvalidEmail(): boolean {
    return ( this.authService.error === 'auth/invalid-email' ) ? true : false;
  }

  isEmailUsed(): boolean {
    return ( this.authService.error === 'auth/email-already-in-use' ) ? true : false;
  }

  isPasswordWeak(): boolean {
    return ( this.authService.error === 'auth/weak-password' ) ? true : false;
  }

  createUser(): void {
    this.authService.createUser(this.email, this.password);
  }
}
