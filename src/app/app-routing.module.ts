import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';
import { AuthGuard } from './shared/auth.guard';
import { UnauthGuard } from './shared/unauth.guard';
import { AdminAuthGuard } from './shared/admin-auth.guard';
import { AdminUnAuthGuard } from './shared/admin-un-auth.guard';
const routes: Routes = [
  { path: '', component: LandingpageComponent, canActivate: [UnauthGuard] },
  { path: 'user', component: UserpageComponent, canActivate: [AuthGuard] },
  { path: 'editUser', component: EdituserComponent, canActivate: [AuthGuard] },
  {
    path: 'adminLogin',
    component: AdminLoginComponent,
    canActivate: [AdminUnAuthGuard],
  },
  {
    path: 'admin',
    component: AdminPannelComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
