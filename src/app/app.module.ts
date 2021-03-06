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
import { GalleryComponent }             from './component/home/gallery/gallery.component';

import { LoginService }                 from './services';
import { ApplicationService }           from './services';
import { StatService }                  from './services';
import { UploadService }                from './services';
import { GameService }                  from './services';

import { ApplicationComponent }         from './component/application/application.component'
import { AddplayerComponent }           from './component/addplayer/addplayer.component';
import { DashboardComponent }           from './component/dashboard/dashboard.component';
import { SelectSeasonComponent }        from './component/select-season/select-season.component';

import { ApplicationRouteValidation }   from "./routeValidation/applicationRouteValidations";
import { AdminRouteValidation }         from "./routeValidation/adminRouteValidations";

import { CreateSeasonComponent }        from './component/create-season/create-season.component';
import { PlayersComponent }             from './component/players/players.component';
import { StudentServiceComponent }      from './component/student-service/student-service.component';
import { FileUploaderComponent }        from './component/file-uploader/file-uploader.component';
import { AllapplicationsComponent }     from './component/allapplications/allapplications.component';
import { AllgamesComponent }            from './component/allgames/allgames.component';
import { AllplayersComponent }          from './component/allplayers/allplayers.component';
import { CreategameComponent }          from './component/creategame/creategame.component';
import { MygamesComponent }             from './component/mygames/mygames.component';
import { PlayerstatComponent }          from './component/playerstat/playerstat.component';
import { ConfirmationComponent }        from './component/confirmation/confirmation.component';
import { AddstatComponent }             from './component/addstat/addstat.component';
import { PrintApplicationComponent }    from './component/print-application/print-application.component';

// import { AgmCoreModule }                from 'angular2-google-maps/core';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AdminRouteValidation]},
  { path: 'program', component: ProgramComponent },
  { path: 'application', component: ApplicationComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'addplayer', component: AddplayerComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'selectseason', component: SelectSeasonComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'createseason', component: CreateSeasonComponent, canActivate: [AdminRouteValidation] },
  { path: 'myplayers', component: PlayersComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'mygames', component: MygamesComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'thankyou', component: ConfirmationComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'players/all', component: AllplayersComponent, canActivate: [AdminRouteValidation] },
  { path: 'applications/all', component: AllapplicationsComponent, canActivate: [AdminRouteValidation] },
  { path: 'games/all', component: AllgamesComponent, canActivate: [AdminRouteValidation] },
  { path: 'creategame', component: CreategameComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'playerstat/:playerid', component: PlayerstatComponent, canActivate: [ApplicationRouteValidation] },
  { path: 'studentservice', component: StudentServiceComponent },
  { path: 'addgamestat', component: AddstatComponent, canActivate: [AdminRouteValidation] },
  { path: 'print/:applicationid', component: PrintApplicationComponent, canActivate: [AdminRouteValidation] },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
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
    FileUploaderComponent,
    AllapplicationsComponent,
    AllgamesComponent,
    AllplayersComponent,
    CreategameComponent,
    MygamesComponent,
    PlayerstatComponent,
    GalleryComponent,
    ConfirmationComponent,
    AddstatComponent,
    PrintApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCxxSvfy-1blN_DxcOHdlNtfvj6De1Z6h0'
    // })
  ],
  providers: [LoginService, ApplicationService, StatService, UploadService, GameService, ApplicationRouteValidation, AdminRouteValidation],
  bootstrap: [AppComponent]
})
export class AppModule { }
