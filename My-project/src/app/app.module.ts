import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module'
import { OnlyLoggedInUsersGuard } from './isLoggedInAuthGuard';
import { isUserLoggedInService } from './isUserLoggedIn.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,
    ReactiveFormsModule
  ],
  providers: [OnlyLoggedInUsersGuard,isUserLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }


