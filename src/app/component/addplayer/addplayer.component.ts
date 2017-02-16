import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { Player }                   from '../../models/player';
import { ApplicationService }       from '../../services';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})


export class AddplayerComponent implements OnInit {
  seasonId: string;
  regionId: string;
  schoolId: any = [];
  name      : string;
  grade     : string;
  position  : string;
  number    : number;
  email     : string;
  height    : string;
  school    : any = {};
  season    : any = {};
  region    : any = {};
  seasonshistory: any =[];
  regionshistory: any =[];
  gameshistory: any =[];
  schoolshistory: any =[];

  photo?    : string;
  selectOptions : any = [];
  seasonName: string;
  regionName: string;
  schoolName: string;
  errorMessage:string;

  constructor(private _applicationService: ApplicationService, private _router:Router) {}

  ngOnInit() {
    if(localStorage.getItem('seasonId') && localStorage.getItem('regionId') && localStorage.getItem('schoolId')){
      this.seasonId = localStorage.getItem('seasonId');
      this.regionId = localStorage.getItem('regionId');
      this.schoolId = localStorage.getItem('schoolId')
      this.seasonName = localStorage.getItem('seasonName');
      this.regionName = localStorage.getItem('regionName');
      this.schoolName = localStorage.getItem('schoolName')

    }else{
      this._router.navigate(['/dashboard']);
    }

    this._applicationService.getApplication(this.schoolId, this.seasonId)
    .subscribe(
      data  => {
        if (data != 'No_Application_Found') {
          this._router.navigateByUrl('/dashboard')
        }
      },
      error => console.log('error',error)
    )

  }

  onSubmit(e){
    e.preventDefault();
    this.season['id']= this.seasonId;
    this.region['id']=this.regionId;
    this.school['id']=this.schoolId;
    this.season['name']= this.seasonName;
    this.region['name']=this.regionName;
    this.school['name']=this.schoolName;

    this.seasonshistory.push(this.season);
    this.regionshistory.push(this.region);
    this.schoolshistory.push(this.school);

    let data = new Player(this.name, this.grade, this.position, this.number, this.email, this.height, this.school, this.season, this.region, this.seasonshistory, this.regionshistory, [], this.schoolshistory)
    this._applicationService.createPlayer(data)
      .subscribe(
        data  => {
          if (data.ok) {
              this._router.navigateByUrl('/application')
            // this.name      ='';
            // this.grade     ='';
            // this.position  ='';
            // this.number    = undefined;
            // this.email     ='';
            // this.height    ='';
            // this.school    ={};
            // this.season    ={};
            // this.region    ={};
          } else {
            this.errorMessage = 'Server Error! Please Check Your Entries.'
          }
        },
        error => console.log('error',error)
      )
  }

}
