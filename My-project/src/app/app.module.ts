import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module'
import { OnlyLoggedInUsersGuard } from './isLoggedInAuthGuard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,
    ReactiveFormsModule
  ],
  providers: [OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


