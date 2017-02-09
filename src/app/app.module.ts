import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { RouterModule, Routes }         from '@angular/router';
import { MaterializeModule }            from 'angular2-materialize';
import { FileSelectDirective,
          FileDropDirective }           from 'ng2-file-upload';

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
import { ApplicationService }           from './services';
import { StatService }                  from './services';
import { UploadService }                from './services';

import { ApplicationComponent }         from './component/application/application.component'
import { AddplayerComponent }           from './component/addplayer/addplayer.component';
import { DashboardComponent }           from './component/dashboard/dashboard.component';
import { SelectSeasonComponent }        from './component/select-season/select-season.component';

import { ApplicationRouteValidation }   from "./routeValidation/applicationRouteValidations";

import { CreateSeasonComponent }        from './component/create-season/create-season.component';
import { PlayersComponent }             from './component/players/players.component';
import { StudentServiceComponent }      from './component/student-service/student-service.component';
import { FileUploaderComponent }        from './component/file-uploader/file-uploader.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'application', component: ApplicationComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'addplayer', component: AddplayerComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'selectseason', component: SelectSeasonComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'createseason', component: CreateSeasonComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'players', component: PlayersComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'studentservice', component: StudentServiceComponent },
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
    ApplicationComponent,
    AddplayerComponent,
    DashboardComponent,
    SelectSeasonComponent,
    CreateSeasonComponent,
    PlayersComponent,
    StudentServiceComponent,
    FileSelectDirective,
    FileDropDirective,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, ApplicationService, StatService, UploadService, ApplicationRouteValidation],
  bootstrap: [AppComponent]
})
export class AppModule { }
