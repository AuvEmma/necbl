import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { LoginService }       from '../../services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignupShow  : boolean = true;
  schools       : any     = [];
  isLoggedin    : boolean = false;
  schoolName    : string  = '';
  passcode      : string  = '';
  selectOptions : any     = [];

  constructor(private _loginService: LoginService, private _router:Router) { }

  ngOnInit() {
    this._loginService.getUsers()
      .subscribe(
        data  => this.schools = data,
        error => console.error('error',error)
      )
      window.setTimeout(()=>{
        this.selectOptions = []
      },0);
  }

  onSubmit(e){
    e.preventDefault();
    let data = {
      'schoolName': this.schoolName,
      'passcode'  : this.passcode
    }

    this._loginService.login(data)
    .subscribe(
      data  => {
        console.log('data', data)
        localStorage.setItem('token', data.token);
        this.isLoggedin = true;
        this._router.navigateByUrl('/application')
      },
      error => {
        console.error('error',error);
        alert('Authentication Failed!!')
      }
    )

  }

  SignupPage(){
    this._router.navigate(['/signup']);
  }
}
