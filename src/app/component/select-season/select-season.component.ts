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
  seasons          : any     = [];
  seasonId         : string  = '';
  regionId         : string  = '';
  schoolId         : string  = '';
  seasonName    : string  = '';
  regionName    : string  = '';
  selectOptions : any     = [];
  isAdmin       : boolean = true;
  subs          : any     = [];
  regions       : any     = [];
  errorMessage  : string  = '';
  constructor(private _loginService: LoginService, private _applicationService: ApplicationService, private _router:Router) {
    let sub: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);
  }

  ngOnInit() {
    localStorage.removeItem('seasonId');
    localStorage.removeItem('regionId');

    this._applicationService.getSeasons()
      .subscribe(
        data  => {
          if (Array.isArray(data)) this.seasons = data; this.regions = data.regions;
        },error => console.error('error',error)
      )
      window.setTimeout(()=>{
        $('select').material_select();
      },500);
  }

  getRegions(){
    for (let i = 0; i < this.seasons.length; i++) {
        if (this.seasons[i]._id === this.seasonId && this.seasons[i].regions) {
            this.regions = this.seasons[i].regions
        };
    }
    window.setTimeout(()=>{
      $('select').material_select();
    },500);
  }

  Next(e){
    e.preventDefault();
    localStorage.setItem('seasonId', this.seasonId);
    localStorage.setItem('regionId', this.regionId);
    this.schoolId = localStorage.getItem('schoolId');

    this._applicationService.getApplication(this.schoolId, this.seasonId)
    .subscribe(
      data  => {
        if (data === 'No_Application_Found') {
          for (let i = 0; i < this.seasons.length; i++) {
              if (this.seasons[i]._id === this.seasonId) {
                  localStorage.setItem('seasonName', this.seasons[i].name);
              };
          }
          for (let i = 0; i < this.regions.length; i++) {
              if (this.regions[i]._id === this.regionId) {
                  localStorage.setItem('regionName', this.regions[i].name);
              };
          }

          this._router.navigateByUrl('/application')

        }else{
          console.log(data)
          this.errorMessage = `You have already applied for ${data[0].season.name}!`
          // localStorage.removeItem('regionId');
          // localStorage.removeItem('regionName');
          // localStorage.removeItem('seasonName');
          // localStorage.removeItem('seasonId');
          //
          //
          // this._router.navigateByUrl('/dashboard')
        }
      },
      error => console.log('error',error)
    )

  }

}
