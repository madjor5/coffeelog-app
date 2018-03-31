import { APP_BASE_HREF } from "@angular/common";
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { InputfieldComponent } from "./forms/inputfield/inputfield.component";
import { LoginComponent } from "./login/login.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        InputfieldComponent
      ],
      imports: [
        RouterTestingModule,
        AppRoutingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
