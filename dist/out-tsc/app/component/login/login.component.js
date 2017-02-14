var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services';
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router) {
        var _this = this;
        this._loginService = _loginService;
        this._router = _router;
        this.isSignupShow = true;
        this.schools = [];
        this.isLoggedin = false;
        this.schoolName = '';
        this.passcode = '';
        this.selectOptions = [];
        this.isAdmin = false;
        this.subs = [];
        var sub = this._loginService.isAdmin$.subscribe(function (isAdmin) { return _this.isAdmin = isAdmin; }, function (error) { });
        this.subs.push(sub);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var data = {
            token: userToken
        };
        this._loginService.checkLogin(data).subscribe(function (e) {
            if (e[0]) {
                _this._router.navigateByUrl('/dashboard');
            }
        });
        this._loginService.getUsers()
            .subscribe(function (data) { return _this.schools = data; }, function (error) { return console.error('error', error); });
        window.setTimeout(function () {
            _this.selectOptions = [];
        }, 500);
    };
    LoginComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var data = {
            'schoolName': this.schoolName,
            'passcode': this.passcode
        };
        this._loginService.login(data)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('schoolId', data.id);
            localStorage.setItem('schoolName', data.name);
            _this._loginService.setIsLoggedIn$(true);
            _this._loginService.setuserInfo$(data);
            if (data.name === "New York") {
                _this._loginService.setIsAdmin$(true);
            }
            _this._router.navigateByUrl('/dashboard');
        }, function (error) {
            console.error('error', error);
            alert('Authentication Failed!!');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [LoginService, Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../../src/app/component/login/login.component.js.map