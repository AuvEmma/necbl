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
  isLoggedIn: any = null;

  constructor(private _loginService: LoginService, private _router:Router) {
    let sub: any = this._loginService.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);
  }

  ngOnInit() {
    $(".button-collapse").sideNav();
  }

  Logout(e){
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    this._loginService.setIsLoggedIn$(false)
  }
}
