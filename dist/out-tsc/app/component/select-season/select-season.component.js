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
import { ApplicationService } from '../../services';
import { LoginService } from '../../services';
var SelectSeasonComponent = (function () {
    function SelectSeasonComponent(_loginService, _applicationService, _router) {
        var _this = this;
        this._loginService = _loginService;
        this._applicationService = _applicationService;
        this._router = _router;
        this.isCreateBtnShow = true;
        this.seasons = [];
        this.seasonName = '';
        this.regionName = '';
        this.selectOptions = [];
        this.isAdmin = true;
        this.subs = [];
        this.regions = [];
        var sub = this._loginService.isAdmin$.subscribe(function (isAdmin) { return _this.isAdmin = isAdmin; }, function (error) { });
        this.subs.push(sub);
    }
    SelectSeasonComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.removeItem('seasonId');
        localStorage.removeItem('regionId');
        this._applicationService.getSeasons()
            .subscribe(function (data) {
            if (Array.isArray(data))
                _this.seasons = data;
            _this.regions = data.regions;
            console.log(data);
        }, function (error) { return console.error('error', error); });
        window.setTimeout(function () {
            _this.selectOptions = [];
        }, 50);
    };
    SelectSeasonComponent.prototype.getRegions = function () {
        var _this = this;
        for (var i = 0; i < this.seasons.length; i++) {
            if (this.seasons[i]._id === this.seasonName && this.seasons[i].regions) {
                this.regions = this.seasons[i].regions;
            }
            ;
        }
        window.setTimeout(function () {
            _this.selectOptions = [];
            $('select').material_select();
        }, 100);
    };
    SelectSeasonComponent.prototype.Next = function (e) {
        e.preventDefault();
        localStorage.setItem('seasonId', this.seasonName);
        localStorage.setItem('regionId', this.regionName);
        this._router.navigateByUrl('/application');
    };
    return SelectSeasonComponent;
}());
SelectSeasonComponent = __decorate([
    Component({
        selector: 'app-select-season',
        templateUrl: './select-season.component.html',
        styleUrls: ['./select-season.component.css']
    }),
    __metadata("design:paramtypes", [LoginService, ApplicationService, Router])
], SelectSeasonComponent);
export { SelectSeasonComponent };
//# sourceMappingURL=../../../../../src/app/component/select-season/select-season.component.js.map