import { Component, OnInit, Inject }                                          from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }   from '@angular/router';
import { Observable }                                                         from 'rxjs/Observable';
import { LoginService }                                                       from '../services'

export class ApplicationRouteValidation implements CanActivate {
  private isLoggedIn: any = null;

  constructor( @Inject(Router) private _router:Router, @Inject(LoginService) private _loginService: LoginService) {}
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean {
      var userToken = localStorage.getItem('token');
      if (!userToken) {
        localStorage.removeItem('regionId');
        localStorage.removeItem('schoolId');
        localStorage.removeItem('seasonId');
        this._router.navigate(['/']);
        return false;
      }
      var data      = {
        token: userToken
      };
      if (userToken) {
        return this._loginService.checkLogin(data).map(e => {
          if(e === "No_School_Found"){
            this._loginService.setIsLoggedIn$(false);
            this._router.navigate(['/']);
            localStorage.removeItem('token');
            localStorage.removeItem('regionId');
            localStorage.removeItem('schoolId');
            localStorage.removeItem('seasonId');
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
