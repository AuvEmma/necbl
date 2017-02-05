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
var ApplicationComponent = (function () {
    function ApplicationComponent(_applicationService, _router) {
        this._applicationService = _applicationService;
        this._router = _router;
        this.seasonId = '';
        this.regionId = '';
        this.players = [];
        this.schoolId = '';
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        $('.modal').modal();
        if (localStorage.getItem('seasonId') && localStorage.getItem('regionId')) {
            this.seasonId = localStorage.getItem('seasonId');
            this.regionId = localStorage.getItem('regionId');
            this.schoolId = localStorage.getItem('schoolId');
            this.getPlayers(this.schoolId);
        }
        else {
            this._router.navigate(['/dashboard']);
        }
    };
    ApplicationComponent.prototype.onSubmit = function (e) {
        e.preventDefault();
        if (this.players.length < 6) {
            alert('Not enough players!');
        }
        else {
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
        var _this = this;
        this._applicationService.deletePlayer(playerId)
            .subscribe(function (data) {
            _this.getPlayers(_this.schoolId);
        }, function (error) { return console.log('error', error); });
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