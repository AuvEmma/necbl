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
import { ApplicationService } from '../../services';
var DashboardComponent = (function () {
    function DashboardComponent(_loginService, _applicationService) {
        var _this = this;
        this._loginService = _loginService;
        this._applicationService = _applicationService;
        this.isAdmin = false;
        this.subs = [];
        this.selectOptions = [];
        this.seasons = [];
        this.isAppComplete = false;
        var sub = this._loginService.isAdmin$.subscribe(function (isAdmin) { return _this.isAdmin = isAdmin; }, function (error) { });
        this.subs.push(sub);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var seasonId = localStorage.getItem('seasonId');
        var schoolId = localStorage.getItem('schoolId');
        this._applicationService.getApplication(schoolId, seasonId)
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.isAppComplete = true;
            }
        }, function (error) { return console.log('error', error); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [LoginService, ApplicationService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=../../../../../src/app/component/dashboard/dashboard.component.js.map