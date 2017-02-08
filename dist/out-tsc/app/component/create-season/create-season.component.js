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
var CreateSeasonComponent = (function () {
    function CreateSeasonComponent(_applicationService, _router, _loginService) {
        var _this = this;
        this._applicationService = _applicationService;
        this._router = _router;
        this._loginService = _loginService;
        this.seasonName = '';
        this.regionName = '';
        this.subs = [];
        this.regions = [];
        this.seasons = [];
        this.selectedRegions = [];
        this.selected = {};
        this.isAdmin = false;
        var sub = this._loginService.isAdmin$.subscribe(function (isAdmin) { return _this.isAdmin = isAdmin; }, function (error) { });
        this.subs.push(sub);
    }
    CreateSeasonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var data = {
            token: userToken
        };
        this._loginService.checkLogin(data).subscribe(function (e) {
            if (e[0].name != 'New York') {
                _this._router.navigateByUrl('/dashboard');
            }
        });
        $('.modal').modal();
        this.getRegions();
    };
    CreateSeasonComponent.prototype.getRegions = function () {
        var _this = this;
        this._applicationService.getRegions()
            .subscribe(function (data) {
            if (Array.isArray(data)) {
                _this.regions = data;
            }
        }, function (error) { return console.log('error', error); });
    };
    CreateSeasonComponent.prototype.addRegion = function (e) {
        var _this = this;
        e.preventDefault();
        var data = {
            'regionName': this.regionName,
        };
        this._applicationService.createRegion(data)
            .subscribe(function (data) {
            _this.regionName = '';
        }, function (error) { return console.log('error', error); });
    };
    CreateSeasonComponent.prototype.deleteRegion = function (e, _id) {
        var _this = this;
        e.preventDefault();
        var data = {
            '_id': _id
        };
        this._applicationService.deleteRegion(data)
            .subscribe(function (data) {
            _this.getRegions();
        }, function (error) { return console.log('error', error); });
    };
    CreateSeasonComponent.prototype.selectRegion = function (e, _id) {
        e.preventDefault();
        for (var i = 0; i < this.regions.length; i++) {
            if (this.regions[i]._id == _id) {
                this.selectedRegions.push(this.regions[i]);
                this.selected[_id] = true;
                console.log(this.selected);
            }
        }
    };
    CreateSeasonComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var data = {
            'seasonName': this.seasonName,
            'regions': this.selectedRegions
        };
        console.log(data);
        this._applicationService.createSeason(data)
            .subscribe(function (data) {
            _this.seasonName = '';
            _this._router.navigate(['/selectseason']);
        }, function (error) { return console.log('error', error); });
    };
    return CreateSeasonComponent;
}());
CreateSeasonComponent = __decorate([
    Component({
        selector: 'app-create-season',
        templateUrl: './create-season.component.html',
        styleUrls: ['./create-season.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationService, Router, LoginService])
], CreateSeasonComponent);
export { CreateSeasonComponent };
//# sourceMappingURL=../../../../../src/app/component/create-season/create-season.component.js.map