import { Component, OnInit, Inject }                                          from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }   from '@angular/router';
import { Observable }                                                         from 'rxjs/Observable';
import { LoginService }                                                       from '../services'

export class AdminRouteValidation implements CanActivate {
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
          if(e[0].name === 'New York'){
            return true
          }else{
            this._router.navigateByUrl('/dashboard');
            return false;
          }
        }).catch(() => {
          return Observable.of(false);
        })
      };

  };
}
