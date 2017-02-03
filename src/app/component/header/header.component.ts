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
    let sub2: any = this._loginService.isLoggedIn$.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn, error => {/*console.log('Error: ', error)*/});
    // this._router.events.subscribe((val) => {
    //   var userToken = localStorage.getItem('token');
    //   var data      = {
    //     token: userToken
    //   };
    //   this._loginService.checkLogin(data).subscribe(data =>{
    //     console.log(data)
    //     if(data){
    //       console.log('hey')
    //       this.isLoggedIn = true;
    //     }
    //   }, error => {/*console.log('Error: ', error)*/});
    // });
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
