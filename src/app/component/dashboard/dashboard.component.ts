import { Component, OnInit }  from '@angular/core';
import { LoginService }       from '../../services'
import { ApplicationService } from '../../services'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAdmin       : boolean = false;
  subs          : any     = [];
  selectOptions : any     = [];
  seasons       : any     = [];
  isAppComplete : boolean = false;

  constructor(private _loginService: LoginService, private _applicationService: ApplicationService) {
    let sub1: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/})
    this.subs.push(sub1);
  }

  ngOnInit() {
    let seasonId = localStorage.getItem('seasonId');
    let schoolId = localStorage.getItem('schoolId');
    let userToken = localStorage.getItem('token');
    let data      = {
      token: userToken
    };
    this._loginService.checkLogin(data).subscribe(e=>{
      if(e[0].name == 'New York'){
        setTimeout(() => {
          this._loginService.setIsAdmin$(true);
        }, 0);
      }
    })
    this._applicationService.getApplication(schoolId, seasonId)
    .subscribe(
      data  => {
        if (data != 'No_Application_Found') {
          this.isAppComplete = true
        }
      },
      error => console.log('error',error)
    )
  }

}
