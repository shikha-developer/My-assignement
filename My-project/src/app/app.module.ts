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
import { HttpClientModule } from '@angular/common/http';
import { ClientDetailsComponent } from './dashboard/client-details/client-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorPageComponent,
    SignUpComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


