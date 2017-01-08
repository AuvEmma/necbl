import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { FooterComponent }      from './footer/footer.component';
import { HeaderComponent }      from './header/header.component';
import { HomeComponent }        from './home/home.component';
import { AboutusComponent }     from './aboutus/aboutus.component';
import { ContactComponent }     from './contact/contact.component';
import { LoginComponent }       from './login/login.component';
import { ProgramComponent }     from './program/program.component';
import { SignupComponent }      from './signup/signup.component';

import { LoginService }         from './services'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'program', component: ProgramComponent },
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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
