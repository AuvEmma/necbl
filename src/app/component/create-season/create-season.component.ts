import { Component, OnInit }       from '@angular/core';
import { Router }                  from '@angular/router';
import { ApplicationService }      from '../../services';
import { LoginService }             from '../../services'

declare var $:any;

@Component({
  selector: 'app-create-season',
  templateUrl: './create-season.component.html',
  styleUrls: ['./create-season.component.css']
})
export class CreateSeasonComponent implements OnInit {
  seasonName:string     = '';
  regionName:string     = '';
  subs:any              = [];
  regions:any           = [];
  seasons:any           = [];
  selectedRegions:any   = [];
  selected:any          = {};
  isAdmin :boolean      = false;

  constructor(private _applicationService: ApplicationService, private _router:Router, private _loginService: LoginService) {
    let sub: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);
  }

  ngOnInit() {
    let userToken = localStorage.getItem('token');
    let data      = {
      token: userToken
    };
    this._loginService.checkLogin(data).subscribe(e=>{
      if(e[0].name != 'New York'){
        this._router.navigateByUrl('/dashboard')
      }
    })
    $('.modal').modal();
    this.getRegions();
  }

  getRegions(){
    this._applicationService.getRegions()
      .subscribe(
        data => {
          if (Array.isArray(data)) {
            this.regions = data
          }
        },
        error => console.log('error',error)
      )
  }

  addRegion(e){
    e.preventDefault();
    let data = {
      'regionName': this.regionName,
    }
    this._applicationService.createRegion(data)
      .subscribe(
        data  => {
          this.regionName = '';
          // this.getRegions();
        },
        error => console.log('error',error)
      )
  }

  deleteRegion(e, _id){
    e.preventDefault();
    let data = {
      '_id': _id
    }
    this._applicationService.deleteRegion(data)
      .subscribe(
        data  => {
          this.getRegions();
        },
        error => console.log('error',error)
      )
  }

  selectRegion(e, _id){
    e.preventDefault();
    for (let i = 0; i < this.regions.length; i++) {
        if(this.regions[i]._id == _id){
            this.selectedRegions.push(this.regions[i])
            this.selected[_id] = true;
            console.log(this.selected)
            // $('#'+_id).prop('disabled', true);
        }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let data = {
      'seasonName': this.seasonName,
      'regions': this.selectedRegions
    }
    console.log(data)
    this._applicationService.createSeason(data)
      .subscribe(
        data  => {
          this.seasonName = '';
          this._router.navigate(['/selectseason']);
        },
        error => console.log('error',error)
      )
  }

}
