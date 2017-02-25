import { Component, OnInit }  from '@angular/core';
import { LoginService }       from '../../services'
import { ApplicationService } from '../../services'

declare var jQuery:any;

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
  }

  scrollToAnchor(aid: any) {
    setTimeout(() => {
      let aTag: any = jQuery("#" + aid);
      jQuery('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
    }, 100);
  }
}
