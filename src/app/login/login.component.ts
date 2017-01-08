import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignupShow:boolean = true;

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

  }

  SignupPage(){
    this._router.navigate(['/signup']);
  }
}
