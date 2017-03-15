import { Component, OnInit } from '@angular/core';
import { Router }                   from '@angular/router';
import { ApplicationService }       from '../../services';
declare var $:any;
@Component({
  selector: 'app-allplayers',
  templateUrl: './allplayers.component.html',
  styleUrls: ['./allplayers.component.css']
})
export class AllplayersComponent implements OnInit {
  players     : any     = [];
  schoolId    : string  = '';

  constructor(private _applicationService: ApplicationService, private _router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('schoolId')){
      this.schoolId = localStorage.getItem('schoolId');
      this.getPlayers(this.schoolId);
      window.setTimeout(()=>{
        $('.modal').modal();
      },500);

    }else{
      this._router.navigate(['/dashboard']);
    }
  }

  getPlayers(schoolId){
    this._applicationService.allPlayers()
      .subscribe(
        data  => {
          if(data === 'No_Player_Found'){
            this.players = [];
          } else {
            this.players = data;
            $('.modal').modal();
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
            $('#modal').modal('close');
          },
          error => console.log('error',error)
        )
    }
}
