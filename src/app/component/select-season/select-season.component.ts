import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { ApplicationService }       from '../../services'
import { LoginService }             from '../../services'

@Component({
  selector: 'app-select-season',
  templateUrl: './select-season.component.html',
  styleUrls: ['./select-season.component.css']
})
export class SelectSeasonComponent implements OnInit {
  isCreateBtnShow  : boolean = true;
  seasons       : any     = [];
  seasonName    : string  = '';
  selectOptions : any     = [];
  isAdmin       : boolean = true;
  subs          : any     = [];

  constructor(private _loginService: LoginService, private _applicationService: ApplicationService) {
    let sub: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);
  }

  ngOnInit() {
    this._applicationService.getSeasons()
      .subscribe(
        data  => {this.seasons = data; console.log(this.seasons)},
        error => alert('No Season Found!')
      )
      window.setTimeout(()=>{
        this.selectOptions = []
      },50);
  }

}
