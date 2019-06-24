import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OnlyLoggedInUsersGuard } from './isLoggedInAuthGuard';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
  { path: 'dashboard/:name', component: DashboardComponent,canActivate:[OnlyLoggedInUsersGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', component:LoginComponent} 

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
