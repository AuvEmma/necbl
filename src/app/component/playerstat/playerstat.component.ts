import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatService }            from '../../services';

@Component({
  selector: 'app-playerstat',
  templateUrl: './playerstat.component.html',
  styleUrls: ['./playerstat.component.css']
})
export class PlayerstatComponent implements OnInit {
  playerId:string = '';
  player:any = null;

  constructor(protected _route: ActivatedRoute, private _router:Router, private _statService: StatService) { }

  ngOnInit() {
    let sub = this._route.params.subscribe(params => {
      this.playerId = params['playerid'];
    });
    this.getPlayer(this.playerId);
  }

  getPlayer(playerid){
    this._statService.getPlayer(playerid).subscribe(
      data => {this.player = data[0];console.log(data)},
      error => console.error(error)
    )
  }

}
