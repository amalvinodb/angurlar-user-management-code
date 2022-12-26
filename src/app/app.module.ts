import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LoginComponent } from './components/login/login.component';

import { UserpageComponent } from './components/userpage/userpage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FormsModule } from '@angular/forms';
import { EdituserComponent } from './components/edituser/edituser.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { UserDetailsDisplayComponent } from './components/user-details-display/user-details-display.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';
import { IndividualUserComponent } from './components/individual-user/individual-user.component';
import { setBackgroundDirective } from './customDirectives/setBackground.directive';
import { IfDirective } from './customDirectives/if.directive';
import { EffectsModule } from '@ngrx/effects';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserpageComponent,
    LandingpageComponent,
    EdituserComponent,
    UserDetailsFormComponent,
    UserDetailsDisplayComponent,
    AdminLoginComponent,
    AdminPannelComponent,
    IndividualUserComponent,
    setBackgroundDirective,
    IfDirective,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
