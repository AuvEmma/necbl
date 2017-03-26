import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatService }            from '../../services';
import { GameService }            from '../../services'

declare var $:any;

@Component({
  selector: 'app-addstat',
  templateUrl: './addstat.component.html',
  styleUrls: ['./addstat.component.css']
})
export class AddstatComponent implements OnInit {
  playerId:string     = '';
  gameId:string       = '';
  game:string         = '';
  player:any          = null;
  selectOptions : any = [];
  games:any           =[];
  errorMessage:string ='';
  gameData:any        =[];

  PTS:number          = 0;
  FGM:number          = 0;
  FGA:number          = 0;
  ThreePM:number      = 0;
  ThreePA:number      = 0;
  FTM:number          = 0;
  FTA:number          = 0;
  AST:number          = 0;
  BLK:number          = 0;
  STL:number          = 0;
  PF:number          = 0;
  homeScore:number = 0;
  awayScore:number = 0;
  constructor(protected _route: ActivatedRoute, private _router:Router, private _statService: StatService, private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getAllGames().subscribe(
      data => {
        if (data === 'No_Game_Found') {
          this.errorMessage = "No Games Avaliable";
        }else{
          this.games = data;
        }
      },
      error => console.error(error)
    )
    window.setTimeout(()=>{
      this.selectOptions = [];
      $('.collapsible').collapsible();
    },500);

    // let sub = this._route.params.subscribe(params => {
    //   this.playerId = params['playerid'];
    // });
    // this.getPlayer(this.playerId);

  }
  getPlayerForGame(gameId){
    this._gameService.getSingleGame(gameId).subscribe(
      data => {
        this.gameData = data[0];console.log(this.gameData);
        window.setTimeout(()=>{
          // this.selectOptions = [];
          $('.collapsible').collapsible();
        },500);
      } ,
      error => console.error(error)
    )
  }
  getPlayer(playerid){
    this._statService.getPlayer(playerid).subscribe(
      data => this.player = data[0],
      error => console.error(error)
    )
  }

  onSubmit(game, player, index, team){
    let data = {
      game: game,
      player: player
    }
    let stat = {
      game: game,
      player: player,
      PTS:this.PTS,
      FGM:this.FGM,
      FGA:this.FGA,
      ThreePM:this.ThreePM,
      ThreePA:this.ThreePA,
      FTM:this.FTM,
      FTA:this.FTA,
      AST:this.AST,
      PF:this.PF,
      STL:this.STL,
      BLK:this.BLK,
    }

    console.log(stat, index, team);
    this.addGameandStatToplayer(stat,index,team);
    this.updateGame(stat, index, team)
  }

  updateGame(stat, index, team){
    let data = {
      stat: stat,
      index: index,
      team: team
    }
    this._statService.addStatToGame(data).subscribe(
      data => {
        if(data.ok){
          // $('#'+stat.player._id).addClass('disabled');
          // $('#'+stat.player._id).html('Already submitted');
        }
      },
      error => console.error(error)
    )
  }
  addGameandStatToplayer(stat, index, team){
    let data = {
      stat: stat,
      index: index,
      team: team
    }
    this._statService.addStatToPlayer(data).subscribe(
      data => {
        if(data.ok){
          $('#'+stat.player._id).addClass('disabled');
          $('#'+stat.player._id).html('Already submitted');
        }
      },
      error => console.error(error)
    )
  }
  submitScore(gameData){
    let data = {
      game: gameData,
      score : {
        homeScore : this.homeScore,
        awayScore : this.awayScore
      }
    }
    this._statService.addScore(data).subscribe(
      data => console.log(data),
      error => console.log(data)
    )

  }
}
