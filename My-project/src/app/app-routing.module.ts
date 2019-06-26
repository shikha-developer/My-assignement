import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OnlyLoggedInUsersGuard } from './isLoggedInAuthGuard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const appRoutes: Routes = [
  { path: 'signup', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
  { path: 'dashboard/:name', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', component:LoginComponent} ,
  { path: '**', component: ErrorPageComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
