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
import { GameService } from '../../services';
var MygamesComponent = (function () {
    function MygamesComponent(_applicationService, _router, _loginService, _gameService) {
        this._applicationService = _applicationService;
        this._router = _router;
        this._loginService = _loginService;
        this._gameService = _gameService;
        this.games = [];
        this.errorMessage = '';
    }
    MygamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var schoolId = localStorage.getItem('schoolId');
        if (!schoolId) {
            localStorage.clear();
            alert('please login again!');
            this._router.navigateByUrl('/login');
        }
        this._gameService.getMyGames(schoolId).subscribe(function (data) {
            if (data === 'No_Game_Found') {
                _this.errorMessage = "No Games Avaliable";
            }
            else {
                _this.games = data;
            }
        }, function (error) { return console.error(error); });
    };
    return MygamesComponent;
}());
MygamesComponent = __decorate([
    Component({
        selector: 'app-mygames',
        templateUrl: './mygames.component.html',
        styleUrls: ['./mygames.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationService, Router, LoginService, GameService])
], MygamesComponent);
export { MygamesComponent };
//# sourceMappingURL=../../../../../src/app/component/mygames/mygames.component.js.map