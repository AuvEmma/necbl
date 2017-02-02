import { Component, OnInit }  from '@angular/core';
import { LoginService }       from '../../services'
import { Router }             from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any = null;

  constructor(private _loginService: LoginService, private _router:Router) {
  }

  ngOnInit() {

  }

  Logout(e){
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  }
}
