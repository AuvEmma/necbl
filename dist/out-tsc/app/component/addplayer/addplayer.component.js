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
        this.school = [];
        this.season = [];
        this.region = [];
        this.selectOptions = [];
    }
    AddplayerComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('seasonId') && localStorage.getItem('regionId') && localStorage.getItem('schoolId')) {
            this.seasonId = localStorage.getItem('seasonId');
            this.regionId = localStorage.getItem('regionId');
            this.schoolId = localStorage.getItem('schoolId');
        }
        else {
            this._router.navigate(['/dashboard']);
        }
    };
    AddplayerComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        this.season.push(this.seasonId);
        this.region.push(this.regionId);
        this.school.push(this.schoolId);
        var data = new Player(this.name, this.grade, this.position, this.number, this.email, this.height, this.school, this.season, this.region);
        this._applicationService.createPlayer(data)
            .subscribe(function (data) {
            if (data.ok) {
                alert('Successful!');
                _this.name = '';
                _this.grade = '';
                _this.position = '';
                _this.number = undefined;
                _this.email = '';
                _this.height = '';
                _this.school = [];
                _this.season = [];
                _this.region = [];
            }
            else {
                alert('Server Error! Please Check Your Entries.');
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