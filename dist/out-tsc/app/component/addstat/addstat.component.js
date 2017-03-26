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
import { ActivatedRoute, Router } from '@angular/router';
import { StatService } from '../../services';
import { GameService } from '../../services';
var AddstatComponent = (function () {
    function AddstatComponent(_route, _router, _statService, _gameService) {
        this._route = _route;
        this._router = _router;
        this._statService = _statService;
        this._gameService = _gameService;
        this.playerId = '';
        this.gameId = '';
        this.game = '';
        this.player = null;
        this.selectOptions = [];
        this.games = [];
        this.errorMessage = '';
        this.gameData = [];
        this.PTS = 0;
        this.FGM = 0;
        this.FGA = 0;
        this.ThreePM = 0;
        this.ThreePA = 0;
        this.FTM = 0;
        this.FTA = 0;
        this.AST = 0;
        this.BLK = 0;
        this.STL = 0;
        this.PF = 0;
        this.homeScore = 0;
        this.awayScore = 0;
    }
    AddstatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._gameService.getAllGames().subscribe(function (data) {
            if (data === 'No_Game_Found') {
                _this.errorMessage = "No Games Avaliable";
            }
            else {
                _this.games = data;
            }
        }, function (error) { return console.error(error); });
        window.setTimeout(function () {
            _this.selectOptions = [];
            $('.collapsible').collapsible();
        }, 500);
    };
    AddstatComponent.prototype.getPlayerForGame = function (gameId) {
        var _this = this;
        this._gameService.getSingleGame(gameId).subscribe(function (data) {
            _this.gameData = data[0];
            console.log(_this.gameData);
            window.setTimeout(function () {
                $('.collapsible').collapsible();
            }, 500);
        }, function (error) { return console.error(error); });
    };
    AddstatComponent.prototype.getPlayer = function (playerid) {
        var _this = this;
        this._statService.getPlayer(playerid).subscribe(function (data) { return _this.player = data[0]; }, function (error) { return console.error(error); });
    };
    AddstatComponent.prototype.onSubmit = function (game, player, index, team) {
        var data = {
            game: game,
            player: player
        };
        var stat = {
            game: game,
            player: player,
            PTS: this.PTS,
            FGM: this.FGM,
            FGA: this.FGA,
            ThreePM: this.ThreePM,
            ThreePA: this.ThreePA,
            FTM: this.FTM,
            FTA: this.FTA,
            AST: this.AST,
            PF: this.PF,
            STL: this.STL,
            BLK: this.BLK,
        };
        console.log(stat, index, team);
        this.addGameandStatToplayer(stat, index, team);
        this.updateGame(stat, index, team);
    };
    AddstatComponent.prototype.updateGame = function (stat, index, team) {
        var data = {
            stat: stat,
            index: index,
            team: team
        };
        this._statService.addStatToGame(data).subscribe(function (data) {
            if (data.ok) {
            }
        }, function (error) { return console.error(error); });
    };
    AddstatComponent.prototype.addGameandStatToplayer = function (stat, index, team) {
        var data = {
            stat: stat,
            index: index,
            team: team
        };
        this._statService.addStatToPlayer(data).subscribe(function (data) {
            if (data.ok) {
                $('#' + stat.player._id).addClass('disabled');
                $('#' + stat.player._id).html('Already submitted');
            }
        }, function (error) { return console.error(error); });
    };
    AddstatComponent.prototype.submitScore = function (gameData) {
        var data = {
            game: gameData,
            score: {
                homeScore: this.homeScore,
                awayScore: this.awayScore
            }
        };
        this._statService.addScore(data).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(data); });
    };
    return AddstatComponent;
}());
AddstatComponent = __decorate([
    Component({
        selector: 'app-addstat',
        templateUrl: './addstat.component.html',
        styleUrls: ['./addstat.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, StatService, GameService])
], AddstatComponent);
export { AddstatComponent };
//# sourceMappingURL=../../../../../src/app/component/addstat/addstat.component.js.map