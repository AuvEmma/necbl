import { Component, OnInit } from '@angular/core';
import { Router }                  from '@angular/router';
import { ApplicationService }      from '../../services';
import { LoginService }             from '../../services'
import { GameService }             from '../../services'

@Component({
  selector: 'app-mygames',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.css']
})
export class MygamesComponent implements OnInit {
  games:any = [];
  errorMessage:string='';
  constructor(private _applicationService: ApplicationService, private _router:Router, private _loginService: LoginService, private _gameService: GameService) {
  }
  ngOnInit() {
    let schoolId = localStorage.getItem('schoolId');
    if(!schoolId){
      localStorage.clear();
      alert('please login again!');
      this._router.navigateByUrl('/login');
    }
    this._gameService.getMyGames(schoolId).subscribe(
      data => {
        if (data === 'No_Game_Found') {
          this.errorMessage = "No Games Avaliable";
        }else{
          this.games = data
        }
      },
      error => console.error(error)
    )
  }

}
