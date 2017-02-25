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
  awayId:string         = '';
  homeId:string          = '';
  home:any              = '';
  selectOptions : any   = [];
  date:any              ='';

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

  onSubmit(e){
    e.preventDefault();
    if(this.home === this.away) {
      alert('Home and Away can not be the same!');
      return;
    }
    for (let i = 0; i < this.allSchools.length; i++) {
        if(this.allSchools[i].name === this.home){
          this.homeId = this.allSchools[i]._id;
        }else if(this.allSchools[i].name === this.away){
          this.awayId = this.allSchools[i]._id;
        }
    }
    this.date = $('.datepicker').val()
    let teams = [this.home, this.away];
    let ids   = [this.homeId, this.awayId];
    let game ={
      schoolIds: ids,
      schoolNames: teams,
      home: this.home,
      away: this.away,
      date: this.date,
      time: this.time,
      season: this.season,
      region: this.region,
      ref: this.refs,
      location: this.location
    }
    this._gameService.createGame(game).subscribe(
      data => {alert('Success!');this._router.navigateByUrl('/dashboard')},
      error => console.error(error)
    )
  }

}
