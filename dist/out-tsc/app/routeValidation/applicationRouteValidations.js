var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services';
var ApplicationRouteValidation = (function () {
    function ApplicationRouteValidation(_router, _loginService) {
        this._router = _router;
        this._loginService = _loginService;
        this.isLoggedIn = null;
    }
    ApplicationRouteValidation.prototype.canActivate = function (route, state) {
        var _this = this;
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            localStorage.removeItem('regionId');
            localStorage.removeItem('schoolId');
            localStorage.removeItem('seasonId');
            this._router.navigate(['/']);
            return false;
        }
        var data = {
            token: userToken
        };
        if (userToken) {
            return this._loginService.checkLogin(data).map(function (e) {
                if (e === "No_School_Found") {
                    _this._loginService.setIsLoggedIn$(false);
                    _this._router.navigate(['/']);
                    localStorage.removeItem('token');
                    localStorage.removeItem('regionId');
                    localStorage.removeItem('schoolId');
                    localStorage.removeItem('seasonId');
                    return false;
                }
                else {
                    return true;
                }
            }).catch(function () {
                return Observable.of(false);
            });
        }
        ;
    };
    ;
    return ApplicationRouteValidation;
}());
ApplicationRouteValidation = __decorate([
    __param(0, Inject(Router)), __param(1, Inject(LoginService)),
    __metadata("design:paramtypes", [Router, LoginService])
], ApplicationRouteValidation);
export { ApplicationRouteValidation };
//# sourceMappingURL=../../../../src/app/routeValidation/applicationRouteValidations.js.map