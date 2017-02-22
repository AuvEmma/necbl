import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { LoginService }      from '../../services'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  schoolName:string = '';
  passcode:string   = '';

  constructor(private _loginService: LoginService, private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(e) {
    e.preventDefault();
    let data = {
      'schoolName': this.schoolName,
      'passcode'  : this.passcode,
      'canChangePassword': false
    }
    this._loginService.createUser(data)
      .subscribe(
        data  => {
          alert('Successful!')
          this.schoolName = '';
          this.passcode   = '';
        },
        error => console.log('error',error)
      )
  }

}
