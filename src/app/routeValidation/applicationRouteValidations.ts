import { Component, OnInit, Inject }                                          from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class ApplicationRouteValidation implements CanActivate {
  constructor( @Inject(Router) private _router:Router) {}
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean {
    try {
      var userToken = localStorage.getItem('token');
      if (userToken) {
        return true
      } else {
        this._router.navigate(['/']);
        return false;
      }
    } catch (e) {
      this._router.navigate(['/']);
    }
  }
}
