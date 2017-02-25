import { Component, OnInit } from '@angular/core';
import { Router }                   from '@angular/router';
import { ApplicationService }       from '../../services';

@Component({
  selector: 'app-allapplications',
  templateUrl: './allapplications.component.html',
  styleUrls: ['./allapplications.component.css']
})
export class AllapplicationsComponent implements OnInit {
  applications     : any     = [];

  constructor(private _applicationService: ApplicationService, private _router:Router) { }

  ngOnInit() {
    this.getAllApplications()
  }

  getAllApplications(){
    this._applicationService.getAllApplications()
      .subscribe(
        data  => {
          if(data === 'No_Application_Found'){
            this.applications = [];
          } else {
            this.applications = data;
          }
        },
        error => console.log('error',error)
      )
  }

}
