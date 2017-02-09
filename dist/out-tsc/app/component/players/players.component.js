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
var PlayersComponent = (function () {
    function PlayersComponent(_applicationService, _router) {
        this._applicationService = _applicationService;
        this._router = _router;
        this.players = [];
        this.schoolId = '';
    }
    PlayersComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('schoolId')) {
            this.schoolId = localStorage.getItem('schoolId');
            this.getPlayers(this.schoolId);
        }
        else {
            this._router.navigate(['/dashboard']);
        }
    };
    PlayersComponent.prototype.getPlayers = function (schoolId) {
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
    return PlayersComponent;
}());
PlayersComponent = __decorate([
    Component({
        selector: 'app-players',
        templateUrl: './players.component.html',
        styleUrls: ['./players.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationService, Router])
], PlayersComponent);
export { PlayersComponent };
//# sourceMappingURL=../../../../../src/app/component/players/players.component.js.map