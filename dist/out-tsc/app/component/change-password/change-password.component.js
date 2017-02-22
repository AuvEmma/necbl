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
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.schoolName = '';
        this.passcode = '';
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var data = {
            'schoolName': this.schoolName,
            'passcode': this.passcode,
            'canChangePassword': false
        };
        this._loginService.createUser(data)
            .subscribe(function (data) {
            alert('Successful!');
            _this.schoolName = '';
            _this.passcode = '';
        }, function (error) { return console.log('error', error); });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Component({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.css']
    }),
    __metadata("design:paramtypes", [LoginService, Router])
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=../../../../../src/app/component/change-password/change-password.component.js.map