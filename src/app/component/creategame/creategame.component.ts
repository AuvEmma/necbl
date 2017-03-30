import { Component, OnInit } from '@angular/core';
import { ApplicationService }      from '../../services';
import { LoginService }             from '../../services'
import { Router }                  from '@angular/router';
import { GameService }      from '../../services';
declare var $:any;

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css']
})
export class CreategameComponent implements OnInit {
  subs:any              = [];
  isAdmin :boolean      = false;
  allSchools:any        = [];
  teams: any            = [];
  location: string      = '';
  time:any              = '';
  refs:any              = [];
  refName:any           = '';
  refNumber:any         = '';
  refEmail:any          = '';
  seasons:any           = []
  regions:any           = []
  season:any            = '';
  region:any            = '';
  away:any              = '';
  awayName:string         = '';
  homeName:string         = '';
  home:any              = '';
  homePlayers:any       = []
  awayPlayers:any       = []
  selectOptions : any   = [];
  date:any              ='';
  errorMessage:string   ='';
  seasonName:string     ='';
  homeErr:string        ='';
  awayErr:string        ='';


  constructor(private _gameService: GameService, private _applicationService: ApplicationService, private _router:Router, private _loginService: LoginService) {
    let sub: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);

  }

  ngOnInit() {
    let userToken = localStorage.getItem('token');
    if (!userToken){
      this._router.navigateByUrl('/dashboard')
    }
    let data      = {
      token: userToken
    };
    this._loginService.checkLogin(data).subscribe(e=>{
      if(e[0].name != 'New York'){
        this._router.navigateByUrl('/dashboard')
      }
    })
    $('.modal').modal();

    this._loginService.getUsers().subscribe(
      data => this.allSchools = data,
      error => console.error(error)
    );
    this._applicationService.getRegions().subscribe(
      data => this.regions = data,
      error => console.error(error)
    )
    this._applicationService.getSeasons().subscribe(
      data => this.seasons = data,
      error => console.error(error)
    )
    window.setTimeout(()=>{
      this.selectOptions = [];
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 5 // Creates a dropdown of 15 years to control year
      });
    },500);
  }

  addRef(e){
    e.preventDefault();
    let ref = {
      name: this.refName,
      number: this.refNumber,
      email: this.refEmail
    }
    this.refs.push(ref)
  }

  onChange(){
    if(this.home && this.season){
      this._applicationService.getApplication(this.home, this.season).subscribe(
        data => {
          if(data === 'No_Application_Found'){
            this.homeErr = 'Home Application Not Found!'
          }else{
            this.homeErr = '';
            this.homePlayers = data[0].players;
          }
        },
        error => console.error(error)
      )
    }
    if(this.away && this.season){
      this._applicationService.getApplication(this.away, this.season).subscribe(
        data => {
          if(data === 'No_Application_Found'){
            this.awayErr = 'Away Application Not Found!'
          }else{
            this.awayErr = '';
            this.awayPlayers = data[0].players;
          }
        },
        error => console.error(error)
      )
    }
  }

  onSubmit(e){
    e.preventDefault();
    if(this.home === this.away) {
      this.errorMessage = 'Home and Away can not be the same!';
      return;
    }else if(!this.homePlayers.length || !this.awayPlayers.length ){
      this.errorMessage = 'Players missing for home players or away players';
      return;
    }
    for (let i = 0; i < this.allSchools.length; i++) {
        if(this.allSchools[i]._id === this.home){
          this.homeName = this.allSchools[i].name;
        }else if(this.allSchools[i]._id === this.away){
          this.awayName = this.allSchools[i].name;
        }
    }
    for (let i = 0; i < this.seasons.length; i++) {
      if(this.seasons[i]._id === this.season){
        this.seasonName = this.seasons[i].name
      }
    }

    this.date = $('.datepicker').val()
    let teams = [this.homeName, this.awayName];
    let ids   = [this.home, this.away];
    let game ={
      schoolIds: ids,
      schoolNames: teams,
      home: {
        name: this.homeName,
        id: this.home
      },
      away: {
        name: this.awayName,
        id: this.away
      },
      date: this.date,
      time: this.time,
      season: {
        name:this.seasonName,
        id: this.season
      },
      region: this.region,
      ref: this.refs,
      location: this.location,
      homeplayers: this.homePlayers,
      awayplayers: this.awayPlayers
    }
    this._gameService.createGame(game).subscribe(
      data => {alert('Success!');this._router.navigateByUrl('/dashboard')},
      error => console.error(error)
    )
  }

}
