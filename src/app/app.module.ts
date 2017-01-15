import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { RouterModule, Routes }         from '@angular/router';

import { AppComponent }                 from './component/app.component';
import { FooterComponent }              from './component/footer/footer.component';
import { HeaderComponent }              from './component/header/header.component';
import { HomeComponent }                from './component/home/home.component';
import { AboutusComponent }             from './component/aboutus/aboutus.component';
import { ContactComponent }             from './component/contact/contact.component';
import { LoginComponent }               from './component/login/login.component';
import { ProgramComponent }             from './component/program/program.component';
import { SignupComponent }              from './component/signup/signup.component';

import { LoginService }                 from './services';
import { ApplicationComponent }         from './component/application/application.component'

import { ApplicationRouteValidation }   from "./routeValidation/applicationRouteValidations";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'application', component: ApplicationComponent, canActivate: [ApplicationRouteValidation]},
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    LoginComponent,
    ProgramComponent,
    SignupComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, ApplicationRouteValidation],
  bootstrap: [AppComponent]
})
export class AppModule { }
