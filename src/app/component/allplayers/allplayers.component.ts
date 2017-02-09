import { Component, OnInit } from '@angular/core';
import { Router }                   from '@angular/router';
import { ApplicationService }       from '../../services';

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
          }
        },
        error => console.log('error',error)
      )
  }

}
