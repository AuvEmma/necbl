var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { environment } from '../../environments';
var LoginService = (function () {
    function LoginService(_http) {
        var _this = this;
        this._http = _http;
        this.schoolName = null;
        this.passcode = null;
        this.subs = [];
        var userToken = localStorage.getItem('token');
        var data = {
            token: userToken
        };
        this._isLoggedIn$ = new Subject();
        this._isAdmin$ = new Subject();
        this._userInfo$ = new Subject();
        this.checkLogin(data).subscribe(function (e) {
            _this._userInfo$.next(e[0]);
            _this._isLoggedIn$.next(true);
            if (e[0].name == 'New York') {
                _this._isAdmin$.next(true);
            }
        });
    }
    LoginService.prototype.createUser = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users';
        return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.getUsers = function () {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users';
        return this._http.get(_path, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.login = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users/login';
        return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    LoginService.prototype.checkLogin = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var _path = environment.serverProtocol + environment.serverUrl + ':' + environment.serverPort + '/users/check';
        return this._http.post(_path, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    Object.defineProperty(LoginService.prototype, "userInfo$", {
        get: function () {
            return this._userInfo$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.setuserInfo$ = function (userInfo) {
        this._userInfo$.next(userInfo);
    };
    Object.defineProperty(LoginService.prototype, "isLoggedIn$", {
        get: function () {
            return this._isLoggedIn$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.setIsLoggedIn$ = function (isLoggedIn) {
        this._isLoggedIn$.next(isLoggedIn);
    };
    Object.defineProperty(LoginService.prototype, "isAdmin$", {
        get: function () {
            return this._isAdmin$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.setIsAdmin$ = function (isAdmin) {
        this._isAdmin$.next(isAdmin);
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LoginService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return LoginService;
}());
LoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], LoginService);
export { LoginService };
//# sourceMappingURL=../../../../src/app/services/login.service.js.map