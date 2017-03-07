import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatService }            from '../../services';
import { GameService }            from '../../services'

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
  constructor(protected _route: ActivatedRoute, private _router:Router, private _statService: StatService, private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.getAllGames().subscribe(
      data => {
        if (data === 'No_Player_Found') {
          this.errorMessage = "No Games Avaliable";
        }else{
          console.log(data)
          this.games = data;
        }
      },
      error => console.error(error)
    )
    window.setTimeout(()=>{
      this.selectOptions = [];
    },500);

    // let sub = this._route.params.subscribe(params => {
    //   this.playerId = params['playerid'];
    // });
    // this.getPlayer(this.playerId);

  }

  getPlayer(playerid){
    this._statService.getPlayer(playerid).subscribe(
      data => this.player = data[0],
      error => console.error(error)
    )
  }

}
