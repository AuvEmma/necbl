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
import { ApplicationService } from '../../services';
import { LoginService } from '../../services';
import { Router } from '@angular/router';
import { GameService } from '../../services';
var CreategameComponent = (function () {
    function CreategameComponent(_gameService, _applicationService, _router, _loginService) {
        var _this = this;
        this._gameService = _gameService;
        this._applicationService = _applicationService;
        this._router = _router;
        this._loginService = _loginService;
        this.subs = [];
        this.isAdmin = false;
        this.allSchools = [];
        this.teams = [];
        this.location = '';
        this.time = '';
        this.refs = [];
        this.refName = '';
        this.refNumber = '';
        this.refEmail = '';
        this.seasons = [];
        this.regions = [];
        this.season = '';
        this.region = '';
        this.away = '';
        this.awayId = '';
        this.homeId = '';
        this.home = '';
        this.selectOptions = [];
        this.date = '';
        var sub = this._loginService.isAdmin$.subscribe(function (isAdmin) { return _this.isAdmin = isAdmin; }, function (error) { });
        this.subs.push(sub);
    }
    CreategameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        if (!userToken) {
            this._router.navigateByUrl('/dashboard');
        }
        var data = {
            token: userToken
        };
        this._loginService.checkLogin(data).subscribe(function (e) {
            if (e[0].name != 'New York') {
                _this._router.navigateByUrl('/dashboard');
            }
        });
        $('.modal').modal();
        this._loginService.getUsers().subscribe(function (data) { return _this.allSchools = data; }, function (error) { return console.error(error); });
        this._applicationService.getRegions().subscribe(function (data) { return _this.regions = data; }, function (error) { return console.error(error); });
        this._applicationService.getSeasons().subscribe(function (data) { return _this.seasons = data; }, function (error) { return console.error(error); });
        window.setTimeout(function () {
            _this.selectOptions = [];
            $('.datepicker').pickadate({
                selectMonths: true,
                selectYears: 5
            });
        }, 50);
    };
    CreategameComponent.prototype.addRef = function (e) {
        e.preventDefault();
        var ref = {
            name: this.refName,
            number: this.refNumber,
            email: this.refEmail
        };
        this.refs.push(ref);
    };
    CreategameComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.home === this.away) {
            alert('Home and Away can not be the same!');
            return;
        }
        for (var i = 0; i < this.allSchools.length; i++) {
            if (this.allSchools[i].name === this.home) {
                this.homeId = this.allSchools[i]._id;
            }
            else if (this.allSchools[i].name === this.away) {
                this.awayId = this.allSchools[i]._id;
            }
        }
        this.date = $('.datepicker').val();
        var teams = [this.home, this.away];
        var ids = [this.homeId, this.awayId];
        var game = {
            schoolIds: ids,
            schoolNames: teams,
            home: this.home,
            away: this.away,
            date: this.date,
            time: this.time,
            season: this.season,
            region: this.region,
            ref: this.refs,
            location: this.location
        };
        this._gameService.createGame(game).subscribe(function (data) { alert('Success!'); _this._router.navigateByUrl('/dashboard'); }, function (error) { return console.error(error); });
    };
    return CreategameComponent;
}());
CreategameComponent = __decorate([
    Component({
        selector: 'app-creategame',
        templateUrl: './creategame.component.html',
        styleUrls: ['./creategame.component.css']
    }),
    __metadata("design:paramtypes", [GameService, ApplicationService, Router, LoginService])
], CreategameComponent);
export { CreategameComponent };
//# sourceMappingURL=../../../../../src/app/component/creategame/creategame.component.js.map