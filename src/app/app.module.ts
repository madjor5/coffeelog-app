import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { LoginComponent } from './login/login.component';
import { InputfieldComponent } from './forms/inputfield/inputfield.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputfieldComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
