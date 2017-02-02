import { Component, OnInit, Inject }                                          from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }   from '@angular/router';
import { Observable }                                                         from 'rxjs/Observable';
import { LoginService }                                                       from '../services'

export class ApplicationRouteValidation implements CanActivate {
  private isLoggedIn: any = null;

  constructor( @Inject(Router) private _router:Router, @Inject(LoginService) private _loginService: LoginService) {}
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean {
      var userToken = localStorage.getItem('token');
      var data      = {
        token: userToken
      };
      if (userToken) {
        return this._loginService.checkLogin(data).map(e => {
          if(e === "No School Found"){
            this._router.navigate(['/']);
            this._loginService.setIsLoggedIn$(false);
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            return false;
          }
          else{
            return true;
          }
        }).catch(() => {
          return Observable.of(false);
        })
      };

  };
}
