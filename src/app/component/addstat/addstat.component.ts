import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatService }            from '../../services';

@Component({
  selector: 'app-addstat',
  templateUrl: './addstat.component.html',
  styleUrls: ['./addstat.component.css']
})
export class AddstatComponent implements OnInit {
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
      data => this.player = data[0],
      error => console.error(error)
    )
  }

}
