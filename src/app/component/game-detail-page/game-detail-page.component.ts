import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService }            from '../../services'

@Component({
  selector: 'app-game-detail-page',
  templateUrl: './game-detail-page.component.html',
  styleUrls: ['./game-detail-page.component.css']
})
export class GameDetailPageComponent implements OnInit {

  constructor(protected _route: ActivatedRoute, private _gameService: GameService) { }
  gameid:string = '';
  gameData:any = {};
  errorMessage:string ='';
  ngOnInit() {
    let sub = this._route.params.subscribe(params => {
      this.gameid = params['gameid'];
      this.getGame(this.gameid);
    });

  }
  getGame(gameId){
    this._gameService.getSingleGame(gameId).subscribe(
      data => {
        this.gameData = data[0];
      },
      error => {
        console.log(error),
        this.errorMessage = 'No game detail found!'
      }
    )
  }
}
