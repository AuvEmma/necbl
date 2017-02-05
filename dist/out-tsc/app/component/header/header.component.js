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
import { LoginService } from '../../services';
import { Router } from '@angular/router';
var HeaderComponent = (function () {
    function HeaderComponent(_loginService, _router) {
        var _this = this;
        this._loginService = _loginService;
        this._router = _router;
        this.subs = [];
        this.isLoggedIn = null;
        var sub = this._loginService.isLoggedIn$.subscribe(function (isLoggedIn) { return _this.isLoggedIn = isLoggedIn; }, function (error) { });
        this.subs.push(sub);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $(".button-collapse").sideNav();
    };
    HeaderComponent.prototype.Logout = function (e) {
        e.preventDefault();
        localStorage.removeItem('schoolId');
        localStorage.removeItem('token');
        localStorage.removeItem('seasonId');
        localStorage.removeItem('regionId');
        this._loginService.setIsLoggedIn$(false);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [LoginService, Router])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=../../../../../src/app/component/header/header.component.js.map