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
import { Player } from '../../models/player';
import { ApplicationService } from '../../services';
var AddplayerComponent = (function () {
    function AddplayerComponent(_applicationService, _router) {
        this._applicationService = _applicationService;
        this._router = _router;
        this.schoolId = [];
        this.school = {};
        this.season = {};
        this.region = {};
        this.seasonshistory = [];
        this.regionshistory = [];
        this.gameshistory = [];
        this.schoolshistory = [];
        this.selectOptions = [];
    }
    AddplayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('seasonId') && localStorage.getItem('regionId') && localStorage.getItem('schoolId')) {
            this.seasonId = localStorage.getItem('seasonId');
            this.regionId = localStorage.getItem('regionId');
            this.schoolId = localStorage.getItem('schoolId');
            this.seasonName = localStorage.getItem('seasonName');
            this.regionName = localStorage.getItem('regionName');
            this.schoolName = localStorage.getItem('schoolName');
        }
        else {
            this._router.navigate(['/dashboard']);
        }
        this._applicationService.getApplication(this.schoolId, this.seasonId)
            .subscribe(function (data) {
            if (data != 'No_Application_Found') {
                _this._router.navigateByUrl('/dashboard');
            }
        }, function (error) { return console.log('error', error); });
    };
    AddplayerComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        this.season['id'] = this.seasonId;
        this.region['id'] = this.regionId;
        this.school['id'] = this.schoolId;
        this.season['name'] = this.seasonName;
        this.region['name'] = this.regionName;
        this.school['name'] = this.schoolName;
        this.seasonshistory.push(this.season);
        this.regionshistory.push(this.region);
        this.schoolshistory.push(this.school);
        var data = new Player(this.name, this.grade, this.position, this.number, this.email, this.height, this.school, this.season, this.region, this.seasonshistory, this.regionshistory, [], this.schoolshistory);
        this._applicationService.createPlayer(data)
            .subscribe(function (data) {
            if (data.ok) {
                _this._router.navigateByUrl('/application');
            }
            else {
                _this.errorMessage = 'Server Error! Please Check Your Entries.';
            }
        }, function (error) { return console.log('error', error); });
    };
    return AddplayerComponent;
}());
AddplayerComponent = __decorate([
    Component({
        selector: 'app-addplayer',
        templateUrl: './addplayer.component.html',
        styleUrls: ['./addplayer.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationService, Router])
], AddplayerComponent);
export { AddplayerComponent };
//# sourceMappingURL=../../../../../src/app/component/addplayer/addplayer.component.js.map