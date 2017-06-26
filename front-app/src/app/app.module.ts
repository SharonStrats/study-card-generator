import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignupComponent, SigninComponent } from './auth';
import { GuestHeaderComponent } from './header/guest/guest-header.component';
import { LandingComponent } from './landing/landing.component';
import { CardsComponent, CardListComponent, CardEditComponent } from "./cards";

const appRoutes: Routes = [
  { path: '',
    component: LandingComponent },
  { path: 'signup',
    component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GuestHeaderComponent,
    SignupComponent,
    SigninComponent,
    LandingComponent,
    CardsComponent,
    CardListComponent,
    CardEditComponent
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
