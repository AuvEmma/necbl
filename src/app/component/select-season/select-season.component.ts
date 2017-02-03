import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { ApplicationService }       from '../../services'
import { LoginService }             from '../../services'

declare var $:any;

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
  regions       : any     = [];

  constructor(private _loginService: LoginService, private _applicationService: ApplicationService) {
    let sub: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);
  }

  ngOnInit() {
    localStorage.removeItem('season');
    localStorage.removeItem('region');

    this._applicationService.getSeasons()
      .subscribe(
        data  => {
          if (Array.isArray(data)) this.seasons = data; this.regions = data.regions;
        },error => console.error('error',error)
      )
      window.setTimeout(()=>{
        this.selectOptions = []
      },50);
  }

  getRegions(){
    for (let i = 0; i < this.seasons.length; i++) {
        if (this.seasons[i].name === this.seasonName) {
            this.regions = this.seasons[i].regions
        };
    }
    $('select').material_select();
  }

}
