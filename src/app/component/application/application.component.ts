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
  regionName   : string  = '';
  seasonName   : string  = '';
  managerName  : string  = '';
  captainName  : string  = '';
  teamName     : string  = '';
  managerPhone : string  = '';
  captainPhone : string  = '';
  description  : string  = '';
  seasonId     : string  = '';
  regionId     : string  = '';
  players      : any     = [];
  season       : any     = {};
  region       : any     = {};
  school       : any     = {};
  errorMessage : string  = '';

  constructor(private _applicationService: ApplicationService, private _router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('seasonId') && localStorage.getItem('regionId')){
      this.seasonId = localStorage.getItem('seasonId');
      this.regionId = localStorage.getItem('regionId');
      this.schoolId = localStorage.getItem('schoolId');
      this.seasonName = localStorage.getItem('seasonName');
      this.regionName = localStorage.getItem('regionName');
      this.schoolName = localStorage.getItem('schoolName');

      this.season['id'] = this.seasonId;
      this.season['name'] = this.seasonName;
      this.region['id'] = this.regionId;
      this.region['name'] = this.regionName;
      this.school['id'] = this.schoolId;
      this.school['name'] = this.schoolName;
      this.getPlayers(this.schoolId);
    }else{
      this._router.navigate(['/dashboard']);
    }
    this._applicationService.getApplication(this.schoolId, this.seasonId)
    .subscribe(
      data  => {
        if (data != 'No_Application_Found') {
          this._router.navigateByUrl('/dashboard')
        }
      },
      error => console.log('error',error)
    )
  }
  onSubmit(e){
    e.preventDefault();
    if(this.players.length < 5){
      this.errorMessage = 'Not enough players!'
    }else{
      let valueArr = this.players.map(function(item){ return item.number });
      let isDuplicate = valueArr.some(function(item, idx){
          return valueArr.indexOf(item) != idx
      });
      console.log(isDuplicate);
      if(isDuplicate){
        this.errorMessage = 'Duplicate Player numbers detected! 单次申请中球员号码不能重复！'
        return
      }else if(this.description.length < 150){
        this.errorMessage = 'Please enter at least 150 characters in description!'
        return
      }
      let data = new Application(this.schoolId,this.schoolName, this.managerName, this.captainName, this.teamName, this.managerPhone, this.captainPhone, this.description,this.season,this.region,this.players)
      this._applicationService.createApplication(data)
      .subscribe(
        data  => {
          if (data.ok) {
              alert('Thank you for completing your application!')
              this._router.navigateByUrl('/dashboard');
          }else{
            this.errorMessage = 'Please double check you entries and try again!'
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
    for (let i = 0; i < this.players.length; i++) {
        if(this.players[i]._id === playerId){
          this.players.splice(i,1);
        }
    }
  }

//   deletePlayer(e, playerId){
//     this._applicationService.deletePlayer(playerId)
//       .subscribe(
//         data  => {
//           this.getPlayers(this.schoolId);
//         },
//         error => console.log('error',error)
//       )
//   }
}
