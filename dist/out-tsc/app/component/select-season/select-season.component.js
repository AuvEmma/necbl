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
        this.seasonId = '';
        this.regionId = '';
        this.schoolId = '';
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
            if (this.seasons[i]._id === this.seasonId && this.seasons[i].regions) {
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
        var _this = this;
        e.preventDefault();
        localStorage.setItem('seasonId', this.seasonId);
        localStorage.setItem('regionId', this.regionId);
        this.schoolId = localStorage.getItem('schoolId');
        this._applicationService.getApplication(this.schoolId, this.seasonId)
            .subscribe(function (data) {
            if (data === 'No_Application_Found') {
                for (var i = 0; i < _this.seasons.length; i++) {
                    if (_this.seasons[i]._id === _this.seasonId) {
                        localStorage.setItem('seasonName', _this.seasons[i].name);
                    }
                    ;
                }
                for (var i = 0; i < _this.regions.length; i++) {
                    if (_this.regions[i]._id === _this.regionId) {
                        localStorage.setItem('regionName', _this.regions[i].name);
                    }
                    ;
                }
                _this._router.navigateByUrl('/application');
            }
            else {
                console.log(data);
                alert("You have already applied for " + data[0].season.name + "!");
                localStorage.removeItem('regionId');
                localStorage.removeItem('regionName');
                localStorage.removeItem('seasonName');
                localStorage.removeItem('seasonId');
                _this._router.navigateByUrl('/dashboard');
            }
        }, function (error) { return console.log('error', error); });
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