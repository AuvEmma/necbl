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
var PlayerstatComponent = (function () {
    function PlayerstatComponent(_route, _router, _statService) {
        this._route = _route;
        this._router = _router;
        this._statService = _statService;
        this.playerId = '';
        this.player = null;
        this.selectOptions = [];
    }
    PlayerstatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this._route.params.subscribe(function (params) {
            _this.playerId = params['playerid'];
        });
        this.getPlayer(this.playerId);
        window.setTimeout(function () {
            $('select').material_select();
        }, 500);
    };
    PlayerstatComponent.prototype.getPlayer = function (playerid) {
        var _this = this;
        this._statService.getPlayer(playerid).subscribe(function (data) { return _this.player = data[0]; }, function (error) { return console.error(error); });
    };
    return PlayerstatComponent;
}());
PlayerstatComponent = __decorate([
    Component({
        selector: 'app-playerstat',
        templateUrl: './playerstat.component.html',
        styleUrls: ['./playerstat.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, StatService])
], PlayerstatComponent);
export { PlayerstatComponent };
//# sourceMappingURL=../../../../../src/app/component/playerstat/playerstat.component.js.map