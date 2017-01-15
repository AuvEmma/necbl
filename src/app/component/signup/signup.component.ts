import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { LoginService }      from '../../services'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  schoolName:string = '';
  passcode:string = '';

  constructor(private _loginService: LoginService, private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(e) {
    e.preventDefault();
    let data = {
      'schoolName': this.schoolName,
      'passcode'  : this.passcode
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
  Back(){
    this._router.navigateByUrl('/login');
  }
}
