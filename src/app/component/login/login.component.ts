import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { LoginService }       from '../../services';

declare var $:any;

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
  isAdmin       : boolean = false;
  subs          : any     = [];
  errorMessage  : string  = '';
  constructor(private _loginService: LoginService, private _router:Router) {
    let sub: any = this._loginService.isAdmin$.subscribe(isAdmin => this.isAdmin = isAdmin, error => {/*console.log('Error: ', error)*/});
    this.subs.push(sub);
  }

  ngOnInit() {
    let userToken = localStorage.getItem('token');
    let data      = {
      token: userToken
    };
    this._loginService.checkLogin(data).subscribe(e=>{
      if(e[0]){
        this._router.navigateByUrl('/dashboard')
      }
    })
    this._loginService.getUsers()
      .subscribe(
        data  => {
          if (data != 'No_School_Found') {
            window.setTimeout(()=>{
              this.schools = data;
            },500);
          }else{
            this.errorMessage = 'No School Found!'
          }

        },
        error => console.error('error',error)
      )
    // window.setTimeout(()=>{
    //   $('select').material_select();
    //   this.selectOptions = []
    // },500);
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
        localStorage.setItem('token', data.token);
        localStorage.setItem('schoolId', data.id);
        localStorage.setItem('schoolName', data.name);

        this._loginService.setIsLoggedIn$(true);
        this._loginService.setuserInfo$(data)
        if(data.name === "New York"){
          this._loginService.setIsAdmin$(true);
        }
        // TODO: implement change password function
        // if(data.canChangePassword){
        //   this._router.navigateByUrl('/signup');
        // }else{
          this._router.navigateByUrl('/dashboard');
        // }
      },
      error => {
        console.error('error',error);
        alert('Authentication Failed!!');
      }
    )

  }
}
