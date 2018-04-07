import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { LoginComponent } from './login/login.component';
import { InputfieldDirective } from './forms/inputfield.directive';

import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AuthService } from "./auth.service";
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputfieldDirective,
    CreateProfileComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
