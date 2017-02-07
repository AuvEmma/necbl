import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { ApplicationService }       from '../../services';
import { Application }              from '../../models/application';

declare var $:any;

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  schoolId     : string  = '';
  schoolName   : string  = '';
  managerName  : string  = '';
  captainName  : string  = '';
  teamName     : string  = '';
  managerPhone : string  = '';
  captainPhone : string  = '';
  description  : string  = '';
  seasonId     : string  = '';
  regionId     : string  = '';
  players      : any     = [];

  constructor(private _applicationService: ApplicationService, private _router:Router) { }

  ngOnInit() {

    if(localStorage.getItem('seasonId') && localStorage.getItem('regionId')){
      this.seasonId = localStorage.getItem('seasonId');
      this.regionId = localStorage.getItem('regionId');
      this.schoolId = localStorage.getItem('schoolId');
      this.getPlayers(this.schoolId);
    }else{
      this._router.navigate(['/dashboard']);
    }
  }
  onSubmit(e){
    e.preventDefault();
    if(this.players.length < 5){
      alert('Not enough players!')
    }else{
      let data = new Application(this.schoolId,this.schoolName, this.managerName, this.captainName, this.teamName, this.managerPhone, this.captainPhone, this.description,this.seasonId,this.regionId,this.players)
      this._applicationService.createApplication(data)
      .subscribe(
        data  => {
          if (data.ok) {
              alert('Thank you for completing your application!')
          }else{
              alert('Please double check you entries and try again!')
          }
        },
        error => console.log('error',error)
      )

    }
  }

  getPlayers(schoolId){
    this._applicationService.getPlayers(schoolId)
      .subscribe(
        data  => {
          if(data === 'No_Player_Found'){
            this.players = [];
          } else {
            this.players = data;
          }
        },
        error => console.log('error',error)
      )
  }

  deletePlayer(e, playerId){
    this._applicationService.deletePlayer(playerId)
      .subscribe(
        data  => {
          this.getPlayers(this.schoolId);
        },
        error => console.log('error',error)
      )
  }
}
