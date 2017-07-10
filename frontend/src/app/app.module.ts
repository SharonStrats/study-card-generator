import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LoginComponent, RegisterComponent } from './auth';
import { GuestHeaderComponent } from './header/guest/guest-header.component';
import { LandingComponent } from './landing/landing.component';
import { CardsComponent, CardListComponent, CardEditComponent, CardNewComponent } from "./cards";

import { CardsService, UserService } from "./services";

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch:'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'card', component: CardsComponent },
  { path: 'card/new', component: CardNewComponent },
  { path: 'card/:id/edit', component: CardEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GuestHeaderComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    CardsComponent,
    CardListComponent,
    CardEditComponent,
    CardNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ CardsService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
