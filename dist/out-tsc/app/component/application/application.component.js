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
import { Application } from '../../models/application';
var ApplicationComponent = (function () {
    function ApplicationComponent(_applicationService, _router) {
        this._applicationService = _applicationService;
        this._router = _router;
        this.schoolId = '';
        this.schoolName = '';
        this.regionName = '';
        this.seasonName = '';
        this.managerName = '';
        this.captainName = '';
        this.teamName = '';
        this.managerPhone = '';
        this.captainPhone = '';
        this.description = '';
        this.seasonId = '';
        this.regionId = '';
        this.players = [];
        this.season = {};
        this.region = {};
        this.school = {};
        this.errorMessage = '';
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('seasonId') && localStorage.getItem('regionId')) {
            this.seasonId = localStorage.getItem('seasonId');
            this.regionId = localStorage.getItem('regionId');
            this.schoolId = localStorage.getItem('schoolId');
            this.seasonName = localStorage.getItem('seasonName');
            this.regionName = localStorage.getItem('regionName');
            this.schoolName = localStorage.getItem('schoolName');
            this.season['id'] = this.seasonId;
            this.season['name'] = this.seasonName;
            this.region['id'] = this.regionId;
            this.region['name'] = this.regionName;
            this.school['id'] = this.schoolId;
            this.school['name'] = this.schoolName;
            this.getPlayers(this.schoolId);
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
    ApplicationComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.players.length < 5) {
            this.errorMessage = 'Not enough players!';
        }
        else {
            var valueArr_1 = this.players.map(function (item) { return item.number; });
            var isDuplicate = valueArr_1.some(function (item, idx) {
                return valueArr_1.indexOf(item) != idx;
            });
            console.log(isDuplicate);
            if (isDuplicate) {
                this.errorMessage = 'Duplicate Player numbers detected! 单次申请中球员号码不能重复！';
                return;
            }
            else if (this.description.length < 150) {
                this.errorMessage = 'Please enter at least 150 characters in description!';
                return;
            }
            var data = new Application(this.schoolId, this.schoolName, this.managerName, this.captainName, this.teamName, this.managerPhone, this.captainPhone, this.description, this.season, this.region, this.players);
            this._applicationService.createApplication(data)
                .subscribe(function (data) {
                if (data.ok) {
                    _this._router.navigateByUrl('/thankyou');
                }
                else {
                    _this.errorMessage = 'Please double check you entries and try again!';
                }
            }, function (error) { return console.log('error', error); });
        }
    };
    ApplicationComponent.prototype.getPlayers = function (schoolId) {
        var _this = this;
        this._applicationService.getPlayers(schoolId)
            .subscribe(function (data) {
            if (data === 'No_Player_Found') {
                _this.players = [];
            }
            else {
                _this.players = data;
            }
        }, function (error) { return console.log('error', error); });
    };
    ApplicationComponent.prototype.deletePlayer = function (e, playerId) {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i]._id === playerId) {
                this.players.splice(i, 1);
            }
        }
    };
    return ApplicationComponent;
}());
ApplicationComponent = __decorate([
    Component({
        selector: 'app-application',
        templateUrl: './application.component.html',
        styleUrls: ['./application.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationService, Router])
], ApplicationComponent);
export { ApplicationComponent };
//# sourceMappingURL=../../../../../src/app/component/application/application.component.js.map