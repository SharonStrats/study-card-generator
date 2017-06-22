import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignupComponent, SigninComponent } from './_auth';
import { HeaderComponent } from './_header/header.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  { path: '',
    component: LandingComponent },
  { path: 'signup',
    component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
