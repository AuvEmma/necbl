import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { ApplicationService }       from '../../services';

declare var $:any;

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  seasonId    : string  = '';
  regionId    : string  = '';
  players     : any     = [];
  schoolId    : string  = '';

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
    if(this.players.length < 6){
      alert('Not enough players!')
    }else{

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
