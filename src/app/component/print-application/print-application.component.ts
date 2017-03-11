import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService }            from '../../services';

@Component({
  selector: 'app-print-application',
  templateUrl: './print-application.component.html',
  styleUrls: ['./print-application.component.css']
})
export class PrintApplicationComponent implements OnInit {

  constructor(protected _route: ActivatedRoute, private _router:Router, private _applicationService: ApplicationService) { }
  applicationid:string="";
  application:any={};
  errorMessage:string='';
  season:string='';
  region:string='';
  players:any=[];
  ngOnInit() {
    let sub = this._route.params.subscribe(params => {
      this.applicationid = params['applicationid'];
    });
    this._applicationService.printApplication(this.applicationid)
    .subscribe(
      data  => {
        if(data === 'No_Application_Found'){
          this.application = [];
        } else {
          this.application = data[0];
          this.season = this.application.season.name;
          this.region = this.application.region.name;
          this.players = this.application.players;
          // console.log(this.application, 'application')
        }
      },
      error => console.log('error',error)
    )
  }

}
