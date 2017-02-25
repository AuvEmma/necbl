import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatService }            from '../../services';
declare var $:any;

@Component({
  selector: 'app-playerstat',
  templateUrl: './playerstat.component.html',
  styleUrls: ['./playerstat.component.css']
})
export class PlayerstatComponent implements OnInit {
  playerId:string = '';
  player:any = null;
  selectOptions : any     = [];

  constructor(protected _route: ActivatedRoute, private _router:Router, private _statService: StatService) { }

  ngOnInit() {
    let sub = this._route.params.subscribe(params => {
      this.playerId = params['playerid'];
    });
    this.getPlayer(this.playerId);
    window.setTimeout(()=>{
      $('select').material_select();
    },500);
  }

  getPlayer(playerid){
    this._statService.getPlayer(playerid).subscribe(
      data => this.player = data[0],
      error => console.error(error)
    )
  }

}
