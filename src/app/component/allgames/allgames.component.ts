import { Component, OnInit } from '@angular/core';
import { Router }                  from '@angular/router';
import { ApplicationService }      from '../../services';
import { LoginService }             from '../../services'
import { GameService }             from '../../services'

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.css']
})
export class AllgamesComponent implements OnInit {
  games:any = [];
  errorMessage:string='';

  constructor(private _applicationService: ApplicationService, private _router:Router, private _loginService: LoginService, private _gameService: GameService) {
  }
  ngOnInit() {
    this._gameService.getAllGames().subscribe(
      data => {
        if (data === 'No_Player_Found') {
          this.errorMessage = "No Games Avaliable";
        }else{
          this.games = data
        }
      },
      error => console.error(error)
    )
  }

}
