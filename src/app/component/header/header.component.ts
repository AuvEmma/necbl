import { Component, OnInit }  from '@angular/core';
import { LoginService }       from '../../services'
import { Router }             from '@angular/router';


declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subs: any = [];
  isLoggedIn: boolean = false;
  isAdmin   : boolean = false;
  userInfo  : any     = {};
  constructor(private _loginService: LoginService, private _router:Router) {
    let sub1: any = this._loginService.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn, error => {/*console.log('Error: ', error)*/});
    let sub2: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/})
    let sub3: any = this._loginService.userInfo$.subscribe(userInfo => this.userInfo = userInfo, error => {/*console.log('Error: ', error)*/})
    this.subs.push(sub1);
    this.subs.push(sub2);
    this.subs.push(sub3);

  }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

  Logout(e){
    e.preventDefault();
    localStorage.removeItem('schoolId');
    localStorage.removeItem('token');
    localStorage.removeItem('seasonId');
    localStorage.removeItem('regionId');

    this._loginService.setIsLoggedIn$(false);
    this._loginService.setIsAdmin$(false);
    this._loginService.setuserInfo$({});
  }
}
